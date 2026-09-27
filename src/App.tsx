import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { SceneId, MissionNumber } from './types/simulation';
import {
  SCENE_1_DATA,
  SCENE_2_DATA,
  SCENE_3_DATA,
  SCENE_4_DATA,
  SCENE_5_DATA,
  SCENE_6_DATA,
  SCENE_7_DATA,
  SCENE_8_DATA,
  SCENE_9_DATA,
  SCENE_10_DATA,
  SCENE_11_DATA,
  SCENE_12_DATA,
  SCENE_13_DATA,
} from './data/scenarioData';
import { playSound, ambienceEngine, AmbienceType } from './utils/soundEffects';
import { ScoreHeader } from './components/ScoreHeader';
import { NamCharacter } from './components/NamCharacter';
import { OlderStudentCharacter } from './components/OlderStudentCharacter';
import { ClassroomMysteryCharacter } from './components/ClassroomMysteryCharacter';
import { Scene5Illustration } from './components/Scene5Illustration';
import { StartScreen } from './components/StartScreen';
import { CompletionScreen } from './components/CompletionScreen';

// Bản đồ âm thanh môi trường chuẩn cho từng Scene
const SCENE_AMBIENCE_MAP: Record<SceneId, AmbienceType> = {
  start: 'none',
  scene_1: 'corridor',
  scene_2: 'corridor_tense',
  scene_3: 'corridor_tense',
  scene_4: 'corridor',
  scene_5: 'peaceful',
  scene_6: 'school_gate',
  scene_7: 'school_gate',
  scene_8: 'school_gate',
  scene_9: 'school_gate',
  scene_10: 'classroom',
  scene_11: 'classroom',
  scene_12: 'classroom',
  scene_13: 'classroom',
  completed: 'peaceful',
};

export default function App() {
  const [currentScene, setCurrentScene] = useState<SceneId>('start');
  const [activeMission, setActiveMission] = useState<MissionNumber>(1);
  const [completedMissions, setCompletedMissions] = useState<number[]>([]);
  const [score, setScore] = useState<number>(50);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [scoreDelta, setScoreDelta] = useState<{ value: number; id: number } | null>(null);

  // Scene specific sub-states
  const [scene3ShowError, setScene3ShowError] = useState<boolean>(false);
  const [scene5SelectedOption, setScene5SelectedOption] = useState<string | null>(null);

  // Cleanup ambience on unmount
  useEffect(() => {
    return () => {
      ambienceEngine.stop();
    };
  }, []);

  // Update Ambience whenever scene or soundEnabled changes
  useEffect(() => {
    ambienceEngine.setEnabled(soundEnabled);
    if (soundEnabled) {
      ambienceEngine.setAmbience(SCENE_AMBIENCE_MAP[currentScene]);
    } else {
      ambienceEngine.stop();
    }
  }, [currentScene, soundEnabled]);

  // Handle scene-entry sound effects (SFX)
  useEffect(() => {
    if (!soundEnabled || currentScene === 'start' || currentScene === 'completed') {
      return;
    }

    if (currentScene === 'scene_2') {
      playSound.warningPulse(soundEnabled);
      playSound.buzzer(soundEnabled);
      playSound.scoreDecrease(soundEnabled);
    } else if (currentScene === 'scene_4') {
      playSound.chime(soundEnabled);
      playSound.sparkle(soundEnabled);
    } else if (currentScene === 'scene_7') {
      playSound.buzzer(soundEnabled);
    } else if (currentScene === 'scene_8') {
      playSound.warningPulse(soundEnabled);
    } else if (currentScene === 'scene_9') {
      playSound.chime(soundEnabled);
      playSound.sparkle(soundEnabled);
    } else if (currentScene === 'scene_11') {
      playSound.buzzer(soundEnabled);
      playSound.warningPulse(soundEnabled);
    } else if (currentScene === 'scene_12') {
      playSound.warningPulse(soundEnabled);
    } else if (currentScene === 'scene_13') {
      playSound.chime(soundEnabled);
      playSound.sparkle(soundEnabled);
      setTimeout(() => {
        playSound.victoryFanfare(soundEnabled);
      }, 300);
    }
  }, [currentScene, soundEnabled]);

  const triggerScoreChange = (newScore: number, delta: number) => {
    setScore(newScore);
    setScoreDelta({ value: delta, id: Date.now() });
    setTimeout(() => {
      setScoreDelta((prev) => (prev?.id === prev?.id ? null : prev));
    }, 2000);
  };

  const handleStart = () => {
    playSound.click(soundEnabled);
    playSound.transition(soundEnabled);
    setCurrentScene('scene_1');
    setActiveMission(1);
    setCompletedMissions([]);
    setScore(50);
    setScoreDelta(null);
    setScene3ShowError(false);
    setScene5SelectedOption(null);
  };

  // Toggle sound effects & ambience
  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (!nextState) {
      ambienceEngine.stop();
    }
  };

  // ================= TÌNH HUỐNG 1 HANDLERS =================
  const handleScene1Choice = (choiceId: string) => {
    playSound.click(soundEnabled);
    if (choiceId === 'A') {
      playSound.scoreDecrease(soundEnabled);
      triggerScoreChange(0, -50);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_2');
    } else if (choiceId === 'B') {
      playSound.transition(soundEnabled);
      setCurrentScene('scene_3');
      setScene3ShowError(false);
    } else if (choiceId === 'C') {
      playSound.scoreIncrease(soundEnabled);
      triggerScoreChange(100, 50);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_4');
    }
  };

  const handleScene3Choice = (choiceId: string) => {
    playSound.click(soundEnabled);
    if (choiceId === 'B1') {
      playSound.buzzer(soundEnabled);
      playSound.warningPulse(soundEnabled);
      playSound.scoreDecrease(soundEnabled);
      triggerScoreChange(20, -30);
      setScene3ShowError(true);
    } else if (choiceId === 'B2') {
      playSound.chime(soundEnabled);
      playSound.scoreIncrease(soundEnabled);
      triggerScoreChange(75, 25);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_5');
      setScene5SelectedOption(null);
    }
  };

  const handleScene5Choice = (optionId: string) => {
    playSound.click(soundEnabled);
    setScene5SelectedOption(optionId);
    if (optionId === '1' || optionId === '2') {
      playSound.buzzer(soundEnabled);
      playSound.warningPulse(soundEnabled);
      if (score > 50) {
        triggerScoreChange(Math.max(40, score - 20), -20);
        playSound.scoreDecrease(soundEnabled);
      }
    } else if (optionId === '3') {
      playSound.chime(soundEnabled);
      playSound.sparkle(soundEnabled);
      playSound.scoreIncrease(soundEnabled);
      triggerScoreChange(100, 100 - score);
    }
  };

  const handleFinishMission1 = () => {
    playSound.click(soundEnabled);
    playSound.transition(soundEnabled);
    setCompletedMissions((prev) => Array.from(new Set([...prev, 1])));
    setActiveMission(2);
    setCurrentScene('scene_6');
    setScore(75);
  };

  // ================= TÌNH HUỐNG 2 HANDLERS =================
  const handleScene6Choice = (choiceId: string) => {
    playSound.click(soundEnabled);
    if (choiceId === 'A') {
      playSound.scoreDecrease(soundEnabled);
      triggerScoreChange(Math.max(25, score - 35), -35);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_7');
    } else if (choiceId === 'B') {
      playSound.warningPulse(soundEnabled);
      triggerScoreChange(Math.max(40, score - 15), -15);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_8');
    } else if (choiceId === 'C') {
      playSound.chime(soundEnabled);
      playSound.sparkle(soundEnabled);
      playSound.scoreIncrease(soundEnabled);
      triggerScoreChange(Math.min(100, score + 25), 25);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_9');
    }
  };

  const handleFinishMission2 = () => {
    playSound.click(soundEnabled);
    playSound.transition(soundEnabled);
    setCompletedMissions((prev) => Array.from(new Set([...prev, 2])));
    setActiveMission(3);
    setCurrentScene('scene_10');
  };

  // ================= TÌNH HUỐNG 3 HANDLERS =================
  const handleScene10Choice = (choiceId: string) => {
    playSound.click(soundEnabled);
    if (choiceId === 'A') {
      playSound.scoreDecrease(soundEnabled);
      triggerScoreChange(Math.max(30, score - 25), -25);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_11');
    } else if (choiceId === 'B') {
      playSound.scoreDecrease(soundEnabled);
      triggerScoreChange(Math.max(35, score - 15), -15);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_12');
    } else if (choiceId === 'C') {
      playSound.chime(soundEnabled);
      playSound.sparkle(soundEnabled);
      playSound.scoreIncrease(soundEnabled);
      triggerScoreChange(100, 25);
      playSound.transition(soundEnabled);
      setCurrentScene('scene_13');
    }
  };

  const handleFinishAllMissions = () => {
    playSound.click(soundEnabled);
    playSound.transition(soundEnabled);
    setCompletedMissions([1, 2, 3]);
    setScore(100);
    setCurrentScene('completed');
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-900 text-slate-800 font-sans select-none overflow-x-hidden">
      {/* Top Navigation & Status Bar */}
      <ScoreHeader
        score={score}
        currentScene={currentScene}
        activeMission={activeMission}
        completedMissions={completedMissions}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        scoreDelta={scoreDelta}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex items-center justify-center p-3 sm:p-6">
        {currentScene === 'start' && <StartScreen onStart={handleStart} />}

        {currentScene === 'completed' && (
          <CompletionScreen score={score} onRestart={handleStart} />
        )}

        {/* ============================================================== */}
        {/* =============== NHIỆM VỤ 1: ÁP LỰC BẠN BÈ ================== */}
        {/* ============================================================== */}

        {/* --- SCENE 1: LỜI RỦ RÊ ĐẦU TIÊN --- */}
        {currentScene === 'scene_1' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-slate-200/90 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <NamCharacter mood="hao_hung" stateLabel={SCENE_1_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="border-b border-slate-100 pb-2.5">
                <span className="text-xs font-black text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                  {SCENE_1_DATA.title}
                </span>
                <p className="text-xs text-slate-500 font-medium mt-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  Bối cảnh: {SCENE_1_DATA.context}
                </p>
              </div>

              {/* Hộp thoại của Nam */}
              <div className="relative bg-gradient-to-r from-amber-50 to-orange-50/70 p-5 sm:p-6 rounded-2xl border-2 border-amber-200/90 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-black text-amber-900 uppercase">
                  <MessageCircle className="w-4 h-4 text-amber-600" />
                  <span>Lời thoại của Nam:</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic">
                  {SCENE_1_DATA.dialog}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-indigo-500" />
                    <span>Lựa chọn phản ứng của em:</span>
                  </p>
                </div>

                <div className="space-y-3">
                  {SCENE_1_DATA.choices.map((choice) => (
                    <button
                      key={choice.id}
                      onClick={() => handleScene1Choice(choice.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-start gap-3.5 ${
                        choice.id === 'A'
                          ? 'bg-rose-50/60 border-rose-200 hover:border-rose-400 hover:bg-rose-50'
                          : choice.id === 'B'
                          ? 'bg-amber-50/60 border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                          : 'bg-emerald-50/80 border-emerald-300 hover:border-emerald-500 hover:bg-emerald-50 ring-1 ring-emerald-200'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 mt-0.5 ${
                          choice.id === 'A'
                            ? 'bg-rose-200 text-rose-800'
                            : choice.id === 'B'
                            ? 'bg-amber-200 text-amber-800'
                            : 'bg-emerald-200 text-emerald-800'
                        }`}
                      >
                        {choice.id}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-xs font-black tracking-wide uppercase mb-0.5 ${
                            choice.id === 'A'
                              ? 'text-rose-800'
                              : choice.id === 'B'
                              ? 'text-amber-800'
                              : 'text-emerald-800'
                          }`}
                        >
                          {choice.label}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">
                          {choice.text}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 2: HẬU QUẢ CỦA LỰA CHỌN A --- */}
        {currentScene === 'scene_2' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-rose-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-shake">
            <div className="lg:col-span-5 flex flex-col">
              <NamCharacter mood="dac_y" stateLabel={SCENE_2_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-rose-700 uppercase tracking-wider bg-rose-100 px-3 py-1 rounded-lg border border-rose-200">
                  {SCENE_2_DATA.title}
                </span>
              </div>

              {/* Lời thoại Nam */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800 italic font-semibold text-sm sm:text-base">
                <div className="text-xs font-black text-slate-500 uppercase not-italic mb-1">
                  Nam phản hồi:
                </div>
                {SCENE_2_DATA.dialog}
              </div>

              {/* Feedback văn bản */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 border-2 border-rose-400 shadow-md">
                <div className="flex items-center gap-2.5 text-rose-700 font-black text-base sm:text-lg mb-2">
                  <ShieldAlert className="w-6 h-6 text-rose-600 animate-pulse" />
                  <span>{SCENE_2_DATA.feedback.title}</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-rose-950 leading-relaxed">
                  {SCENE_2_DATA.feedback.content}
                </p>
                <div className="mt-3 text-xs font-extrabold text-rose-800 bg-rose-200/60 px-3 py-1.5 rounded-xl inline-block">
                  ⚠️ Điểm Bản Lĩnh bị tụt xuống: 0 / 100
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    playSound.click(soundEnabled);
                    playSound.transition(soundEnabled);
                    setCurrentScene('scene_1');
                    setScore(50);
                    setScoreDelta(null);
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white text-base font-black shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-rose-800"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>{SCENE_2_DATA.retryButton}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 3: ÁP LỰC TỪ BẠN BÈ --- */}
        {currentScene === 'scene_3' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-amber-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <NamCharacter mood="khich_bac" stateLabel={SCENE_3_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-lg border border-amber-200">
                  {SCENE_3_DATA.title}
                </span>
              </div>

              {/* Lời thoại Nam */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50/70 p-5 rounded-2xl border-2 border-amber-200/90 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-black text-amber-900 uppercase">
                  <MessageCircle className="w-4 h-4 text-amber-600" />
                  <span>Nam tiếp tục khiêu khích:</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic">
                  {SCENE_3_DATA.dialog}
                </p>
              </div>

              {scene3ShowError ? (
                <div className="space-y-4">
                  {/* Feedback hiển thị văn bản */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 border-2 border-rose-400 shadow-md">
                    <div className="flex items-center gap-2 text-rose-700 font-black text-base sm:text-lg mb-2">
                      <AlertTriangle className="w-6 h-6 text-rose-600 animate-bounce" />
                      <span>Lựa chọn chưa phù hợp!</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-rose-950 leading-relaxed">
                      {SCENE_3_DATA.feedbackB1.content}
                    </p>
                    <div className="mt-2 text-xs font-extrabold text-rose-800 bg-rose-200/70 px-3 py-1 rounded-xl inline-block">
                      ⚠️ Điểm Bản Lĩnh bị giảm: -30 (Còn 20 / 100)
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      playSound.click(soundEnabled);
                      playSound.transition(soundEnabled);
                      setCurrentScene('scene_1');
                      setScore(50);
                      setScene3ShowError(false);
                    }}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white text-base font-black shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-rose-800"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>{SCENE_3_DATA.retryButton}</span>
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-amber-600" />
                      <span>Chọn phản ứng tiếp theo:</span>
                    </p>
                  </div>

                  <div className="space-y-3">
                    {SCENE_3_DATA.choices.map((choice) => (
                      <button
                        key={choice.id}
                        onClick={() => handleScene3Choice(choice.id)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-start gap-3.5 ${
                          choice.id === 'B1'
                            ? 'bg-rose-50/60 border-rose-200 hover:border-rose-400 hover:bg-rose-50'
                            : 'bg-emerald-50/80 border-emerald-300 hover:border-emerald-500 hover:bg-emerald-50 ring-1 ring-emerald-200'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 mt-0.5 ${
                            choice.id === 'B1'
                              ? 'bg-rose-200 text-rose-800'
                              : 'bg-emerald-200 text-emerald-800'
                          }`}
                        >
                          {choice.id}
                        </div>
                        <div className="flex-1">
                          <div
                            className={`text-xs font-black tracking-wide uppercase mb-0.5 ${
                              choice.id === 'B1' ? 'text-rose-800' : 'text-emerald-800'
                            }`}
                          >
                            {choice.label}
                          </div>
                          <div className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">
                            {choice.text}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- SCENE 4: KIÊN QUYẾT TỪ CHỐI --- */}
        {currentScene === 'scene_4' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <NamCharacter mood="lung_tung" stateLabel={SCENE_4_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200">
                  {SCENE_4_DATA.title}
                </span>
              </div>

              {/* Lời thoại Nam */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50/70 p-5 rounded-2xl border-2 border-emerald-200/90 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-black text-emerald-900 uppercase">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Nam ngập ngừng lúng túng:</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic">
                  {SCENE_4_DATA.dialog}
                </p>
              </div>

              {/* Lời khen & Bản lĩnh */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 border-2 border-emerald-400 shadow-md">
                <div className="flex items-center gap-2 text-emerald-800 font-black text-base sm:text-lg mb-2">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  <span>BẢN LĨNH XUẤT SẮC!</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-emerald-950 leading-relaxed">
                  Em đã kiên quyết nói “KHÔNG” trước cám dỗ, đồng thời chia sẻ thông tin đúng đắn để cảnh tỉnh bạn mình. Đây là hành động dũng cảm và chuẩn mực!
                </p>
                <div className="mt-3 text-xs font-extrabold text-emerald-800 bg-emerald-200/70 px-3 py-1.5 rounded-xl inline-block">
                  ⭐ Đạt tối đa: 100 / 100 Điểm Bản Lĩnh!
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    playSound.click(soundEnabled);
                    playSound.transition(soundEnabled);
                    setCurrentScene('scene_5');
                    setScene5SelectedOption(null);
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-base font-black shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-emerald-800"
                >
                  <span>{SCENE_4_DATA.nextButton}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 5: HÀNH ĐỘNG TIẾP THEO --- */}
        {currentScene === 'scene_5' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-indigo-200 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <Scene5Illustration />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-indigo-700 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                  {SCENE_5_DATA.title}
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mt-2 leading-snug">
                  {SCENE_5_DATA.question}
                </h3>
              </div>

              <div className="space-y-2.5">
                {SCENE_5_DATA.choices.map((choice) => {
                  const isSelected = scene5SelectedOption === choice.id;
                  return (
                    <button
                      key={choice.id}
                      onClick={() => handleScene5Choice(choice.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-start gap-3.5 ${
                        isSelected
                          ? choice.isCorrect
                            ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-300'
                            : 'bg-rose-50 border-rose-400 ring-2 ring-rose-200'
                          : 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 mt-0.5 ${
                          isSelected
                            ? choice.isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {choice.id}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-black text-slate-500 tracking-wide uppercase mb-0.5">
                          {choice.label}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                          {choice.text}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback dạng text hiển thị */}
              {scene5SelectedOption && (
                <div className="pt-1">
                  {scene5SelectedOption === '3' ? (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 border-2 border-emerald-400 shadow-md">
                      <div className="flex items-center gap-2 text-emerald-800 font-black text-base sm:text-lg mb-1">
                        <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        <span>CHÍNH XÁC!</span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-emerald-950 leading-relaxed mb-3">
                        {SCENE_5_DATA.choices[2].feedback}
                      </p>
                      <button
                        onClick={handleFinishMission1}
                        className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-base font-black shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-emerald-800"
                      >
                        <span>{SCENE_5_DATA.nextMissionButton}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 border-2 border-rose-400 shadow-md">
                      <div className="flex items-center gap-2 text-rose-700 font-black text-base mb-1">
                        <AlertTriangle className="w-5 h-5 text-rose-600" />
                        <span>Chưa chính xác!</span>
                      </div>
                      <p className="text-sm font-semibold text-rose-950 leading-relaxed">
                        {scene5SelectedOption === '1'
                          ? SCENE_5_DATA.choices[0].feedback
                          : SCENE_5_DATA.choices[1].feedback}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ============ NHIỆM VỤ 2: LY NƯỚC LẠ Ở CỔNG TRƯỜNG ============ */}
        {/* ============================================================== */}

        {/* --- SCENE 6: LỜI MỜI BẤT NGỜ --- */}
        {currentScene === 'scene_6' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-sky-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <OlderStudentCharacter sceneId="scene_6" stateLabel={SCENE_6_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="border-b border-slate-100 pb-2.5">
                <span className="text-xs font-black text-sky-700 uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-lg border border-sky-200">
                  {SCENE_6_DATA.title}
                </span>
                <p className="text-xs text-slate-500 font-medium mt-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  Bối cảnh: {SCENE_6_DATA.context}
                </p>
              </div>

              {/* Lời thoại Bạn lớn */}
              <div className="bg-gradient-to-r from-sky-50 to-blue-50/70 p-5 sm:p-6 rounded-2xl border-2 border-sky-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-black text-sky-900 uppercase">
                  <MessageCircle className="w-4 h-4 text-sky-600" />
                  <span>Bạn lớn mời mọc:</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic">
                  {SCENE_6_DATA.dialog}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-sky-600" />
                    <span>Lựa chọn của học sinh:</span>
                  </p>
                </div>

                <div className="space-y-3">
                  {SCENE_6_DATA.choices.map((choice) => (
                    <button
                      key={choice.id}
                      onClick={() => handleScene6Choice(choice.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-start gap-3.5 ${
                        choice.id === 'A'
                          ? 'bg-rose-50/60 border-rose-200 hover:border-rose-400 hover:bg-rose-50'
                          : choice.id === 'B'
                          ? 'bg-amber-50/60 border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                          : 'bg-emerald-50/80 border-emerald-300 hover:border-emerald-500 hover:bg-emerald-50 ring-1 ring-emerald-200'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 mt-0.5 ${
                          choice.id === 'A'
                            ? 'bg-rose-200 text-rose-800'
                            : choice.id === 'B'
                            ? 'bg-amber-200 text-amber-800'
                            : 'bg-emerald-200 text-emerald-800'
                        }`}
                      >
                        {choice.id}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-xs font-black tracking-wide uppercase mb-0.5 ${
                            choice.id === 'A'
                              ? 'text-rose-800'
                              : choice.id === 'B'
                              ? 'text-amber-800'
                              : 'text-emerald-800'
                          }`}
                        >
                          {choice.label}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">
                          {choice.text}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 7: HẬU QUẢ LỰA CHỌN A --- */}
        {currentScene === 'scene_7' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-rose-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-shake">
            <div className="lg:col-span-5 flex flex-col">
              <OlderStudentCharacter sceneId="scene_7" stateLabel={SCENE_7_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-rose-700 uppercase tracking-wider bg-rose-100 px-3 py-1 rounded-lg border border-rose-200">
                  {SCENE_7_DATA.title}
                </span>
              </div>

              {/* Lời thoại Bạn lớn */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800 italic font-semibold text-sm sm:text-base">
                <div className="text-xs font-black text-slate-500 uppercase not-italic mb-1">
                  Bạn lớn phản hồi:
                </div>
                {SCENE_7_DATA.dialog}
              </div>

              {/* Feedback văn bản */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 border-2 border-rose-400 shadow-md">
                <div className="flex items-center gap-2.5 text-rose-700 font-black text-base sm:text-lg mb-2">
                  <ShieldAlert className="w-6 h-6 text-rose-600 animate-pulse" />
                  <span>{SCENE_7_DATA.feedback.title}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-rose-950 leading-relaxed">
                  {SCENE_7_DATA.feedback.content}
                </p>
                <div className="mt-3 text-xs font-extrabold text-rose-800 bg-rose-200/60 px-3 py-1.5 rounded-xl inline-block">
                  ⚠️ BẢN LĨNH: giảm 35 điểm
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    playSound.click(soundEnabled);
                    playSound.transition(soundEnabled);
                    setCurrentScene('scene_6');
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white text-base font-black shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-rose-800"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>{SCENE_7_DATA.retryButton}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 8: LỰA CHỌN B – DỪNG LẠI TÒ MÒ --- */}
        {currentScene === 'scene_8' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-amber-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <OlderStudentCharacter sceneId="scene_8" stateLabel={SCENE_8_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-lg border border-amber-200">
                  {SCENE_8_DATA.title}
                </span>
              </div>

              {/* Lời thoại Bạn lớn */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800 italic font-semibold text-sm sm:text-base">
                <div className="text-xs font-black text-slate-500 uppercase not-italic mb-1">
                  Bạn lớn tiếp tục:
                </div>
                {SCENE_8_DATA.dialog}
              </div>

              {/* Feedback văn bản */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-400 shadow-md">
                <div className="flex items-center gap-2 text-amber-800 font-black text-base sm:text-lg mb-2">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <span>{SCENE_8_DATA.feedback.title}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-amber-950 leading-relaxed">
                  {SCENE_8_DATA.feedback.content}
                </p>
                <div className="mt-2 text-xs font-extrabold text-amber-800 bg-amber-200/70 px-3 py-1 rounded-xl inline-block">
                  ⚠️ BẢN LĨNH: giảm 15 điểm
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    playSound.click(soundEnabled);
                    playSound.transition(soundEnabled);
                    setCurrentScene('scene_6');
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-base font-black shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-amber-700"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>{SCENE_8_DATA.retryButton}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 9: LỰA CHỌN C – XỬ LÝ ĐÚNG --- */}
        {currentScene === 'scene_9' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <OlderStudentCharacter sceneId="scene_9" stateLabel={SCENE_9_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200">
                  {SCENE_9_DATA.title}
                </span>
              </div>

              {/* Lời thoại Bạn lớn: "Ừ, thôi vậy..." */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50/70 p-5 rounded-2xl border-2 border-emerald-200/90 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-black text-emerald-900 uppercase">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Bạn lớn bỏ đi:</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic">
                  {SCENE_9_DATA.dialog}
                </p>
              </div>

              {/* Feedback văn bản */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 border-2 border-emerald-400 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-black text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <span>{SCENE_9_DATA.feedback.title}</span>
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-600 text-white shadow-sm">
                    {SCENE_9_DATA.feedback.badge}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-emerald-950 leading-relaxed">
                  {SCENE_9_DATA.feedback.content}
                </p>
              </div>

              <div>
                <button
                  onClick={handleFinishMission2}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-base font-black shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-teal-800"
                >
                  <span>{SCENE_9_DATA.nextButton}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* =============== NHIỆM VỤ 3: ĐỒ VẬT ĐÁNG NGỜ ================== */}
        {/* ============================================================== */}

        {/* --- SCENE 10: TÌNH HUỐNG TRONG LỚP HỌC --- */}
        {currentScene === 'scene_10' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-indigo-200 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <ClassroomMysteryCharacter sceneId="scene_10" stateLabel={SCENE_10_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="border-b border-slate-100 pb-2.5">
                <span className="text-xs font-black text-indigo-700 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                  {SCENE_10_DATA.title}
                </span>
                <p className="text-xs text-slate-500 font-medium mt-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  Bối cảnh: {SCENE_10_DATA.context}
                </p>
              </div>

              {/* Lời thoại Bạn học sinh */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50/70 p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-black text-indigo-900 uppercase">
                  <MessageCircle className="w-4 h-4 text-indigo-600" />
                  <span>Bạn học sinh nói:</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic">
                  {SCENE_10_DATA.dialog}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-indigo-600" />
                    <span>Lựa chọn của em:</span>
                  </p>
                </div>

                <div className="space-y-3">
                  {SCENE_10_DATA.choices.map((choice) => (
                    <button
                      key={choice.id}
                      onClick={() => handleScene10Choice(choice.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-start gap-3.5 ${
                        choice.id === 'A'
                          ? 'bg-rose-50/60 border-rose-200 hover:border-rose-400 hover:bg-rose-50'
                          : choice.id === 'B'
                          ? 'bg-amber-50/60 border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                          : 'bg-emerald-50/80 border-emerald-300 hover:border-emerald-500 hover:bg-emerald-50 ring-1 ring-emerald-200'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 mt-0.5 ${
                          choice.id === 'A'
                            ? 'bg-rose-200 text-rose-800'
                            : choice.id === 'B'
                            ? 'bg-amber-200 text-amber-800'
                            : 'bg-emerald-200 text-emerald-800'
                        }`}
                      >
                        {choice.id}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-xs font-black tracking-wide uppercase mb-0.5 ${
                            choice.id === 'A'
                              ? 'text-rose-800'
                              : choice.id === 'B'
                              ? 'text-amber-800'
                              : 'text-emerald-800'
                          }`}
                        >
                          {choice.label}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">
                          {choice.text}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 11: HẬU QUẢ LỰA CHỌN A --- */}
        {currentScene === 'scene_11' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-rose-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-shake">
            <div className="lg:col-span-5 flex flex-col">
              <ClassroomMysteryCharacter sceneId="scene_11" stateLabel={SCENE_11_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-rose-700 uppercase tracking-wider bg-rose-100 px-3 py-1 rounded-lg border border-rose-200">
                  {SCENE_11_DATA.title}
                </span>

                <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 italic font-semibold text-sm">
                  ⚠️ Bạn học sinh dừng lại ngay khi có cảnh báo nguy hiểm!
                </div>
              </div>

              {/* Feedback văn bản */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 border-2 border-rose-400 shadow-md">
                <div className="flex items-center gap-2.5 text-rose-700 font-black text-base sm:text-lg mb-2">
                  <ShieldAlert className="w-6 h-6 text-rose-600 animate-pulse" />
                  <span>{SCENE_11_DATA.feedback.title}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-rose-950 leading-relaxed">
                  {SCENE_11_DATA.feedback.content}
                </p>
                <div className="mt-3 text-xs font-extrabold text-rose-800 bg-rose-200/60 px-3 py-1.5 rounded-xl inline-block">
                  ⚠️ BẢN LĨNH: giảm 25 điểm
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    playSound.click(soundEnabled);
                    playSound.transition(soundEnabled);
                    setCurrentScene('scene_10');
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white text-base font-black shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-rose-800"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>{SCENE_11_DATA.retryButton}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 12: HẬU QUẢ LỰA CHỌN B --- */}
        {currentScene === 'scene_12' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-amber-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <ClassroomMysteryCharacter sceneId="scene_12" stateLabel={SCENE_12_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-lg border border-amber-200">
                  {SCENE_12_DATA.title}
                </span>
              </div>

              {/* Lời thoại Bạn học sinh */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800 italic font-semibold text-sm sm:text-base">
                <div className="text-xs font-black text-slate-500 uppercase not-italic mb-1">
                  Bạn học sinh ngăn lại:
                </div>
                {SCENE_12_DATA.dialog}
              </div>

              {/* Feedback văn bản */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-400 shadow-md">
                <div className="flex items-center gap-2 text-amber-800 font-black text-base sm:text-lg mb-2">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <span>{SCENE_12_DATA.feedback.title}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-amber-950 leading-relaxed">
                  {SCENE_12_DATA.feedback.content}
                </p>
                <div className="mt-2 text-xs font-extrabold text-amber-800 bg-amber-200/70 px-3 py-1 rounded-xl inline-block">
                  ⚠️ BẢN LĨNH: giảm 15 điểm
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    playSound.click(soundEnabled);
                    playSound.transition(soundEnabled);
                    setCurrentScene('scene_10');
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-base font-black shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-amber-700"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>{SCENE_12_DATA.retryButton}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- SCENE 13: XỬ LÝ ĐÚNG --- */}
        {currentScene === 'scene_13' && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-300 shadow-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <ClassroomMysteryCharacter sceneId="scene_13" stateLabel={SCENE_13_DATA.characterState} />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200">
                  {SCENE_13_DATA.title}
                </span>

                <div className="mt-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 font-bold text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Vùng an toàn đã được kích hoạt! Em đã lùi lại và báo giáo viên.</span>
                </div>
              </div>

              {/* Feedback văn bản */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 border-2 border-emerald-400 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-black text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <span>{SCENE_13_DATA.feedback.title}</span>
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-600 text-white shadow-sm">
                    {SCENE_13_DATA.feedback.badge}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-emerald-950 leading-relaxed">
                  {SCENE_13_DATA.feedback.content}
                </p>
              </div>

              <div>
                <button
                  onClick={handleFinishAllMissions}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-base font-black shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-emerald-800"
                >
                  <span>{SCENE_13_DATA.completionButton}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-950/80 border-t border-slate-800/80 py-2.5 px-4 text-center text-xs text-slate-400">
        <p className="font-medium">
          Mô phỏng giáo dục kỹ năng sống dành cho học sinh tiểu học · Tuyệt đối nói không với thuốc lá điện tử & đồ vật lạ
        </p>
      </footer>
    </div>
  );
}

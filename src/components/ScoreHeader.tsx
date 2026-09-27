import React from 'react';
import { Volume2, VolumeX, Shield, Award, Check } from 'lucide-react';
import { SceneId, MissionNumber } from '../types/simulation';

interface ScoreHeaderProps {
  score: number;
  currentScene: SceneId;
  activeMission: MissionNumber;
  completedMissions: number[];
  soundEnabled: boolean;
  onToggleSound: () => void;
  scoreDelta?: { value: number; id: number } | null;
}

export const ScoreHeader: React.FC<ScoreHeaderProps> = ({
  score,
  currentScene,
  activeMission,
  completedMissions,
  soundEnabled,
  onToggleSound,
  scoreDelta,
}) => {
  // Determine score color category
  // 0–49: đỏ/cam
  // 50–74: vàng
  // 75–100: xanh lá
  let barGradient = 'from-amber-400 to-yellow-400';
  let badgeBorder = 'border-amber-400';
  let badgeBg = 'bg-amber-50 text-amber-700';

  if (score < 50) {
    barGradient = 'from-rose-500 to-orange-400';
    badgeBorder = 'border-rose-400';
    badgeBg = 'bg-rose-50 text-rose-700';
  } else if (score >= 75) {
    barGradient = 'from-emerald-400 to-green-500';
    badgeBorder = 'border-emerald-400';
    badgeBg = 'bg-emerald-50 text-emerald-700';
  }

  const missions = [
    { num: 1, title: 'ÁP LỰC BẠN BÈ' },
    { num: 2, title: 'LỜI MỜI BẤT NGỜ' },
    { num: 3, title: 'ĐỒ VẬT ĐÁNG NGỜ' },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm px-4 sm:px-6 py-2.5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3">
        {/* App Title & Subtitle Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-sky-200/60 shrink-0">
            <Shield className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-800 leading-none">
              THỰC HÀNH – MÔ PHỎNG HỘI THOẠI
            </h1>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Thử thách bản lĩnh – Biết nói “KHÔNG” trước áp lực từ bạn bè
            </p>
          </div>
        </div>

        {/* Center: Mission Tabs: ① ÁP LỰC BẠN BÈ ✓ | ② LỜI MỜI BẤT NGỜ | ③ ĐỒ VẬT ĐÁNG NGỜ */}
        <div className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 text-xs font-bold">
          {missions.map((m) => {
            const isCompleted = completedMissions.includes(m.num);
            const isActive = activeMission === m.num && currentScene !== 'completed' && currentScene !== 'start';
            return (
              <div
                key={m.num}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200'
                    : isCompleted
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'text-slate-400'
                }`}
              >
                <span>
                  {m.num === 1 ? '①' : m.num === 2 ? '②' : '③'} {m.title}
                </span>
                {isCompleted && (
                  <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-600 inline" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Zone: BẢN LĨNH THÁM TỬ Meter & Audio Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Bản lĩnh thám tử score meter */}
          <div className="relative flex items-center gap-2.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-2xl shadow-inner">
            <div className="flex flex-col items-start min-w-[140px]">
              <div className="flex items-center justify-between w-full text-xs font-black tracking-wide mb-1">
                <span className="text-slate-700 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  BẢN LĨNH THÁM TỬ
                </span>
                <span className={`px-1.5 py-0.2 rounded font-extrabold text-[12px] tabular-nums border ${badgeBorder} ${badgeBg}`}>
                  {score} / 100
                </span>
              </div>
              {/* Progress Track */}
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5 shadow-inner">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${barGradient} transition-all duration-500 ease-out shadow-sm`}
                  style={{ width: `${Math.min(100, Math.max(0, score))}%` }}
                ></div>
              </div>
            </div>

            {/* Score Delta Float Animation */}
            {scoreDelta && (
              <div
                key={scoreDelta.id}
                className={`absolute -bottom-7 right-4 text-xs font-black px-2 py-0.5 rounded-full shadow-md animate-bounce z-50 ${
                  scoreDelta.value > 0
                    ? 'bg-emerald-500 text-white'
                    : 'bg-rose-500 text-white'
                }`}
              >
                {scoreDelta.value > 0 ? `+${scoreDelta.value}` : scoreDelta.value} BẢN LĨNH
              </div>
            )}
          </div>

          {/* Sound Toggle Button */}
          <button
            onClick={onToggleSound}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
              soundEnabled
                ? 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100 shadow-sm'
                : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'
            }`}
            title={soundEnabled ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="hidden sm:inline">🔊 Âm thanh ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">🔇 Âm thanh OFF</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { Trophy, Award, RotateCcw, ShieldCheck, HeartHandshake, CheckCircle2, AlertOctagon } from 'lucide-react';
import { COMPLETION_DATA } from '../data/scenarioData';

interface CompletionScreenProps {
  score: number;
  onRestart: () => void;
}

export const CompletionScreen: React.FC<CompletionScreenProps> = ({ score, onRestart }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-auto p-6 sm:p-10 flex flex-col items-center justify-center text-center bg-white/95 backdrop-blur-md rounded-3xl border-4 border-emerald-300 shadow-2xl overflow-hidden animate-fade-in">
      {/* Confetti-like ambient glows */}
      <div className="absolute -top-12 -left-12 w-44 h-44 rounded-full bg-emerald-200/50 blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full bg-amber-200/50 blur-2xl pointer-events-none"></div>

      {/* Trophy Badge */}
      <div className="relative mb-3">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 flex items-center justify-center text-white shadow-xl shadow-amber-400/40 border-4 border-white animate-bounce-subtle">
          <Trophy className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-md" />
        </div>
        <div className="absolute -bottom-2 inset-x-0 flex justify-center">
          <span className="bg-emerald-600 text-white font-black text-xs px-3.5 py-1 rounded-full shadow-md uppercase tracking-wider">
            {COMPLETION_DATA.badge}
          </span>
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase mt-2">
        {COMPLETION_DATA.title}
      </h2>

      {/* Final Bản Lĩnh Status */}
      <div className="my-4 inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 shadow-sm">
        <Award className="w-7 h-7 text-emerald-600 shrink-0" />
        <div className="text-left">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
            ĐIỂM BẢN LĨNH THÁM TỬ ĐẠT ĐƯỢC
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-700 tabular-nums">
            {score} / 100 ĐIỂM
          </div>
        </div>
      </div>

      {/* Summary of 3 Completed Missions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 w-full max-w-3xl text-left">
        <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
            <h3 className="font-extrabold text-sky-900 text-xs uppercase">Nhiệm Vụ 1: Áp Lực Bạn Bè</h3>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            Kiên quyết từ chối hút thử Pod, cảnh báo ma túy ngụy trang và báo người lớn đáng tin cậy.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <h3 className="font-extrabold text-teal-900 text-xs uppercase">Nhiệm Vụ 2: Lời Mời Đồ Uống</h3>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            Không nhận đồ ăn uống lạ ở cổng trường, không đứng lại tò mò, giữ khoảng cách và về với bố mẹ.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
            <h3 className="font-extrabold text-purple-900 text-xs uppercase">Nhiệm Vụ 3: Đồ Vật Đáng Ngờ</h3>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            Tuyệt đối không tự ý mở, nếm, cầm đồ vật lạ; lùi lại vùng an toàn và báo ngay cho giáo viên.
          </p>
        </div>
      </div>

      {/* Congratulatory note */}
      <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-xl mb-5">
        Chúc mừng em đã hoàn thành xuất sắc cả 3 tình huống! Bản lĩnh kiên định, sự thận trọng và tinh thần trách nhiệm chính là vũ khí tốt nhất để bảo vệ bản thân và trường học.
      </p>

      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-base sm:text-lg font-black shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-indigo-800"
      >
        <RotateCcw className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
        <span>{COMPLETION_DATA.playAgainButton}</span>
      </button>
    </div>
  );
};

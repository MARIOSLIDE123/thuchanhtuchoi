import React from 'react';
import { Play, Sparkles, ShieldCheck, HeartHandshake, Compass, CheckCircle } from 'lucide-react';
import { APP_INFO, MISSIONS_INFO } from '../data/scenarioData';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-auto p-6 sm:p-10 flex flex-col items-center justify-center text-center bg-white/95 backdrop-blur-md rounded-3xl border-4 border-indigo-200/90 shadow-2xl overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-amber-200/40 blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-sky-200/40 blur-2xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-emerald-200/30 blur-xl pointer-events-none"></div>

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-extrabold shadow-sm mb-3">
        <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
        <span>BÀI HỌC KỸ NĂNG SỐNG TƯƠNG TÁC · 3 NHIỆM VỤ BẢN LĨNH</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase max-w-3xl drop-shadow-sm">
        {APP_INFO.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-lg sm:text-2xl font-bold text-indigo-600 max-w-2xl">
        {APP_INFO.subtitle}
      </p>

      {/* Sub intro line */}
      <div className="mt-3 px-6 py-2 bg-amber-50/80 border border-amber-200 rounded-2xl">
        <p className="text-sm sm:text-base font-semibold text-amber-900">
          {APP_INFO.startIntro}
        </p>
      </div>

      {/* 3 Missions Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6 w-full max-w-3xl text-left">
        {MISSIONS_INFO.map((m) => (
          <div
            key={m.id}
            className="p-4 rounded-2xl bg-slate-50 hover:bg-white border-2 border-slate-200 hover:border-indigo-300 transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-black">
                  {m.id}
                </span>
                <span className="text-[11px] font-black uppercase text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  {m.title}
                </span>
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm leading-snug">
                {m.fullTitle}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                {m.desc}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-200/80 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Tích lũy Điểm Bản Lĩnh</span>
            </div>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center gap-4 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 text-white text-xl sm:text-2xl font-black shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 active:translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer border-b-4 border-emerald-700"
      >
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 fill-current" />
        </div>
        <span>{APP_INFO.startButton}</span>
      </button>
    </div>
  );
};

import React from 'react';
import { AlertOctagon, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ClassroomMysteryCharacterProps {
  sceneId?: string;
  stateLabel: string;
}

export const ClassroomMysteryCharacter: React.FC<ClassroomMysteryCharacterProps> = ({ sceneId = 'scene_10', stateLabel }) => {
  return (
    <div className={`relative w-full h-full min-h-[380px] max-h-[580px] flex flex-col items-center justify-between p-4 overflow-hidden rounded-2xl border-2 shadow-inner transition-colors duration-300 ${
      sceneId === 'scene_13'
        ? 'bg-gradient-to-b from-emerald-100 via-teal-50 to-green-100 border-emerald-300'
        : sceneId === 'scene_11' || sceneId === 'scene_12'
        ? 'bg-gradient-to-b from-rose-100 via-amber-50 to-orange-100 border-rose-300'
        : 'bg-gradient-to-b from-indigo-50 via-sky-50 to-amber-50 border-indigo-200'
    }`}>
      {/* Classroom Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Blackboard on wall */}
        <div className="absolute top-3 inset-x-10 h-24 bg-emerald-800 rounded-lg border-4 border-amber-800 shadow-sm flex items-center justify-center">
          <span className="text-white/80 font-mono text-[11px] tracking-widest uppercase">
            TIẾT HỌC KỸ NĂNG SỐNG
          </span>
        </div>

        {/* Classroom Floor */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-amber-100/70 border-t border-amber-200"></div>
      </div>

      {/* Mood / Character State Tag */}
      <div className="relative z-10 self-start bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${
          sceneId === 'scene_13' ? 'bg-emerald-500 animate-ping' : 'bg-indigo-500 animate-pulse'
        }`}></span>
        <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
          {stateLabel}
        </span>
      </div>

      {/* Center Classroom Scene SVG */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center py-2">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96">
          <svg viewBox="0 0 320 380" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mysteryPackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>

            {/* School Desk in center */}
            <path d="M40 230 L280 230 L300 260 L20 260 Z" fill="#D97706" stroke="#92400E" strokeWidth="2" />
            {/* Desk Legs */}
            <rect x="50" y="260" width="12" height="110" fill="#78350F" />
            <rect x="258" y="260" width="12" height="110" fill="#78350F" />
            <rect x="80" y="260" width="8" height="95" fill="#92400E" />
            <rect x="230" y="260" width="8" height="95" fill="#92400E" />

            {/* The Mystery Package on the desk */}
            <g transform="translate(135, 215)">
              {/* Suspicious small foil pack */}
              <rect x="0" y="0" width="50" height="34" rx="4" fill="url(#mysteryPackGrad)" stroke="#4C1D95" strokeWidth="1.5" />
              {/* Question mark / unknown symbol */}
              <circle cx="25" cy="17" r="10" fill="#FFFFFF" opacity="0.9" />
              <text x="25" y="22" textAnchor="middle" fill="#7C3AED" fontSize="14" fontWeight="bold">?</text>
            </g>

            {/* Student character standing next to desk */}
            {sceneId === 'scene_13' ? (
              /* SCENE 13: Student stepped BACK into glowing safe zone, hands up, safe */
              <g transform="translate(20, 100)">
                {/* Safe Zone Glowing circle */}
                <ellipse cx="60" cy="275" rx="55" ry="16" fill="#10B981" opacity="0.4" />
                <ellipse cx="60" cy="275" rx="45" ry="12" fill="#34D399" opacity="0.6" />

                {/* Student body stepped back */}
                <ellipse cx="60" cy="180" rx="28" ry="40" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
                <ellipse cx="60" cy="110" rx="22" ry="24" fill="#FDE047" />
                <circle cx="53" cy="108" r="3" fill="#1E293B" />
                <circle cx="67" cy="108" r="3" fill="#1E293B" />
                <path d="M54 120 Q60 126 66 120" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                {/* Hands pointing away to teacher */}
                <path d="M35 170 Q10 150 15 130" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" />
              </g>
            ) : (
              /* SCENE 10, 11, 12: Student standing near desk */
              <g transform="translate(45, 100)">
                <ellipse cx="60" cy="275" rx="35" ry="10" fill="#CBD5E1" opacity="0.5" />
                <ellipse cx="60" cy="180" rx="28" ry="40" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
                <ellipse cx="60" cy="110" rx="22" ry="24" fill="#FDE047" />
                <circle cx="53" cy="108" r="3" fill="#1E293B" />
                <circle cx="67" cy="108" r="3" fill="#1E293B" />
                
                {/* If Scene 11/12: Surprised / frozen arm */}
                {(sceneId === 'scene_11' || sceneId === 'scene_12') ? (
                  <>
                    <path d="M50 122 Q60 118 70 122" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M85 170 Q105 180 95 195" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <path d="M54 118 Q60 125 66 118" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M85 170 Q110 185 125 195" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" />
                  </>
                )}
              </g>
            )}

            {/* Glowing / Alert Badges directly on canvas */}
            {sceneId === 'scene_13' && (
              <g transform="translate(195, 140)">
                <circle cx="25" cy="25" r="28" fill="#10B981" />
                <path d="M14 25 L22 33 L38 17" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            )}

            {(sceneId === 'scene_11' || sceneId === 'scene_12') && (
              <g transform="translate(185, 130)">
                <circle cx="25" cy="25" r="26" fill="#EF4444" />
                <path d="M25 14 L25 26" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                <circle cx="25" cy="33" r="2.5" fill="#FFFFFF" />
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Safety message card */}
      <div className="relative z-10 w-full bg-white/95 backdrop-blur-md py-2 px-4 rounded-xl border border-slate-200 text-center shadow-sm">
        {sceneId === 'scene_13' ? (
          <div className="text-emerald-800 font-extrabold text-sm flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Khu Vực An Toàn · Đã Báo Giáo Viên</span>
          </div>
        ) : (sceneId === 'scene_11' || sceneId === 'scene_12') ? (
          <div className="text-rose-700 font-extrabold text-sm flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-600 animate-bounce" />
            <span>⚠️ CẢNH BÁO: Dừng lại ngay!</span>
          </div>
        ) : (
          <div className="text-slate-700 font-extrabold text-sm">
            Vật Thể Lạ Không Rõ Nguồn Gốc
          </div>
        )}
      </div>
    </div>
  );
};

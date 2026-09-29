import React from 'react';

interface OlderStudentCharacterProps {
  sceneId?: string;
  stateLabel: string;
}

export const OlderStudentCharacter: React.FC<OlderStudentCharacterProps> = ({ sceneId = 'scene_6', stateLabel }) => {
  return (
    <div className="relative w-full h-full min-h-[380px] max-h-[580px] flex flex-col items-center justify-between p-4 overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 via-amber-50 to-orange-100/70 border-2 border-sky-300 shadow-inner">
      {/* Background School Gate Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        {/* School Gate Arch */}
        <div className="absolute top-2 inset-x-8 h-20 border-t-8 border-x-8 border-amber-600/60 rounded-t-3xl">
          <div className="w-full text-center text-[10px] font-black tracking-widest text-amber-900 bg-amber-200/80 py-0.5 uppercase">
            CỔNG TRƯỜNG TIỂU HỌC
          </div>
        </div>

        {/* Tree and road */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-300/60 to-transparent border-t border-slate-300"></div>
        <div className="absolute top-12 left-3 w-20 h-20 rounded-full bg-emerald-400/30 blur-sm"></div>
      </div>

      {/* Mood / Character State Tag */}
      <div className="relative z-10 self-start bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-sky-200 shadow-sm flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
        <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
          {stateLabel}
        </span>
      </div>

      {/* Character Vector SVG: Older Student holding colorful cup */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center py-2">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 transition-all duration-300 transform hover:scale-[1.02]">
          <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="faceGradOld" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#FFF1E8" />
                <stop offset="100%" stopColor="#F5D0BA" />
              </radialGradient>
              <linearGradient id="drinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>

            {/* Shadow under feet */}
            <ellipse cx="150" cy="385" rx="70" ry="14" fill="#CBD5E1" opacity="0.6" />

            {/* Pants */}
            <path d="M110 270 L115 375 L145 375 L148 290 L152 290 L155 375 L185 375 L190 270 Z" fill="#334155" />
            <path d="M106 372 C106 372 110 382 120 382 L146 382 C148 382 148 372 146 372 Z" fill="#1E293B" />
            <path d="M154 372 C152 372 152 382 154 382 L180 382 C190 382 194 372 194 372 Z" fill="#1E293B" />

            {/* Jacket / Hoodie (Older student) */}
            <path d="M90 155 Q150 142 210 155 L215 270 Q150 278 85 270 Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
            <path d="M150 152 L150 272" stroke="#1E40AF" strokeWidth="3" />

            {/* Neck */}
            <rect x="136" y="122" width="28" height="28" fill="#F5D0BA" rx="6" />

            {/* Ears */}
            <circle cx="94" cy="98" r="13" fill="#F5D0BA" />
            <circle cx="206" cy="98" r="13" fill="#F5D0BA" />

            {/* Head */}
            <ellipse cx="150" cy="96" rx="54" ry="56" fill="url(#faceGradOld)" />

            {/* Hair - Older student stylish side-swept cut */}
            <path d="M92 88 C88 56 112 28 152 28 C198 28 214 56 210 88 C200 76 185 74 165 76 C140 78 125 70 105 76 C96 78 92 82 92 88 Z" fill="#1E293B" />

            {/* Face Expressions based on Scene */}
            {sceneId === 'scene_6' && (
              <>
                {/* Friendly encouraging smile */}
                <path d="M115 76 Q128 72 138 76" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M162 76 Q172 72 185 76" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <ellipse cx="126" cy="90" rx="6.5" ry="8" fill="#0F172A" />
                <ellipse cx="174" cy="90" rx="6.5" ry="8" fill="#0F172A" />
                <circle cx="128" cy="87" r="2.5" fill="#FFFFFF" />
                <circle cx="176" cy="87" r="2.5" fill="#FFFFFF" />
                <path d="M132 112 Q150 128 168 112" stroke="#991B1B" strokeWidth="3.5" strokeLinecap="round" />
              </>
            )}

            {sceneId === 'scene_7' && (
              <>
                {/* Pushing closer */}
                <path d="M115 78 Q128 74 138 78" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M162 74 Q172 70 185 76" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <ellipse cx="126" cy="90" rx="6" ry="7" fill="#0F172A" />
                <ellipse cx="174" cy="90" rx="6" ry="7" fill="#0F172A" />
                <path d="M134 112 Q150 122 166 112" stroke="#991B1B" strokeWidth="3.5" strokeLinecap="round" />
              </>
            )}

            {sceneId === 'scene_8' && (
              <>
                {/* Persuasive / slight frown */}
                <path d="M115 80 Q128 82 138 78" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M162 75 Q172 72 185 78" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <ellipse cx="126" cy="90" rx="6" ry="7" fill="#0F172A" />
                <ellipse cx="174" cy="90" rx="6" ry="7" fill="#0F172A" />
                <path d="M136 114 Q150 112 164 116" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
              </>
            )}

            {sceneId === 'scene_9' && (
              <>
                {/* Surprised, giving up */}
                <path d="M116 75 Q126 80 136 82" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M162 82 Q172 80 184 75" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <ellipse cx="126" cy="90" rx="8" ry="9" fill="#0F172A" />
                <ellipse cx="174" cy="90" rx="8" ry="9" fill="#0F172A" />
                <path d="M140 114 Q150 112 160 114" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
              </>
            )}

            {/* Arm holding the mystery drink cup */}
            <path d="M205 160 Q235 190 220 225" stroke="#2563EB" strokeWidth="22" strokeLinecap="round" />
            <circle cx="218" cy="225" r="12" fill="#F5D0BA" />

            {/* Left Arm */}
            <path d="M92 160 Q70 190 85 230" stroke="#2563EB" strokeWidth="22" strokeLinecap="round" />
            <circle cx="85" cy="235" r="11" fill="#F5D0BA" />

            {/* The Colorful Mystery Drink Cup */}
            <g transform="translate(208, 175)">
              {/* Cup container */}
              <path d="M0 10 L6 60 C7 66 33 66 34 60 L40 10 Z" fill="url(#drinkGrad)" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* Cup Lid */}
              <ellipse cx="20" cy="10" rx="22" ry="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
              {/* Straw */}
              <line x1="20" y1="10" x2="26" y2="-12" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
              {/* Suspicious bubbles/ice */}
              <circle cx="15" cy="30" r="3" fill="#FFFFFF" opacity="0.6" />
              <circle cx="25" cy="42" r="4" fill="#FFFFFF" opacity="0.6" />
            </g>
          </svg>
        </div>
      </div>

      {/* Role / School Nameplate */}
      <div className="relative z-10 w-full bg-white/90 backdrop-blur-md py-2 px-4 rounded-xl border border-sky-200 text-center shadow-sm">
        <div className="font-extrabold text-slate-800 text-sm">Học Sinh Lớn Hơn</div>
        <div className="text-[11px] text-slate-500 font-medium">Cổng trường sau giờ học · Người lạ mặt</div>
      </div>
    </div>
  );
};

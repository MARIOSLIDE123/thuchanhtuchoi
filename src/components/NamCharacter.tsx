import React from 'react';
import { NamMood } from '../types/simulation';

interface NamCharacterProps {
  mood: NamMood;
  stateLabel: string;
}

export const NamCharacter: React.FC<NamCharacterProps> = ({ mood, stateLabel }) => {
  return (
    <div className="relative w-full h-full min-h-[380px] max-h-[580px] flex flex-col items-center justify-between p-4 overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 via-amber-50 to-orange-100/60 border-2 border-amber-200/80 shadow-inner">
      {/* Background School Corridor Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Hallway window */}
        <div className="absolute top-4 left-6 w-32 h-44 rounded-t-xl border-4 border-amber-300 bg-gradient-to-b from-sky-200 to-emerald-100 overflow-hidden shadow-sm">
          <div className="w-full h-1/2 border-b-2 border-amber-300"></div>
          <div className="w-1/2 h-full border-r-2 border-amber-300 absolute top-0 left-0"></div>
          {/* Tree outside */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-emerald-300 opacity-60"></div>
        </div>

        {/* Classroom Door frame on right */}
        <div className="absolute top-6 right-6 w-24 h-56 border-2 border-amber-300/60 bg-amber-100/50 rounded-t-lg">
          <div className="mt-2 text-center text-[10px] font-bold text-amber-800 bg-amber-200/70 py-0.5 px-1 rounded mx-2">
            LỚP 6A
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-600 absolute right-2 top-28 shadow-sm"></div>
        </div>

        {/* Floor tiles line */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-amber-200/40 to-transparent border-t border-amber-200/50"></div>
      </div>

      {/* Mood / Character State Tag */}
      <div className="relative z-10 self-start bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-amber-200 shadow-sm flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
        <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
          {stateLabel}
        </span>
      </div>

      {/* Character Vector SVG */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center py-2">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 transition-all duration-300 transform hover:scale-[1.02]">
          <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="faceGrad" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#FFF1E8" />
                <stop offset="100%" stopColor="#F5D0BA" />
              </radialGradient>
              <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <linearGradient id="podGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="50%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>
            </defs>

            {/* Shadow under feet */}
            <ellipse cx="150" cy="385" rx="75" ry="14" fill="#CBD5E1" opacity="0.6" />

            {/* Lower Body - Navy Blue Pants */}
            <path d="M110 270 L115 375 L145 375 L148 290 L152 290 L155 375 L185 375 L190 270 Z" fill="#1E293B" />
            {/* Belt */}
            <rect x="110" y="260" width="80" height="12" rx="3" fill="#334155" />
            <rect x="144" y="260" width="12" height="12" rx="2" fill="#F59E0B" />

            {/* School Shoes */}
            <path d="M106 372 C106 372 110 382 120 382 L146 382 C148 382 148 372 146 372 Z" fill="#0F172A" />
            <path d="M154 372 C152 372 152 382 154 382 L180 382 C190 382 194 372 194 372 Z" fill="#0F172A" />

            {/* Upper Body - White Uniform Shirt */}
            <path d="M95 160 Q150 148 205 160 L212 265 Q150 272 88 265 Z" fill="url(#shirtGrad)" stroke="#CBD5E1" strokeWidth="2" />

            {/* Red Scarf - Khăn quàng đỏ (Primary/Middle school badge of honor) */}
            <path d="M135 152 L150 172 L165 152 L180 185 L155 220 L145 220 L120 185 Z" fill="#EF4444" />
            <path d="M142 165 L158 165 L155 190 L145 190 Z" fill="#DC2626" />
            <path d="M145 190 L160 235 L145 230 Z" fill="#EF4444" />

            {/* Shirt Collar */}
            <path d="M115 145 L138 170 L150 152 L132 142 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d="M185 145 L162 170 L150 152 L168 142 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Neck */}
            <rect x="136" y="125" width="28" height="28" fill="#F5D0BA" rx="6" />

            {/* Ears */}
            <circle cx="94" cy="98" r="13" fill="#F5D0BA" />
            <circle cx="206" cy="98" r="13" fill="#F5D0BA" />
            <circle cx="94" cy="98" r="7" fill="#E2B79D" opacity="0.6" />
            <circle cx="206" cy="98" r="7" fill="#E2B79D" opacity="0.6" />

            {/* Head */}
            <ellipse cx="150" cy="100" rx="55" ry="58" fill="url(#faceGrad)" />

            {/* Black Hair - Student cut with playful bangs */}
            <path d="M92 90 C88 60 110 32 150 32 C195 32 214 62 210 92 C204 82 195 78 184 80 C170 82 165 72 150 74 C132 76 122 84 112 80 C102 76 96 82 92 90 Z" fill="#1E293B" />
            {/* Hair highlight */}
            <path d="M125 45 Q150 38 175 45" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

            {/* --- MOOD SPECIFIC FACES & GESTURES --- */}
            {mood === 'hao_hung' && (
              <>
                {/* Eyebrows: arched & animated */}
                <path d="M115 78 Q128 72 138 78" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M162 78 Q172 72 185 78" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />

                {/* Eyes: wide, enthusiastic shine */}
                <ellipse cx="126" cy="92" rx="7" ry="9" fill="#0F172A" />
                <ellipse cx="174" cy="92" rx="7" ry="9" fill="#0F172A" />
                <circle cx="128" cy="89" r="3" fill="#FFFFFF" />
                <circle cx="176" cy="89" r="3" fill="#FFFFFF" />

                {/* Cheeks: slight flush */}
                <circle cx="112" cy="104" r="8" fill="#F87171" opacity="0.4" />
                <circle cx="188" cy="104" r="8" fill="#F87171" opacity="0.4" />

                {/* Mouth: Broad enthusiastic open grin */}
                <path d="M132 112 Q150 134 168 112 Z" fill="#991B1B" />
                <path d="M137 114 Q150 120 163 114" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

                {/* Left Arm: resting or whispering */}
                <path d="M92 165 Q70 195 85 240" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                <circle cx="85" cy="245" r="11" fill="#F5D0BA" />

                {/* Right Arm: Holding up the sleek peach Pod stick */}
                <path d="M205 165 Q235 195 220 225" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                <circle cx="218" cy="225" r="12" fill="#F5D0BA" />

                {/* Pod Device in hand */}
                <g transform="translate(216, 185) rotate(-15)">
                  <rect x="0" y="0" width="14" height="42" rx="6" fill="url(#podGrad)" stroke="#E11D48" strokeWidth="1.5" />
                  <rect x="3" y="-5" width="8" height="6" rx="2" fill="#334155" />
                  {/* Peach icon hint */}
                  <circle cx="7" cy="20" r="3.5" fill="#F43F5E" />
                  {/* Small vapor sparkle */}
                  <circle cx="7" cy="-12" r="3" fill="#38BDF8" opacity="0.8" />
                  <circle cx="13" cy="-18" r="2" fill="#38BDF8" opacity="0.6" />
                </g>
              </>
            )}

            {mood === 'dac_y' && (
              <>
                {/* Eyebrows: confident smug slant */}
                <path d="M115 80 Q128 75 138 77" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M162 74 Q175 70 188 77" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />

                {/* Eyes: smug wink / half-closed */}
                <path d="M120 93 Q128 86 136 93" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
                <ellipse cx="174" cy="91" rx="7" ry="8" fill="#0F172A" />
                <circle cx="176" cy="88" r="3" fill="#FFFFFF" />

                {/* Smug smirk grin */}
                <path d="M134 114 Q152 110 168 118" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
                <path d="M165 116 Q172 112 170 122" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />

                {/* Left hand on hip */}
                <path d="M92 165 Q65 190 85 220" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                <circle cx="88" cy="222" r="11" fill="#F5D0BA" />

                {/* Right hand thrusting pod forward toward player */}
                <path d="M205 165 Q230 180 235 210" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
                <circle cx="236" cy="214" r="14" fill="#F5D0BA" />

                {/* Pod Device thrust forward */}
                <g transform="translate(230, 180) rotate(20)">
                  <rect x="0" y="0" width="16" height="46" rx="7" fill="url(#podGrad)" stroke="#E11D48" strokeWidth="2" />
                  <rect x="4" y="-6" width="8" height="7" rx="2" fill="#1E293B" />
                  <circle cx="8" cy="22" r="4" fill="#F43F5E" />
                </g>
              </>
            )}

            {mood === 'khich_bac' && (
              <>
                {/* Eyebrows: one high, one low (skeptical / mocking) */}
                <path d="M115 82 Q126 84 136 82" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M160 70 Q174 65 186 73" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

                {/* Eyes: narrowed teasing look */}
                <path d="M118 92 Q128 88 136 94" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
                <ellipse cx="174" cy="90" rx="6" ry="7" fill="#0F172A" />
                <circle cx="176" cy="88" r="2.5" fill="#FFFFFF" />

                {/* Nhếch mép - crooked mocking lip */}
                <path d="M136 117 Q150 118 168 110" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
                <path d="M166 110 Q172 106 172 114" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />

                {/* Arms: Crossed in front defiantly */}
                <path d="M92 165 Q115 210 160 215" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                <path d="M205 165 Q175 215 130 215" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                <circle cx="125" cy="215" r="11" fill="#F5D0BA" />
                <circle cx="165" cy="215" r="11" fill="#F5D0BA" />

                {/* Pod peeking out from hand */}
                <g transform="translate(162, 195) rotate(-35)">
                  <rect x="0" y="0" width="10" height="30" rx="4" fill="url(#podGrad)" />
                  <rect x="2" y="-3" width="6" height="4" rx="1" fill="#1E293B" />
                </g>
              </>
            )}

            {mood === 'lung_tung' && (
              <>
                {/* Eyebrows: angled up in surprise / worry */}
                <path d="M116 74 Q126 80 136 82" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M162 82 Q172 80 184 74" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />

                {/* Eyes: wide, startled round pupils */}
                <ellipse cx="126" cy="92" rx="9" ry="11" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                <ellipse cx="174" cy="92" rx="9" ry="11" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                <ellipse cx="127" cy="92" rx="4.5" ry="6" fill="#0F172A" />
                <ellipse cx="173" cy="92" rx="4.5" ry="6" fill="#0F172A" />

                {/* Sweat drop on forehead / temple */}
                <path d="M194 65 C192 60 197 54 199 50 C201 54 206 60 204 65 C204 68 194 68 194 65 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
                <path d="M96 68 C94 64 98 58 100 55 C102 58 106 64 104 68 C104 71 96 71 96 68 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />

                {/* Mouth: nervous wavy little "o" */}
                <path d="M142 116 Q150 113 158 116 Q150 123 142 116 Z" fill="#991B1B" />

                {/* Arms: hands pulled back awkwardly, hiding pod behind back */}
                <path d="M92 165 Q75 195 90 230" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                <circle cx="92" cy="235" r="11" fill="#F5D0BA" />

                <path d="M205 165 Q225 195 200 230" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                <circle cx="198" cy="235" r="11" fill="#F5D0BA" />

                {/* Pod hidden behind back, barely a colored corner visible */}
                <rect x="202" y="240" width="8" height="15" rx="3" fill="url(#podGrad)" opacity="0.6" />
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Role / School Nameplate */}
      <div className="relative z-10 w-full bg-white/90 backdrop-blur-md py-2 px-4 rounded-xl border border-amber-200 text-center shadow-sm">
        <div className="font-extrabold text-slate-800 text-sm">Học sinh Nam</div>
        <div className="text-[11px] text-slate-500 font-medium">Bạn cùng khối · Trường Tiểu Học</div>
      </div>
    </div>
  );
};

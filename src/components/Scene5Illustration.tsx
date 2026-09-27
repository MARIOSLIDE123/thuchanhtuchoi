import React from 'react';

export const Scene5Illustration: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] max-h-[580px] flex flex-col items-center justify-between p-5 overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50 via-teal-50 to-sky-100 border-2 border-emerald-200/80 shadow-inner">
      {/* Top Banner Tag */}
      <div className="relative z-10 self-start bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-emerald-200 shadow-sm flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
          Môi Trường Học Đường An Toàn
        </span>
      </div>

      {/* Center Illustration: Shield of Trust & Adult Allies */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center py-2">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96">
          <svg viewBox="0 0 320 380" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#FDE047" />
              </linearGradient>
            </defs>

            {/* School Building Backdrop */}
            <rect x="50" y="90" width="220" height="180" rx="16" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            {/* School Roof with Clock Tower */}
            <path d="M40 90 L160 30 L280 90 Z" fill="#EF4444" />
            <rect x="135" y="15" width="50" height="40" fill="#DC2626" rx="4" />
            <circle cx="160" cy="35" r="12" fill="#FFFFFF" />
            <line x1="160" y1="35" x2="160" y2="28" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
            <line x1="160" y1="35" x2="166" y2="35" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

            {/* Windows */}
            <rect x="75" y="110" width="36" height="42" rx="4" fill="#38BDF8" opacity="0.8" />
            <rect x="142" y="110" width="36" height="42" rx="4" fill="#38BDF8" opacity="0.8" />
            <rect x="209" y="110" width="36" height="42" rx="4" fill="#38BDF8" opacity="0.8" />

            {/* School Doorway */}
            <path d="M130 270 L130 190 Q160 175 190 190 L190 270 Z" fill="#0284C7" />

            {/* Shield of Protection */}
            <g transform="translate(160, 230)">
              <path d="M0 -60 C40 -60 70 -45 70 0 C70 50 35 85 0 105 C-35 85 -70 50 -70 0 C-70 -45 -40 -60 0 -60 Z" fill="url(#shieldGrad)" stroke="#FFFFFF" strokeWidth="4" />
              
              {/* Checkmark and Star inside Shield */}
              <circle cx="0" cy="10" r="32" fill="#FFFFFF" />
              <path d="M-14 8 L-4 18 L16 -2" stroke="#059669" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Trusted Figures Icons: Teacher / Parent / Guard */}
            {/* Left Badge: Teacher / Người lớn */}
            <g transform="translate(60, 230)">
              <circle cx="0" cy="0" r="26" fill="#F0FDF4" stroke="#10B981" strokeWidth="3" />
              {/* Teacher icon with glasses */}
              <circle cx="0" cy="-6" r="10" fill="#FDBA74" />
              <rect x="-8" y="-9" width="6" height="4" rx="1" fill="#334155" />
              <rect x="2" y="-9" width="6" height="4" rx="1" fill="#334155" />
              <path d="M-12 16 C-12 8 12 8 12 16 Z" fill="#3B82F6" />
            </g>

            {/* Right Badge: Family / Parents */}
            <g transform="translate(260, 230)">
              <circle cx="0" cy="0" r="26" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
              {/* Family heart icon */}
              <path d="M0 -4 C-8 -14 -16 -6 -16 2 C-16 10 0 18 0 18 C0 18 16 10 16 2 C16 -6 8 -14 0 -4 Z" fill="#EF4444" />
            </g>

            {/* Sunlight rays */}
            <circle cx="35" cy="40" r="22" fill="url(#sunGrad)" />
          </svg>
        </div>
      </div>

      {/* Message callout */}
      <div className="relative z-10 w-full bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-xl border border-emerald-200 text-center shadow-sm">
        <div className="font-extrabold text-emerald-800 text-sm">Điểm Tựa Vững Chắc</div>
        <div className="text-[11px] text-slate-600 font-medium">Thầy cô · Bố mẹ · Nhà trường luôn đồng hành bảo vệ em</div>
      </div>
    </div>
  );
};

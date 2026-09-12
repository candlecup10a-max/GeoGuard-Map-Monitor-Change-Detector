import React from 'react';

interface CommsiteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'badge' | 'stacked';
  dark?: boolean;
  showTagline?: boolean;
  useImage?: boolean;
}

export const CommsiteLogo: React.FC<CommsiteLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  dark = false,
  showTagline = true,
  useImage = false,
}) => {
  // Vector SVG emblem matching the uploaded MTSM brand asset:
  // - Hexagonal shield with geometric navy & cyan/teal facets
  // - Light blue globe with latitude/longitude grid and orbiting satellite
  // - Ascending perspective road with white vehicle
  // - Flanking city skyline skyscrapers in cyan silhouettes
  // - Crisp red upward directional navigation arrow
  const renderEmblemSvg = (emblemSizeClass: string) => (
    <div className={`relative flex-shrink-0 flex items-center justify-center ${emblemSizeClass}`}>
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Deep Navy Facet Gradients */}
          <linearGradient id="mtsm_navy_top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A5F" />
            <stop offset="50%" stopColor="#0E243F" />
            <stop offset="100%" stopColor="#071628" />
          </linearGradient>

          {/* Cyan / Teal Wing Facets */}
          <linearGradient id="mtsm_cyan_wing_left" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="mtsm_cyan_wing_right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#2DD4BF" />
          </linearGradient>

          {/* Inner Globe Gradient */}
          <linearGradient id="mtsm_globe_grad" x1="30%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="40%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#03456C" />
          </linearGradient>

          {/* Road Perspective Gradient */}
          <linearGradient id="mtsm_road_grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Red 3D Navigation Arrow Gradients */}
          <linearGradient id="mtsm_arrow_left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="mtsm_arrow_right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>

          {/* Outer Ring Glow / Stroke */}
          <linearGradient id="mtsm_rim_grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F2D4A" />
          </linearGradient>
        </defs>

        {/* 1. Outer Hexagon Faceted Shield Frame */}
        {/* Outer Hexagon Outline */}
        <polygon
          points="120,12 196,56 196,144 120,188 44,144 44,56"
          fill="#061628"
          stroke="url(#mtsm_rim_grad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Top Hexagon Bevel Edge */}
        <polygon
          points="120,16 190,58 174,68 120,36 66,68 50,58"
          fill="url(#mtsm_navy_top)"
        />

        {/* Outer Left Geometric Facet Wing */}
        <polygon
          points="44,56 18,100 44,144 32,100"
          fill="url(#mtsm_cyan_wing_left)"
          opacity="0.9"
        />
        <polygon
          points="44,80 14,106 44,132"
          fill="#00E5FF"
          opacity="0.4"
        />

        {/* Outer Right Geometric Facet Wing */}
        <polygon
          points="196,56 222,100 196,144 208,100"
          fill="url(#mtsm_cyan_wing_right)"
          opacity="0.9"
        />
        <polygon
          points="196,80 226,106 196,132"
          fill="#38BDF8"
          opacity="0.4"
        />

        {/* Lower Left Cyan Bevel */}
        <polygon
          points="44,144 120,188 120,174 58,138"
          fill="#0284C7"
          opacity="0.75"
        />

        {/* Lower Right Teal Bevel */}
        <polygon
          points="196,144 120,188 120,174 182,138"
          fill="#0D9488"
          opacity="0.75"
        />

        {/* 2. Inner Shield Chamber */}
        <polygon
          points="120,28 182,64 182,136 120,172 58,136 58,64"
          fill="#071A2E"
        />

        {/* 3. Globe Sphere with Graticule Grid */}
        <g id="globe">
          <circle cx="120" cy="80" r="32" fill="url(#mtsm_globe_grad)" />

          {/* Latitude Lines */}
          <ellipse cx="120" cy="80" rx="32" ry="12" fill="none" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.8" />
          <ellipse cx="120" cy="70" rx="27" ry="8" fill="none" stroke="#BAE6FD" strokeWidth="1" opacity="0.6" />
          <ellipse cx="120" cy="90" rx="27" ry="8" fill="none" stroke="#BAE6FD" strokeWidth="1" opacity="0.6" />

          {/* Longitude Lines */}
          <ellipse cx="120" cy="80" rx="14" ry="32" fill="none" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.8" />
          <line x1="120" y1="48" x2="120" y2="112" stroke="#BAE6FD" strokeWidth="1.4" opacity="0.85" />
        </g>

        {/* 4. Orbiting Satellite Ring & Satellite */}
        <g id="satellite_orbit">
          {/* Orbit Ellipse Ring */}
          <ellipse
            cx="120"
            cy="80"
            rx="46"
            ry="18"
            transform="rotate(-28 120 80)"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="2.2"
            strokeDasharray="90 20"
            opacity="0.9"
          />

          {/* Satellite at Upper Right */}
          <g transform="translate(154, 52) rotate(22)">
            {/* Solar Panel Left */}
            <rect x="-14" y="-3.5" width="8" height="7" rx="1" fill="#0284C7" stroke="#FFFFFF" strokeWidth="0.8" />
            {/* Central Bus */}
            <rect x="-5" y="-5" width="10" height="10" rx="1.5" fill="#FFFFFF" stroke="#0F2D4A" strokeWidth="1" />
            {/* Solar Panel Right */}
            <rect x="6" y="-3.5" width="8" height="7" rx="1" fill="#0284C7" stroke="#FFFFFF" strokeWidth="0.8" />
            {/* Dish / Sensor */}
            <circle cx="0" cy="6" r="2.5" fill="#38BDF8" />
            <line x1="0" y1="4" x2="0" y2="6" stroke="#FFFFFF" strokeWidth="1" />
          </g>
        </g>

        {/* 5. City Skyline Silhouettes Flanking the Highway */}
        {/* Left Buildings */}
        <g id="skyline_left" opacity="0.85">
          <rect x="68" y="112" width="10" height="42" fill="#0369A1" />
          <rect x="79" y="104" width="12" height="50" fill="#0284C7" />
          <polygon points="79,104 85,96 91,104" fill="#06B6D4" />
          <rect x="92" y="118" width="8" height="36" fill="#0EA5E9" />
          {/* Building Windows */}
          <circle cx="73" cy="120" r="1" fill="#BAE6FD" />
          <circle cx="73" cy="128" r="1" fill="#BAE6FD" />
          <circle cx="73" cy="136" r="1" fill="#BAE6FD" />
          <circle cx="85" cy="112" r="1" fill="#BAE6FD" />
          <circle cx="85" cy="122" r="1" fill="#BAE6FD" />
          <circle cx="85" cy="132" r="1" fill="#BAE6FD" />
        </g>

        {/* Right Buildings */}
        <g id="skyline_right" opacity="0.85">
          <rect x="140" y="118" width="9" height="36" fill="#0EA5E9" />
          <rect x="150" y="102" width="13" height="52" fill="#0284C7" />
          <polygon points="150,102 156.5,94 163,102" fill="#06B6D4" />
          <rect x="164" y="114" width="9" height="40" fill="#0369A1" />
          {/* Building Windows */}
          <circle cx="156" cy="112" r="1" fill="#BAE6FD" />
          <circle cx="156" cy="122" r="1" fill="#BAE6FD" />
          <circle cx="156" cy="132" r="1" fill="#BAE6FD" />
          <circle cx="168" cy="122" r="1" fill="#BAE6FD" />
          <circle cx="168" cy="130" r="1" fill="#BAE6FD" />
        </g>

        {/* 6. Perspective Road / Highway */}
        <polygon
          points="106,128 134,128 152,176 88,176"
          fill="url(#mtsm_road_grad)"
          stroke="#475569"
          strokeWidth="1.2"
        />

        {/* Dashed Center Road Divider */}
        <line
          x1="120"
          y1="130"
          x2="120"
          y2="175"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeDasharray="4 3"
        />

        {/* White Car Driving Forward */}
        <g id="vehicle" transform="translate(120, 160)">
          {/* Roof & Windshield */}
          <polygon
            points="-4,-9 4,-9 7,-2 -7,-2"
            fill="#E2E8F0"
          />
          {/* Main Body */}
          <rect
            x="-8"
            y="-2"
            width="16"
            height="9"
            rx="2.5"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="0.8"
          />
          {/* Headlights / Taillights */}
          <circle cx="-5.5" cy="5.5" r="1.2" fill="#38BDF8" />
          <circle cx="5.5" cy="5.5" r="1.2" fill="#38BDF8" />
          {/* Wheels */}
          <rect x="-9.5" y="-1" width="1.8" height="4" rx="0.8" fill="#0F172A" />
          <rect x="7.7" y="-1" width="1.8" height="4" rx="0.8" fill="#0F172A" />
        </g>

        {/* 7. Red 3D Navigation Arrow (Focal Centerpiece) */}
        <g id="nav_arrow" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.4))">
          {/* Left Bevel */}
          <polygon
            points="120,90 105,124 120,116"
            fill="url(#mtsm_arrow_left)"
          />
          {/* Right Bevel */}
          <polygon
            points="120,90 135,124 120,116"
            fill="url(#mtsm_arrow_right)"
          />
          {/* Arrow Highlight Spine */}
          <line
            x1="120"
            y1="90"
            x2="120"
            y2="116"
            stroke="#FEF2F2"
            strokeWidth="1.2"
            opacity="0.8"
          />
        </g>

        {/* 8. Bottom Shield Accents & V-Point */}
        <polygon
          points="120,172 134,180 120,188 106,180"
          fill="#10B981"
        />
        <polygon
          points="120,176 128,182 120,188 112,182"
          fill="#38BDF8"
        />
      </svg>
    </div>
  );

  // Raster image fallback or photo asset variant
  const renderEmblemImage = (emblemSizeClass: string) => (
    <div className={`relative flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg ${emblemSizeClass}`}>
      <img
        src="/mtsm_logo.jpg"
        alt="MTSM - Multi-temporal Satellite & Street Monitoring"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain"
      />
    </div>
  );

  const renderEmblem = (emblemSizeClass: string) =>
    useImage ? renderEmblemImage(emblemSizeClass) : renderEmblemSvg(emblemSizeClass);

  if (variant === 'icon') {
    const sizeClasses = {
      sm: 'w-7 h-7',
      md: 'w-9 h-9',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };
    return (
      <div className={`inline-flex items-center justify-center ${className}`} title="MTSM - Multi-temporal Satellite & Street Monitoring">
        {renderEmblem(sizeClasses[size])}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border shadow-sm ${
          dark
            ? 'bg-slate-900 border-slate-700 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        } ${className}`}
      >
        {renderEmblem('w-6 h-6')}
        <div className="flex flex-col leading-none">
          <span className="font-black text-sm tracking-wider uppercase text-blue-900 dark:text-blue-200">
            GeoGuard
          </span>
          <span className="text-[9px] font-bold text-slate-500 tracking-tight">
            MAP MONITOR &amp; CHANGE DETECTOR
          </span>
        </div>
      </div>
    );
  }

  // Stacked variant (centered vertically for large cards or login heroes)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {renderEmblem(size === 'xl' ? 'w-24 h-24' : size === 'lg' ? 'w-20 h-20' : 'w-16 h-16')}
        <h1
          className={`font-black tracking-wider uppercase leading-none font-sans mt-2.5 ${
            size === 'xl' ? 'text-3xl' : 'text-2xl'
          } ${dark ? 'text-white' : 'text-[#0D2847]'}`}
        >
          GeoGuard
        </h1>
        <p
          className={`font-bold tracking-tight mt-1 ${
            size === 'xl' ? 'text-sm' : 'text-xs'
          } ${dark ? 'text-blue-200' : 'text-slate-700'}`}
        >
          Map Monitor &amp; Change Detector
        </p>
        {showTagline && (
          <p
            className={`text-[9px] font-semibold tracking-wider uppercase mt-1.5 ${
              dark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            MTSM VERTICAL SNAPSHOTS &bull; AUTOMATED DIFFERENCE INSPECTION &bull; ACCIDENT DETECTION
          </p>
        )}
      </div>
    );
  }

  // Full horizontal brand variant with wordmark and subtitles
  const sizeMap = {
    sm: {
      emblem: 'w-8 h-8',
      title: 'text-base',
      subtitle: 'text-[9px]',
      tagline: 'text-[7.5px]',
    },
    md: {
      emblem: 'w-10 h-10',
      title: 'text-xl',
      subtitle: 'text-[10.5px]',
      tagline: 'text-[8px]',
    },
    lg: {
      emblem: 'w-14 h-14',
      title: 'text-2xl',
      subtitle: 'text-xs',
      tagline: 'text-[9px]',
    },
    xl: {
      emblem: 'w-20 h-20',
      title: 'text-3xl',
      subtitle: 'text-sm',
      tagline: 'text-[10px]',
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {renderEmblem(currentSize.emblem)}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-2">
          <h1
            className={`font-black tracking-wider uppercase leading-none font-sans ${currentSize.title} ${
              dark ? 'text-white' : 'text-[#0D2847]'
            }`}
          >
            GeoGuard
          </h1>
          <span
            className={`font-extrabold tracking-tight leading-none hidden sm:inline ${currentSize.subtitle} ${
              dark ? 'text-blue-200' : 'text-slate-800'
            }`}
          >
            Map Monitor &amp; Change Detector
          </span>
        </div>
        <span
          className={`font-semibold tracking-tight uppercase leading-tight mt-1 sm:hidden ${currentSize.subtitle} ${
            dark ? 'text-blue-200' : 'text-slate-700'
          }`}
        >
          Map Monitor &amp; Change Detector
        </span>
        {showTagline && (
          <span
            className={`font-semibold tracking-wider uppercase leading-tight mt-0.5 hidden md:block ${currentSize.tagline} ${
              dark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            MTSM SATELLITE &amp; STREET SURVEILLANCE <span className="text-emerald-500 font-bold">&bull;</span> VERTICAL SNAPSHOTS <span className="text-emerald-500 font-bold">&bull;</span> ACCIDENT DETECTION
          </span>
        )}
      </div>
    </div>
  );
};


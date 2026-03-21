import React from 'react';

const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 380 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-label="Logo IGNA.DEV con Carga"
    >
      <style>
        {`
          @keyframes draw { to { stroke-dashoffset: 0; } }
          @keyframes bar-load {
            0% { width: 0; opacity: 1; }
            40% { width: 100%; opacity: 1; }
            60% { width: 100%; opacity: 0; }
            100% { width: 0; opacity: 0; }
          }
          .animate-line {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 2.5s ease-in-out infinite alternate;
          }
          .animate-line-delayed {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 2.5s ease-in-out infinite alternate-reverse;
          }
          .load-bar {
            animation: bar-load 4s linear infinite;
          }
        `}
      </style>

      <g stroke="#2563eb">
        <path
          d="M20 30C40 30 50 70 70 70"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-line opacity-80"
        />
        <path
          d="M20 70C40 70 50 30 70 30"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-line-delayed"
        />
        <circle cx="45" cy="50" r="5" fill="#2563eb" className="animate-pulse" />
      </g>

      <g transform="translate(100, 20)">
        <text
          x="0" y="45"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="50"
          fill="#2563eb"
          style={{ letterSpacing: '-3px' }}
        >
          IGNA
        </text>
        
        <text
          x="145" y="45"
          fontFamily="JetBrains Mono, SFMono-Regular, monospace"
          fontWeight="200"
          fontSize="48"
          fill="currentColor"
          className="text-muted-foreground"
        >
          .DEV
        </text>

        <g transform="translate(0, 55)">
          <rect x="0" y="0" width="220" height="3" rx="1.5" fill="currentColor" className="opacity-10" />
          <rect x="0" y="0" width="0" height="3" rx="1.5" fill="#2563eb" className="load-bar" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
import { cn } from "@/lib/utils";

export function HaloLogo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={cn(className)}
      aria-label="HALO logo"
    >
      <defs>
        <filter id="halo-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Glowing purple ring */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="#a855f7"
        strokeWidth="4"
        filter="url(#halo-glow)"
        opacity="0.9"
      />
      <circle cx="50" cy="50" r="38" stroke="#c084fc" strokeWidth="1.5" opacity="0.5" />
      {/* HALO text mark */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill="white"
        fontFamily="system-ui, sans-serif"
        letterSpacing="2"
      >
        H
      </text>
    </svg>
  );
}

export function HaloWordmark({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <HaloLogo size={size} />
      <div className="flex flex-col leading-none">
        <span
          className="font-bold tracking-[0.25em] text-white"
          style={{ fontSize: size * 0.32 }}
        >
          HALO
        </span>
        <span
          className="tracking-[0.3em] text-purple-400/70"
          style={{ fontSize: size * 0.2 }}
        >
          BOUTIQUE
        </span>
      </div>
    </div>
  );
}

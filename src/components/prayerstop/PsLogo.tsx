import { useId } from "react";

/**
 * The approved PrayerStop mark: map pin with a mosque dome-arch inside.
 * Paths are copied verbatim from the app (components/home/mosque-logo.tsx)
 * so the symbol and its proportions match the shipped icon exactly.
 * The gaps are masked out, so whatever sits behind shows through them.
 */
export function PsMark({
  size = 32,
  color = "currentColor",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  const maskId = `ps-mark-${useId()}`;
  return (
    <svg
      width={size * (660 / 730)}
      height={size}
      viewBox="182 150 660 730"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="182" y="150" width="660" height="730">
          <path
            d="M512 175C362 175 241 296 241 445C241 520 270 575 320 635L492 840Q512 858 532 840L718 625C760 575 783 520 783 445C783 296 662 175 512 175Z"
            fill="#fff"
          />
          <path d="M512 250A195 195 0 1 1 511.9 250Z" fill="#000" />
          <path
            d="M378 585V478C378 420 410 410 450 385C490 360 505 340 514 322C523 340 538 360 578 385C618 410 650 420 650 478V585L640 660H388Z"
            fill="#fff"
          />
          <path
            d="M435 635V515C435 470 470 455 514 435C558 455 593 470 593 515V635C560 650 470 650 435 635Z"
            fill="#000"
          />
        </mask>
      </defs>
      <path d="M182 150H842V880H182Z" fill={color} mask={`url(#${maskId})`} />
    </svg>
  );
}

/** The app icon: white mark on a brand-green rounded tile. */
export function PsAppIcon({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: size,
        height: size,
        borderRadius: size * 0.24,
        background: "#126B46",
        flexShrink: 0,
      }}
    >
      <PsMark size={size * 0.66} color="#fff" />
    </span>
  );
}

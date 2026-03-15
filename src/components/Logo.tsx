"use client";

import { useId } from "react";
import type { CSSProperties } from "react";

// SVG recreation of the Ahamed Web Studio logo:
// Orange-to-red gradient A-shape with dark geometric mosaic interior.
export default function AhamedLogo({
  height = 28,
  style,
}: {
  height?: number;
  style?: CSSProperties;
}) {
  const uid = useId().replace(/:/g, "s");
  const gradId = `${uid}g`;
  const clipId = `${uid}c`;

  // The A-shape path (viewBox 0 0 100 90)
  const aPath =
    "M50 5 L10 82 Q8 87 14 87 L37 87 L50 64 L63 87 L86 87 Q92 87 90 82 Z";

  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ahamed Web Studio"
      style={{ height, width: "auto", display: "block", flexShrink: 0, ...style }}
    >
      <defs>
        {/* Orange → deep red gradient */}
        <linearGradient id={gradId} x1="22" y1="5" x2="78" y2="87" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F5673C" />
          <stop offset="55%"  stopColor="#E63D4E" />
          <stop offset="100%" stopColor="#CC2C54" />
        </linearGradient>

        {/* Clip to the A shape */}
        <clipPath id={clipId}>
          <path d={aPath} />
        </clipPath>
      </defs>

      {/* Base: orange gradient A */}
      <path d={aPath} fill={`url(#${gradId})`} />

      {/* Dark mosaic facets — clipped so they only show inside the A */}
      {/* The hairline orange gaps between facets reveal the gradient underneath */}
      <g clipPath={`url(#${clipId})`} stroke={`url(#${gradId})`} strokeWidth="1.2" strokeLinejoin="round">
        {/* Left outer */}
        <polygon points="50,5  10,82  29,55"              fill="#0D1124" />
        {/* Upper-left */}
        <polygon points="50,5  29,55  50,34"              fill="#131628" />
        {/* Upper-right */}
        <polygon points="50,5  50,34  71,55"              fill="#171B36" />
        {/* Right outer */}
        <polygon points="50,5  71,55  90,82"              fill="#0B0F20" />
        {/* Bottom-left leg outer */}
        <polygon points="10,82  29,55  41,68  37,87  14,87" fill="#111428" />
        {/* Inner-left quad */}
        <polygon points="29,55  41,68  50,64  50,34"      fill="#14182E" />
        {/* Inner-right quad */}
        <polygon points="50,34  50,64  59,68  71,55"      fill="#131630" />
        {/* Bottom-right leg outer */}
        <polygon points="71,55  59,68  63,87  86,87  90,82" fill="#0E1226" />
      </g>
    </svg>
  );
}

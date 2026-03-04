"use client";

import React from "react";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "3px 10px 3px 8px",
      borderRadius: 999,
      border: "1px solid color-mix(in srgb, var(--hud-cyan) 33%, transparent)",
      background: "color-mix(in srgb, var(--hud-cyan) 9%, transparent)",
      backdropFilter: "blur(8px)",
      color: "var(--hud-cyan)",
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    }}
  >
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--hud-cyan)",
        display: "inline-block",
        boxShadow: "0 0 5px var(--hud-cyan)",
        flexShrink: 0,
      }}
    />
    {status}
  </span>
);

export default StatusBadge;

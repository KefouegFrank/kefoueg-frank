"use client";

import React from "react";
import { IconExternal, IconGithub } from "./Icons";

interface ProjectActionsProps {
  liveUrl: string;
  githubUrl: string;
}

const ProjectActions = ({ liveUrl, githubUrl }: ProjectActionsProps) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <a
        href={liveUrl}
        onClick={(e) => e.stopPropagation()}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "7px 16px",
          borderRadius: 999,
          background: "color-mix(in srgb, var(--hud-cyan) 9%, transparent)",
          border:
            "1px solid color-mix(in srgb, var(--hud-cyan) 27%, transparent)",
          color: "var(--hud-cyan)",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        <IconExternal className="w-3.5 h-3.5" />
        Demo
      </a>
      <a
        href={githubUrl}
        onClick={(e) => e.stopPropagation()}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "7px 16px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        <IconGithub className="w-3.5 h-3.5" />
        Source
      </a>
    </div>
  );
};

export default ProjectActions;

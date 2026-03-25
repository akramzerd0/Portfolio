/* Set color: var(--accent) on .nav-btn.active .nav-icon to tint accent pixels */

export function IconProjects({ size = 20 }) {
 
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none"
      style={{ display:"block", imageRendering:"pixelated" }}>
      {/* head */}
      <rect x="5"  y="2"  width="10" height="2"  fill="currentColor"/>
      <rect x="3"  y="4"  width="14" height="2"  fill="currentColor"/>
      <rect x="2"  y="6"  width="16" height="2"  fill="currentColor"/>
      <rect x="2"  y="8"  width="16" height="2"  fill="currentColor"/>
      {/* eyes */}
      <rect x="5"  y="6"  width="2"  height="2"  fill="var(--accent)"/>
      <rect x="13" y="6"  width="2"  height="2"  fill="var(--accent)"/>
      {/* nose */}
      <rect x="7"  y="9"  width="2"  height="1"  fill="var(--accent)"/>
      <rect x="11" y="9"  width="2"  height="1"  fill="var(--accent)"/>
      {/* body */}
      <rect x="5"  y="10" width="10" height="2"  fill="currentColor"/>
      <rect x="6"  y="12" width="8"  height="2"  fill="currentColor"/>
      {/* tentacles */}
      <rect x="3"  y="14" width="3"  height="2"  fill="currentColor"/>
      <rect x="14" y="14" width="3"  height="2"  fill="currentColor"/>
      <rect x="2"  y="16" width="2"  height="2"  fill="currentColor"/>
      <rect x="16" y="16" width="2"  height="2"  fill="currentColor"/>
    </svg>
  );
}

export function IconPlay({ size = 20 }) {
  // Pixel gamepad controller
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none"
      style={{ display:"block", imageRendering:"pixelated" }}>
      {/* body */}
      <rect x="3"  y="6"  width="14" height="8"  rx="0" fill="currentColor" opacity="0.15"/>
      <rect x="3"  y="6"  width="14" height="8"  rx="0" stroke="currentColor" strokeWidth="1.5"/>
      {/* grips */}
      <rect x="3"  y="12" width="4"  height="3"  fill="currentColor" opacity="0.15"/>
      <rect x="13" y="12" width="4"  height="3"  fill="currentColor" opacity="0.15"/>
      <rect x="3"  y="12" width="4"  height="3"  stroke="currentColor" strokeWidth="1.2"/>
      <rect x="13" y="12" width="4"  height="3"  stroke="currentColor" strokeWidth="1.2"/>
      {/* d-pad */}
      <rect x="5"  y="9"  width="2"  height="2"  fill="currentColor" opacity="0.6"/>
      <rect x="7"  y="8"  width="2"  height="2"  fill="var(--accent)"/>
      <rect x="7"  y="10" width="2"  height="2"  fill="var(--accent)"/>
      <rect x="6"  y="9"  width="4"  height="2"  fill="var(--accent)"/>
      {/* buttons */}
      <rect x="13" y="8"  width="2"  height="2"  fill="var(--accent)"/>
      <rect x="15" y="10" width="2"  height="2"  fill="var(--accent)"/>
    </svg>
  );
}

export function IconFloppy({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none"
      style={{ display:"block", imageRendering:"pixelated" }}>
      <rect x="2"  y="2"  width="14" height="14" fill="currentColor" opacity="0.12"/>
      <rect x="2"  y="2"  width="14" height="14" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="4"  y="2"  width="6"  height="5"  fill="var(--accent)" opacity="0.5"/>
      <rect x="5"  y="2"  width="1.5" height="4" fill="currentColor"/>
      <rect x="4"  y="10" width="10" height="6"  fill="currentColor" opacity="0.2"/>
      <rect x="6"  y="11" width="6"  height="4"  fill="currentColor" opacity="0.15"/>
    </svg>
  );
}

export function IconCV({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none"
      style={{ display:"block", imageRendering:"pixelated" }}>
      <rect x="4" y="2"  width="12" height="16" fill="currentColor" opacity="0.1"/>
      <rect x="4" y="2"  width="12" height="16" stroke="currentColor" strokeWidth="1.5"/>
      {/* top line accented — like a highlighted heading */}
      <rect x="6" y="6"  width="8"  height="1.5" fill="var(--accent)"/>
      <rect x="6" y="9"  width="8"  height="1.5" fill="currentColor" opacity="0.5"/>
      <rect x="6" y="12" width="5"  height="1.5" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

export function IconAbout({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none"
      style={{ display:"block", imageRendering:"pixelated" }}>
      <rect x="7" y="3" width="6" height="6" fill="currentColor" opacity="0.1"/>
      <rect x="7" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
      {/* pixel face — eyes + smile in accent */}
      <rect x="8.5"  y="5"   width="1.2" height="1.5" fill="var(--accent)"/>
      <rect x="10.3" y="5"   width="1.2" height="1.5" fill="var(--accent)"/>
      <rect x="8.8"  y="7"   width="2.4" height="0.8" fill="var(--accent)"/>
      <path d="M4 18c0-3.5 2.5-5 6-5s6 1.5 6 5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    </svg>
  );
}

export function IconConnect({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none"
      style={{ display:"block", imageRendering:"pixelated" }}>
      {/* source node */}
      <rect x="3"  y="8"  width="4" height="4" fill="currentColor" opacity="0.1"/>
      <rect x="3"  y="8"  width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
      {/* target nodes in accent */}
      <rect x="14" y="3"  width="3" height="3" fill="var(--accent)"/>
      <rect x="14" y="14" width="3" height="3" fill="var(--accent)"/>
      <path d="M7 9.5L14 5M7 10.5L14 15"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
    </svg>
  );
}
export function IconMoon({ size = 14 }) {
  // Pixel crescent moon
  return (
    <svg width={size} height={size} viewBox="0 0 10 10"
      fill="none" style={{ display:"block", imageRendering:"pixelated" }}>
      <rect x="3" y="0" width="3" height="1" fill="currentColor"/>
      <rect x="2" y="1" width="5" height="1" fill="currentColor"/>
      <rect x="1" y="2" width="3" height="1" fill="currentColor"/>
      <rect x="1" y="3" width="2" height="1" fill="currentColor"/>
      <rect x="0" y="4" width="4" height="2" fill="currentColor"/>
      <rect x="1" y="6" width="4" height="1" fill="currentColor"/>
      <rect x="1" y="7" width="5" height="1" fill="currentColor"/>
      <rect x="2" y="8" width="5" height="1" fill="currentColor"/>
      <rect x="3" y="9" width="3" height="1" fill="currentColor"/>
    </svg>
  );
}

export function IconSun({ size = 14 }) {
  // Pixel sun with rays in accent color
  return (
    <svg width={size} height={size} viewBox="0 0 10 10"
      fill="none" style={{ display:"block", imageRendering:"pixelated" }}>
      {/* rays */}
      <rect x="3" y="0" width="1" height="1" fill="var(--accent)"/>
      <rect x="6" y="0" width="1" height="1" fill="var(--accent)"/>
      <rect x="1" y="1" width="1" height="1" fill="var(--accent)"/>
      <rect x="8" y="1" width="1" height="1" fill="var(--accent)"/>
      <rect x="0" y="3" width="1" height="1" fill="var(--accent)"/>
      <rect x="9" y="3" width="1" height="1" fill="var(--accent)"/>
      <rect x="1" y="7" width="1" height="1" fill="var(--accent)"/>
      <rect x="8" y="7" width="1" height="1" fill="var(--accent)"/>
      <rect x="3" y="8" width="1" height="1" fill="var(--accent)"/>
      <rect x="6" y="8" width="1" height="1" fill="var(--accent)"/>
      {/* body */}
      <rect x="2" y="2" width="5" height="5" fill="currentColor"/>
    </svg>
  );
}
/* Shared components: Logo, Icons, Section, etc. */

// ---------------- Ctmebc house-mark logo ----------------
function Logo({ size = 40, mono = false, color }) {
  // The house outline with the "Ct..." baseline notch — matches reference logo.
  const id = React.useId();
  return (
    <svg width={size * 1.18} height={size} viewBox="0 0 80 68" fill="none" aria-label="Ctmebc">
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#FFC107" />
          <stop offset="55%"  stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FF4D1A" />
        </linearGradient>
      </defs>
      {/* House outline */}
      <path
        d="M8 30 L40 6 L72 30 L72 60 L52 60"
        stroke={mono ? (color || "#fff") : `url(#g-${id})`}
        strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* left wall + baseline foot */}
      <path
        d="M8 30 L8 60 L26 60"
        stroke={mono ? (color || "#fff") : `url(#g-${id})`}
        strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* Inner C accent */}
      <path
        d="M30 44 a10 10 0 1 0 10 10"
        stroke={mono ? (color || "#fff") : "#FF4D1A"}
        strokeWidth="5" strokeLinecap="round" fill="none" opacity={mono ? 0.9 : 0.9}
      />
    </svg>
  );
}

function LogoLockup({ stacked = false, light = false, size = 40 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Logo size={size} mono={light} color={light ? "#fff" : undefined} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <div className="logo-wordmark" style={{
          fontSize: size * 0.72,
          color: light ? "#fff" : "#1f1f1f",
          letterSpacing: "-0.02em",
        }}>Ctmebc</div>
        <div style={{
          fontSize: size * 0.27,
          letterSpacing: "0.32em",
          marginTop: 4,
          color: light ? "rgba(255,255,255,0.78)" : "#777",
          fontWeight: 500,
        }}>嘉寀萌商務中心</div>
      </div>
    </div>
  );
}

// ---------------- Pillar / utility icons (geometric, stroke-only) ----------------
function PillarIcon({ name, size = 28, color = "#fff" }) {
  const s = { width: size, height: size, stroke: color, strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "home": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 11 L12 4 L21 11 V20 a1 1 0 0 1 -1 1 H4 a1 1 0 0 1 -1 -1 z" />
        <path d="M9 21 V14 H15 V21" />
      </svg>);
    case "users": return (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="9" cy="9" r="3.2" />
        <path d="M3 20 c0-3.3 2.7-6 6-6 s6 2.7 6 6" />
        <circle cx="17" cy="8" r="2.4" />
        <path d="M16 14 c2.8 0 5 2.2 5 5" />
      </svg>);
    case "chart": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 21 H21" />
        <rect x="5" y="11" width="3" height="8" rx="0.8" />
        <rect x="10.5" y="7" width="3" height="12" rx="0.8" />
        <rect x="16" y="14" width="3" height="5" rx="0.8" />
      </svg>);
    case "handshake": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 12 L7 8 L12 11 L16 8 L21 12" />
        <path d="M7 14 L11 18 L13 16 L16 19 L19 16" />
        <path d="M3 12 L3 16" />
        <path d="M21 12 L21 16" />
      </svg>);
    case "calendar": return (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10 H20.5" />
        <path d="M8 3 V7" /><path d="M16 3 V7" />
      </svg>);
    case "wifi": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 9 a14 14 0 0 1 18 0" />
        <path d="M6 13 a9 9 0 0 1 12 0" />
        <path d="M9 17 a4 4 0 0 1 6 0" />
        <circle cx="12" cy="20" r="0.6" fill={color} stroke="none" />
      </svg>);
    case "car": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M5 16 V11 L7 6 H17 L19 11 V16" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
        <circle cx="7.5" cy="20" r="1.3" />
        <circle cx="16.5" cy="20" r="1.3" />
      </svg>);
    case "mic": return (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11 a7 7 0 0 0 14 0" />
        <path d="M12 18 V21" />
      </svg>);
    case "print": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M7 9 V4 H17 V9" />
        <rect x="3" y="9" width="18" height="8" rx="1.5" />
        <rect x="7" y="14" width="10" height="6" rx="1" />
        <circle cx="17" cy="12.5" r="0.7" fill={color} stroke="none" />
      </svg>);
    case "pin": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M12 21 c5-6 7-9 7-12 a7 7 0 0 0 -14 0 c0 3 2 6 7 12 z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>);
    case "phone": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M5 4 H9 L11 9 L8.5 11 a11 11 0 0 0 4.5 4.5 L15 13 L20 15 V19 a1 1 0 0 1 -1 1 c-8 0 -15-7 -15-15 a1 1 0 0 1 1-1 z" />
      </svg>);
    case "mail": return (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7 L12 13 L21 7" />
      </svg>);
    case "check": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M5 12 L10 17 L19 7" />
      </svg>);
    case "arrow": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M5 12 H19" /><path d="M14 7 L19 12 L14 17" />
      </svg>);
    case "plus": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M12 5 V19" /><path d="M5 12 H19" /></svg>);
    case "star": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M12 3 L14.6 9.2 L21 9.8 L16 14 L17.6 20.4 L12 17 L6.4 20.4 L8 14 L3 9.8 L9.4 9.2 z" />
      </svg>);
    case "menu": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M4 7 H20" /><path d="M4 12 H20" /><path d="M4 17 H20" /></svg>);
    case "fb": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M14 7 H17 V4 H14 a4 4 0 0 0 -4 4 V11 H7 V14 H10 V21 H13 V14 H16 L17 11 H13 V8.5 a1.5 1.5 0 0 1 1.5 -1.5 z" fill={color} stroke="none" />
      </svg>);
    case "line": return (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M21 11 c0 -4.4 -4 -8 -9 -8 s-9 3.6 -9 8 c0 3.7 2.9 6.8 6.9 7.7 .3 .1 .7 .3 .8 .5 .1 .3 .1 .7 0 1 -.1 .3 -.2 1.1 -.3 1.3 -.1 .3 -.2 .9 .8 .5 1 -.4 5.5 -3.2 7.6 -5.5 1.4 -1.5 2.2 -3.4 2.2 -5.5 z" />
      </svg>);
    case "ig": return (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.9" fill={color} stroke="none" />
      </svg>);
    default: return null;
  }
}

// ---------------- Pill button-like CTA arrow ----------------
function Arrow({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 H19" /><path d="M13 6 L19 12 L13 18" />
    </svg>
  );
}

// ---------------- Eyebrow + heading block ----------------
function SectionHeading({ eyebrow, title, sub, align = "center", id }) {
  return (
    <header id={id} style={{
      textAlign: align,
      maxWidth: align === "center" ? 760 : "none",
      margin: align === "center" ? "0 auto 56px" : "0 0 48px",
    }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
      <h2 className="h-1" style={{ marginBottom: sub ? 14 : 0 }}>{title}</h2>
      {sub && <p className="muted" style={{ fontSize: 16, lineHeight: 1.7 }}>{sub}</p>}
    </header>
  );
}

// expose
Object.assign(window, { Logo, LogoLockup, PillarIcon, Arrow, SectionHeading });

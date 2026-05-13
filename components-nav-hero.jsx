/* Top nav + Hero */

function TopNav({ onBook }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const nav = window.CTMEBC.nav;
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background .25s ease, box-shadow .25s ease, border-color .25s ease",
      background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #eee" : "1px solid transparent",
    }}>
      <div className="container" style={{
        height: 80, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center" }}>
          <LogoLockup size={34} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {nav.map(n => (
            <a key={n.id} href={`#${n.id}`} style={{
              fontSize: 14, fontWeight: 500, color: "#333",
              padding: "8px 0", position: "relative",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#FF4D1A"}
              onMouseLeave={e => e.currentTarget.style.color = "#333"}
            >{n.label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555" }}>
            <PillarIcon name="phone" size={16} color="#FF4D1A" />
            <span style={{ fontFamily: "Poppins", fontWeight: 600, letterSpacing: 0.5 }}>04-2295-XXXX</span>
          </div>
          <button className="btn btn-primary" onClick={onBook} style={{ height: 42, padding: "0 20px", fontSize: 14 }}>
            預約參觀
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onBook, showChips = true }) {
  return (
    <section id="top" style={{
      position: "relative",
      paddingTop: 140, paddingBottom: 80,
      overflow: "hidden",
      background: "linear-gradient(180deg, #FFF8EE 0%, #FFFFFF 70%)",
    }}>
      {/* Background gradient orb */}
      <div aria-hidden style={{
        position: "absolute", top: "-15%", right: "-10%",
        width: 720, height: 720, borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #FFC107 0%, #FF7A00 35%, #FF4D1A 75%, rgba(255,77,26,0) 80%)",
        filter: "blur(2px)", opacity: 0.95, zIndex: 0,
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "30%", left: "-12%",
        width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,193,7,0.35) 0%, rgba(255,193,7,0) 70%)",
        zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64,
          alignItems: "center",
        }}>
          {/* LEFT */}
          <div>
            <div className="chip" style={{ marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "#FF4D1A" }} />
              台中北區 · 商務空間第一品牌
            </div>
            <h1 className="h-display" style={{ marginBottom: 24 }}>
              專業空間<span style={{ color: "#FF7A00" }}>·</span><br />
              <span className="text-grad">成就無限可能</span>
            </h1>
            <p style={{
              fontSize: 18, lineHeight: 1.75, color: "#555",
              maxWidth: 520, marginBottom: 36,
            }}>
              彈性辦公空間 × 商務支援服務，從公司登記到百人會議，<br />
              嘉寀萌商務中心陪伴創業頭家專注成長每一步。
            </p>

            <div style={{ display: "flex", gap: 14, marginBottom: 56 }}>
              <button className="btn btn-primary" onClick={onBook}>
                預約參觀 <Arrow />
              </button>
              <a href="#services" className="btn btn-ghost">了解更多服務</a>
            </div>

            {/* feature row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8,
              borderTop: "1px solid #eee", paddingTop: 28,
            }}>
              {[
                { icon: "home",      l1: "彈性辦公空間", l2: "Office Rental" },
                { icon: "users",     l1: "百人會議廳",   l2: "100-seat Hall" },
                { icon: "chart",     l1: "商務支援",     l2: "Business Support" },
                { icon: "pin",       l1: "交通便利核心", l2: "Taichung Core" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(255, 77, 26, 0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <PillarIcon name={f.icon} size={18} color="#FF4D1A" />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1f1f1f", marginTop: 4 }}>{f.l1}</div>
                  <div style={{ fontSize: 11, color: "#999", letterSpacing: 0.4, fontFamily: "Poppins" }}>{f.l2}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — hero card */}
          <HeroCard showChips={showChips} />
        </div>
      </div>

      {/* curved divider */}
      <div aria-hidden style={{
        position: "absolute", bottom: -1, left: 0, right: 0, height: 60,
        background: "#fff",
        clipPath: "ellipse(80% 100% at 50% 100%)",
        zIndex: 1,
      }} />
    </section>
  );
}

function HeroCard({ showChips = true }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Main visual card */}
      <div style={{
        position: "relative",
        borderRadius: 28,
        overflow: "hidden",
        boxShadow: "0 40px 80px rgba(255, 77, 26, 0.22), 0 16px 32px rgba(31,31,31,0.08)",
        background: "var(--brand-grad-radial)",
        aspectRatio: "5 / 6",
        padding: 32,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        color: "#fff",
      }}>
        {/* logo + top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <LogoLockup size={32} light />
          <div style={{
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            padding: "6px 12px", borderRadius: 99,
            fontSize: 11, fontWeight: 600, letterSpacing: 0.18 + "em",
            fontFamily: "Poppins",
          }}>LIVE · 線上預訂</div>
        </div>

        {/* Inner placeholder window — "actual room photo" */}
        <div style={{
          position: "relative",
          background: "rgba(255,255,255,0.14)",
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          borderRadius: 20,
          aspectRatio: "16 / 11",
          padding: 16,
          border: "1px solid rgba(255,255,255,0.25)",
        }}>
          <div className="ph" style={{
            width: "100%", height: "100%",
            background: "rgba(255,255,255,0.92)",
            color: "#FF4D1A",
          }}>
            <span>室內實景照 / 百人空間</span>
          </div>
        </div>

        {/* Bottom KPI strip */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
          padding: "16px 0 4px",
        }}>
          {[
            { kpi: "100", unit: "人", label: "場地人容量" },
            { kpi: "45", unit: "坪", label: "場地面積" },
            { kpi: "500", unit: "M", label: "高速 WiFi" },
          ].map((k, i) => (
            <div key={i} style={{
              padding: "0 12px",
              borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.28)",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <div style={{ fontFamily: "Poppins", fontSize: 32, fontWeight: 700, lineHeight: 1 }}>{k.kpi}</div>
                <div style={{ fontSize: 13, opacity: 0.85 }}>{k.unit}</div>
              </div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 6 }}>{k.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* floating booking chip */}
      {showChips && <div style={{
        position: "absolute", left: -32, bottom: 48,
        background: "#fff",
        borderRadius: 18,
        padding: "16px 20px",
        boxShadow: "0 18px 40px rgba(31,31,31,0.12)",
        display: "flex", alignItems: "center", gap: 14,
        minWidth: 230,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: "linear-gradient(135deg, #FFC107, #FF4D1A)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <PillarIcon name="calendar" size={22} color="#fff" />
        </div>
        <div>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 0.1 + "em" }}>NEXT AVAILABLE</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>本週六 13:00 – 17:00</div>
          <div style={{ fontSize: 12, color: "#FF4D1A", fontWeight: 600, marginTop: 2 }}>百人空間 · NT$ 4,000</div>
        </div>
      </div>}

      {/* floating rating chip */}
      {showChips && <div style={{
        position: "absolute", right: -16, top: 80,
        background: "#fff", borderRadius: 16,
        padding: "12px 16px",
        boxShadow: "0 18px 40px rgba(31,31,31,0.12)",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{ display: "flex", gap: 2 }}>
          {[0,1,2,3,4].map(i => <PillarIcon key={i} name="star" size={14} color="#FFC107" />)}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "Poppins" }}>4.9</div>
        </div>
        <div style={{ fontSize: 11, color: "#777", lineHeight: 1.3 }}>來自<br/>200+ 場活動</div>
      </div>}
    </div>
  );
}

Object.assign(window, { TopNav, Hero });

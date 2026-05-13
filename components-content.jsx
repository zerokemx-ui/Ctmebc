/* About + Pillars + Services + Space + Facilities */

function Pillars() {
  const items = window.CTMEBC.pillars;
  return (
    <section id="about" style={{ padding: "120px 0 100px", background: "#fff" }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 80, alignItems: "center",
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>About Ctmebc</div>
            <h2 className="h-1" style={{ marginBottom: 24 }}>
              從 2016 年起，<br />與創業頭家<span className="text-grad">鬥陣成功</span>。
            </h2>
            <p style={{ color: "#555", fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}>
              嘉寀萌商務中心由創辦人陳筱豌承租台中北區商業大樓近百坪空間，
              規劃多種規格的辦公室、會議室與虛擬辦公服務，
              讓剛起步或小規模的公司，用最少的營運成本，享有完整的辦公規模。
            </p>
            <p style={{ color: "#555", fontSize: 16, lineHeight: 1.85, marginBottom: 32 }}>
              我們同時提供公司登記、帳務管理、企業連結與軟硬體設施，
              讓您專注於核心業務，將每一個重要時刻交給我們。
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                { num: "10+", label: "年商務經驗" },
                { num: "200+", label: "活動場次" },
                { num: "45", label: "坪空間規模" },
                { num: "100", label: "人最大容量" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-grad" style={{ fontSize: 36, fontWeight: 700, fontFamily: "Poppins", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: "#777", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars 2x2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {items.map((p, i) => (
              <div key={i} className="card" style={{
                padding: 26, borderRadius: 22,
                background: i === 1 ? "var(--brand-grad-radial)" : "#fff",
                color: i === 1 ? "#fff" : undefined,
                border: i === 1 ? "1px solid transparent" : undefined,
                boxShadow: i === 1 ? "0 20px 40px rgba(255,77,26,0.25)" : undefined,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: i === 1 ? "rgba(255,255,255,0.2)" : "linear-gradient(135deg,#FFC107,#FF4D1A)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
                }}>
                  <PillarIcon name={p.icon} size={26} color="#fff" />
                </div>
                <div style={{
                  fontSize: 11, letterSpacing: "0.18em", fontFamily: "Poppins",
                  fontWeight: 600, marginBottom: 6,
                  color: i === 1 ? "rgba(255,255,255,0.85)" : "#FF4D1A",
                }}>{p.en.toUpperCase()}</div>
                <h3 className="h-3" style={{ marginBottom: 10, color: i === 1 ? "#fff" : undefined }}>{p.zh}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: i === 1 ? "rgba(255,255,255,0.92)" : "#666" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ onBook }) {
  const services = window.CTMEBC.services;
  return (
    <section id="services" style={{
      padding: "120px 0",
      background: "linear-gradient(180deg, #FFF8EE 0%, #FFFFFF 100%)",
    }}>
      <div className="container">
        <SectionHeading
          eyebrow="Our Solutions"
          title="一站式商務空間解決方案"
          sub="從個人創業到企業活動，四項主要服務滿足不同規模的需求。"
        />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22,
        }}>
          {services.map((s, i) => (
            <article key={i} className="card" style={{
              padding: 0, overflow: "hidden", display: "flex", flexDirection: "column",
            }}>
              <div className="ph" style={{
                aspectRatio: "4/3", borderRadius: "20px 20px 0 0",
                margin: 0,
              }}>
                <span>{s.image}</span>
              </div>
              <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{
                  fontFamily: "Poppins", fontSize: 11, color: "#FF7A00",
                  letterSpacing: "0.16em", fontWeight: 600,
                }}>{s.tag}</div>
                <h3 className="h-3" style={{ marginTop: 8, marginBottom: 10 }}>{s.title}</h3>
                <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <span className="chip-neutral chip">{s.capacity}</span>
                  {s.area !== "—" && <span className="chip-neutral chip">{s.area}</span>}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#666", flex: 1 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "14px 0 14px" }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 12, color: "#FF4D1A",
                      background: "rgba(255,77,26,0.08)",
                      padding: "3px 10px", borderRadius: 99,
                    }}>{t}</span>
                  ))}
                </div>
                <button className="btn-link" onClick={onBook} style={{
                  background: "none", border: "none", padding: 0, alignSelf: "flex-start",
                }}>了解更多 <Arrow size={14} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpaceShowcase() {
  return (
    <section id="space" style={{ padding: "120px 0", background: "#fff" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Signature Space"
          title="百人空間 · 場地配置完善"
          sub="近 45 坪大開放空間，搭配獨間講師休息室與沙發洽談區，從課程講座到企業派對都能輕鬆對應。"
        />

        {/* Photo grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "240px 240px",
          gap: 16, marginBottom: 64,
        }}>
          <div className="ph" style={{ gridRow: "span 2" }}><span>百人空間 / 全景</span></div>
          <div className="ph"><span>講師休息室</span></div>
          <div className="ph"><span>洽談沙發區</span></div>
          <div className="ph"><span>投影 + 講桌</span></div>
          <div className="ph"><span>飲水休憩區</span></div>
        </div>

        {/* Activities */}
        <div style={{
          background: "var(--cream)",
          borderRadius: 24, padding: 36,
          display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "center",
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>常見活動類型</div>
            <h3 className="h-2" style={{ marginBottom: 12 }}>場地適合多元活動</h3>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>
              依據過往使用紀錄，課程講座佔比最高，亦適合企業會議、團隊聚會、品牌發表與派對活動。
            </p>
          </div>
          <div>
            {window.CTMEBC.activities.map((a, i) => (
              <div key={i} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{a.label}</span>
                  <span style={{ fontSize: 14, fontFamily: "Poppins", fontWeight: 700, color: "#FF4D1A" }}>{a.value}%</span>
                </div>
                <div style={{ height: 8, background: "#fff", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{
                    width: `${a.value}%`, height: "100%",
                    background: `linear-gradient(90deg, #FFC107, #FF7A00 ${i*15}%, #FF4D1A)`,
                    borderRadius: 99,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const data = window.CTMEBC.facilities;
  return (
    <section style={{ padding: "120px 0", background: "linear-gradient(180deg, #fff 0%, #FFF8EE 100%)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Facilities & Equipment"
          title="完整設備清單"
          sub="從辦公器材、影音設備到生活機能，所有活動所需一應俱全。"
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {data.map((group, gi) => (
            <div key={gi} className="card" style={{ padding: 28, borderRadius: 22 }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginBottom: 22,
              }}>
                <h3 className="h-3">{group.group}</h3>
                <div style={{
                  fontFamily: "Poppins", fontSize: 11, color: "#FF7A00",
                  letterSpacing: "0.18em", fontWeight: 600,
                }}>0{gi + 1}</div>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {group.items.map((it, i) => (
                  <li key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "12px 0",
                    borderBottom: i === group.items.length - 1 ? "none" : "1px dashed #eee",
                  }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1f1f1f" }}>{it.name}</div>
                      {it.note && <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{it.note}</div>}
                    </div>
                    {it.qty !== "" && (
                      <div style={{
                        fontFamily: "Poppins", fontSize: 13, fontWeight: 700,
                        color: "#FF4D1A",
                        background: "rgba(255,77,26,0.08)",
                        padding: "3px 10px", borderRadius: 99, minWidth: 30, textAlign: "center",
                      }}>×{it.qty}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Safety & amenity strip */}
        <div style={{
          marginTop: 32,
          background: "#fff", borderRadius: 22, padding: "24px 32px",
          border: "1px solid #eee",
          display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24,
        }}>
          {[
            { icon: "wifi", label: "500M 高速 WiFi" },
            { icon: "car", label: "免費平面車位" },
            { icon: "home", label: "無障礙空間" },
            { icon: "mic", label: "無線麥克風 ×3" },
            { icon: "print", label: "雷射事務機" },
            { icon: "check", label: "消防安全合規" },
          ].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(255, 77, 26, 0.10)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <PillarIcon name={f.icon} size={18} color="#FF4D1A" />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pillars, Services, SpaceShowcase, Facilities });

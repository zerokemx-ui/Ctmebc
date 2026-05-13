/* Pricing + Location + FAQ + Testimonials + Footer + Booking modal */

function Pricing({ onBook }) {
  const plans = window.CTMEBC.pricing;
  const slots = window.CTMEBC.timeSlots;
  return (
    <section id="pricing" style={{ padding: "120px 0", background: "#fff" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Pricing Plan"
          title="彈性方案 · 透明價格"
          sub="多元方案選擇，滿足不同規模與需求；皆未稅，發票 5% 另計。"
        />

        {/* Time slot strip */}
        <div style={{
          background: "var(--cream)",
          borderRadius: 18, padding: "20px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, marginBottom: 36,
        }}>
          <div style={{
            fontSize: 13, fontWeight: 600, color: "#1f1f1f",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <PillarIcon name="calendar" size={18} color="#FF4D1A" />
            場地預訂時段
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {slots.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 12, color: "#777" }}>{s.label}</span>
                <span style={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 600, color: "#FF4D1A" }}>{s.time}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#777", maxWidth: 220, textAlign: "right" }}>
            週五晚上至週日 / 國定假日採假日價格
          </div>
        </div>

        {/* Pricing cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {plans.map((p, i) => {
            const isFeatured = p.featured;
            return (
              <div key={i} style={{
                position: "relative",
                borderRadius: 24, padding: 32,
                background: isFeatured ? "var(--brand-grad-radial)" : "#fff",
                color: isFeatured ? "#fff" : undefined,
                border: isFeatured ? "1px solid transparent" : "1px solid #eee",
                boxShadow: isFeatured ? "0 24px 48px rgba(255,77,26,0.28)" : "0 2px 8px rgba(31,31,31,0.04)",
                transform: isFeatured ? "translateY(-12px)" : "none",
              }}>
                {isFeatured && (
                  <div style={{
                    position: "absolute", top: -14, left: 32,
                    background: "#1f1f1f", color: "#FFC107",
                    padding: "6px 14px", borderRadius: 99,
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", fontFamily: "Poppins",
                  }}>{p.tag}</div>
                )}
                <div style={{
                  fontSize: 11, letterSpacing: "0.18em", fontFamily: "Poppins",
                  fontWeight: 600, marginBottom: 8,
                  color: isFeatured ? "rgba(255,255,255,0.8)" : "#FF4D1A",
                }}>{!isFeatured ? p.tag : "FEATURED"}</div>
                <h3 className="h-3" style={{ marginBottom: 6, color: isFeatured ? "#fff" : undefined }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: isFeatured ? "rgba(255,255,255,0.85)" : "#777", marginBottom: 20 }}>{p.desc}</p>

                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 24 }}>
                  <span style={{ fontSize: 14, opacity: 0.7 }}>NT$</span>
                  <span style={{
                    fontFamily: "Poppins", fontSize: 44, fontWeight: 700, lineHeight: 1,
                  }}>{p.price}</span>
                  <span style={{ fontSize: 14, opacity: 0.7 }}>/ {p.unit}</span>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                  {p.features.map((f, fi) => (
                    <li key={fi} style={{
                      padding: "10px 0",
                      display: "flex", alignItems: "center", gap: 10,
                      fontSize: 14,
                      borderBottom: fi === p.features.length - 1 ? "none" : `1px dashed ${isFeatured ? "rgba(255,255,255,0.2)" : "#eee"}`,
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: 99, flexShrink: 0,
                        background: isFeatured ? "rgba(255,255,255,0.2)" : "rgba(255,77,26,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <PillarIcon name="check" size={12} color={isFeatured ? "#fff" : "#FF4D1A"} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <button onClick={onBook} className="btn" style={{
                  width: "100%", height: 48,
                  background: isFeatured ? "#fff" : "var(--brand-grad)",
                  color: isFeatured ? "#FF4D1A" : "#fff",
                  fontWeight: 700,
                  boxShadow: isFeatured ? "0 4px 12px rgba(0,0,0,0.1)" : "var(--shadow-orange)",
                  justifyContent: "center",
                }}>{p.cta} <Arrow size={14} /></button>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", color: "#999", fontSize: 13, marginTop: 32 }}>
          * 場地租金皆未稅；發票 5% 另計。如需飲食需收 300 元場地清潔押金，活動結束保持清潔即全額退還。
        </p>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" style={{ padding: "120px 0", background: "#FFF8EE" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Location & Transport"
          title="台中北區精華地段"
          sub="一樓即公車站牌，鄰近中清文心捷運站、中國醫商圈與一中街，交通便利。"
        />

        <div style={{
          background: "#fff", borderRadius: 24,
          padding: 0, overflow: "hidden",
          boxShadow: "0 20px 50px rgba(31,31,31,0.08)",
          display: "grid", gridTemplateColumns: "1.1fr 1fr",
        }}>
          {/* Map placeholder */}
          <div style={{ position: "relative", minHeight: 420 }}>
            <div className="ph" style={{
              position: "absolute", inset: 0, borderRadius: 0,
              background: `
                linear-gradient(135deg, rgba(255,193,7,0.10), rgba(255,77,26,0.16)),
                repeating-linear-gradient(0deg, #f3ede3 0 30px, #ece5d8 30px 31px),
                repeating-linear-gradient(90deg, #f3ede3 0 30px, #ece5d8 30px 31px)
              `,
            }}>
              <span style={{
                position: "absolute", top: 16, left: 16,
                background: "rgba(255,255,255,0.92)",
              }}>地圖 / Google Maps</span>
            </div>
            {/* Pin marker */}
            <div style={{
              position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -100%)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            }}>
              <div style={{
                background: "var(--brand-grad)",
                padding: "10px 16px", borderRadius: 99, color: "#fff",
                fontSize: 13, fontWeight: 700,
                boxShadow: "0 12px 28px rgba(255,77,26,0.4)",
                whiteSpace: "nowrap",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <PillarIcon name="pin" size={14} color="#fff" />
                Ctmebc · 嘉寀萌商務中心
              </div>
              <div style={{
                width: 4, height: 28, background: "linear-gradient(to bottom, #FF4D1A, rgba(255,77,26,0))",
                borderRadius: 99,
              }} />
            </div>
          </div>

          {/* Detail */}
          <div style={{ padding: 40 }}>
            <div className="chip" style={{ marginBottom: 16 }}>15F · 商業大樓</div>
            <h3 className="h-2" style={{ marginBottom: 24 }}>
              台中市北區<br/>中清路一段 89 號 15F
            </h3>
            <div style={{ borderTop: "1px solid #eee", paddingTop: 24 }}>
              {[
                { icon: "car", label: "捷運綠線 G7 站", desc: "轉搭公車約 8 分鐘即可到達" },
                { icon: "car", label: "高鐵接駁站", desc: "篤行國小站，步行 3–5 分鐘" },
                { icon: "pin", label: "公車站牌", desc: "文莊里站（一樓站牌）" },
                { icon: "home", label: "周邊機能", desc: "全家 / 7-11 / 全聯、杏一藥局" },
              ].map((it, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16, padding: "14px 0",
                  borderBottom: i === 3 ? "none" : "1px dashed #eee",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: "rgba(255, 77, 26, 0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <PillarIcon name={it.icon} size={20} color="#FF4D1A" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#1f1f1f" }}>{it.label}</div>
                    <div style={{ fontSize: 13, color: "#777", marginTop: 2 }}>{it.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button className="btn btn-primary" style={{ height: 42, padding: "0 18px", fontSize: 13 }}>
                <PillarIcon name="pin" size={14} color="#fff" /> 開啟地圖
              </button>
              <button className="btn btn-ghost" style={{ height: 42, padding: "0 18px", fontSize: 13 }}>
                <PillarIcon name="phone" size={14} color="#FF4D1A" /> 04-2295-XXXX
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const data = window.CTMEBC.faq;
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ padding: "120px 0", background: "#fff" }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 80, alignItems: "flex-start",
        }}>
          <div style={{ position: "sticky", top: 100 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>FAQ · 常見問題</div>
            <h2 className="h-1" style={{ marginBottom: 18 }}>還有疑問？<br />我們替您解答</h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              如未能找到您要的答案，歡迎透過電話或 Facebook 與我們聯絡，
              我們將儘速為您回覆。
            </p>
            <button className="btn btn-primary">
              <PillarIcon name="mail" size={16} color="#fff" /> 聯絡客服
            </button>
          </div>
          <div>
            {data.map((item, i) => (
              <div key={i} style={{
                borderBottom: "1px solid #eee",
                padding: "20px 0",
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  background: "none", border: "none", padding: 0,
                  width: "100%", textAlign: "left",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                }}>
                  <span style={{ fontSize: 17, fontWeight: 600, color: "#1f1f1f" }}>{item.q}</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: 99, flexShrink: 0,
                    background: open === i ? "var(--brand-grad)" : "rgba(255,77,26,0.1)",
                    color: open === i ? "#fff" : "#FF4D1A",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all .2s",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}>
                    <PillarIcon name="plus" size={16} color={open === i ? "#fff" : "#FF4D1A"} />
                  </span>
                </button>
                <div style={{
                  maxHeight: open === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height .35s ease, margin .25s ease",
                  marginTop: open === i ? 14 : 0,
                }}>
                  <p style={{ fontSize: 15, lineHeight: 1.85, color: "#666", margin: 0 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const data = window.CTMEBC.testimonials;
  return (
    <section style={{ padding: "100px 0", background: "linear-gradient(180deg, #FFF8EE 0%, #fff 100%)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Clients Testimonials"
          title="客戶見證"
          sub="近年超過 200 場活動，創業頭家與企業客戶的真實回饋。"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {data.map((t, i) => (
            <div key={i} className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[0,1,2,3,4].map(s => <PillarIcon key={s} name="star" size={16} color="#FFC107" />)}
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", marginBottom: 24 }}>「{t.quote}」</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 99,
                  background: "linear-gradient(135deg, #FFC107, #FF4D1A)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 700, fontFamily: "Poppins",
                }}>{t.name.charAt(0)}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAStrip({ onBook }) {
  return (
    <section style={{ padding: "0 0 80px", background: "#fff" }}>
      <div className="container">
        <div style={{
          background: "var(--brand-grad-radial)",
          borderRadius: 28, padding: "48px 56px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32,
          color: "#fff",
          boxShadow: "0 30px 60px rgba(255,77,26,0.28)",
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden style={{
            position: "absolute", right: -100, top: -100,
            width: 360, height: 360, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)",
          }} />
          <div style={{
            width: 64, height: 64, borderRadius: 18,
            background: "rgba(255,255,255,0.18)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <PillarIcon name="calendar" size={32} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 className="h-2" style={{ color: "#fff", marginBottom: 8 }}>立即預約參觀，體驗專業商務空間</h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.92)", margin: 0 }}>
              讓我們為您身打造最適合的辦公解決方案，從一杯咖啡的導覽開始。
            </p>
          </div>
          <button onClick={onBook} className="btn" style={{
            background: "#fff", color: "#FF4D1A",
            height: 56, padding: "0 32px", fontWeight: 700,
          }}>預約參觀 <Arrow /></button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const b = window.CTMEBC.brand;
  return (
    <footer style={{
      background: "linear-gradient(180deg, #1f1f1f 0%, #111 100%)",
      color: "#fff",
      padding: "80px 0 30px",
    }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr", gap: 48,
        }}>
          <div>
            <LogoLockup size={36} light />
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 20, lineHeight: 1.8 }}>
              致力於提供優質的商務空間<br/>與專業支援服務，<br/>
              成為專業發展的最佳夥伴。
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {[
                { icon: "fb", href: b.fb },
                { icon: "line", href: "#" },
                { icon: "ig", href: "#" },
                { icon: "mail", href: `mailto:${b.email}` },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 38, height: 38, borderRadius: 12,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all .2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--brand-grad)"; e.currentTarget.style.borderColor = "transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <PillarIcon name={s.icon} size={16} color="#fff" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 14, marginBottom: 18, color: "#fff" }}>服務項目</h4>
            {["百人空間租借", "辦公室出租", "會議室租借", "虛擬辦公室", "商務支援服務"].map(t => (
              <a key={t} href="#services" style={{
                display: "block", fontSize: 13, padding: "8px 0",
                color: "rgba(255,255,255,0.65)",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#FFC107"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
              >{t}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 14, marginBottom: 18, color: "#fff" }}>客戶服務</h4>
            {["常見問題", "預訂流程", "退訂政策", "場地規範", "隱私政策"].map(t => (
              <a key={t} href="#faq" style={{
                display: "block", fontSize: 13, padding: "8px 0",
                color: "rgba(255,255,255,0.65)",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#FFC107"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
              >{t}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 14, marginBottom: 18, color: "#fff" }}>聯絡我們</h4>
            {[
              { icon: "pin",   text: b.address },
              { icon: "phone", text: "04-2295-XXXX" },
              { icon: "mail",  text: b.email },
              { icon: "calendar", text: "週一至週五 09:00 – 18:00" },
            ].map((c, i) => (
              <div key={i} style={{
                display: "flex", gap: 10, padding: "8px 0",
                fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5,
              }}>
                <PillarIcon name={c.icon} size={14} color="#FF7A00" />
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 56, paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 12, color: "rgba(255,255,255,0.5)",
        }}>
          <span>© 2026 Ctmebc 嘉寀萌商務中心. All Rights Reserved.</span>
          <span style={{ fontFamily: "Poppins", letterSpacing: "0.15em" }}>
            Trust · Professional · Support · Co-create
          </span>
        </div>
      </div>
    </footer>
  );
}

// ---------------- Booking Modal ----------------
function BookingModal({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({ type: "百人空間", date: "", slot: "", name: "", phone: "" });
  React.useEffect(() => {
    if (open) setStep(0);
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(15, 12, 8, 0.55)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 24, maxWidth: 540, width: "100%",
        padding: 40, position: "relative",
        boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
      }}>
        <button onClick={onClose} aria-label="close" style={{
          position: "absolute", top: 16, right: 16,
          width: 36, height: 36, borderRadius: 99,
          background: "#f3f3f3", border: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, color: "#777",
        }}>×</button>

        {step === 0 && (
          <>
            <div className="eyebrow" style={{ marginBottom: 10 }}>STEP 1 / 2 · 選擇方案</div>
            <h3 className="h-2" style={{ marginBottom: 6 }}>預約參觀 / 預訂</h3>
            <p className="muted" style={{ fontSize: 14, marginBottom: 24 }}>填寫基本資訊，專人將於 24 小時內回覆。</p>

            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>方案類型</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
                {["百人空間", "辦公室出租", "虛擬辦公室", "商務支援"].map(t => (
                  <button key={t} onClick={() => setForm({ ...form, type: t })}
                    style={{
                      padding: "12px 16px", borderRadius: 12,
                      border: form.type === t ? "2px solid #FF4D1A" : "1px solid #e0e0e0",
                      background: form.type === t ? "rgba(255,77,26,0.06)" : "#fff",
                      color: form.type === t ? "#FF4D1A" : "#333",
                      fontSize: 14, fontWeight: 600,
                      cursor: "pointer", textAlign: "left",
                    }}>{t}</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>時段</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 8 }}>
                {window.CTMEBC.timeSlots.map(s => (
                  <button key={s.label} onClick={() => setForm({ ...form, slot: s.label })} style={{
                    padding: "12px 8px", borderRadius: 12,
                    border: form.slot === s.label ? "2px solid #FF4D1A" : "1px solid #e0e0e0",
                    background: form.slot === s.label ? "rgba(255,77,26,0.06)" : "#fff",
                    color: form.slot === s.label ? "#FF4D1A" : "#333",
                    fontSize: 13, fontWeight: 600, cursor: "pointer",
                  }}>
                    <div>{s.label}</div>
                    <div style={{ fontFamily: "Poppins", fontSize: 11, opacity: 0.8, marginTop: 2 }}>{s.time}</div>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => setStep(1)} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              下一步 <Arrow size={14} />
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <div className="eyebrow" style={{ marginBottom: 10 }}>STEP 2 / 2 · 聯絡資訊</div>
            <h3 className="h-2" style={{ marginBottom: 6 }}>聯絡資訊</h3>
            <p className="muted" style={{ fontSize: 14, marginBottom: 24 }}>專人將以電話或 Email 與您確認。</p>

            {[
              { k: "name", label: "姓名", placeholder: "請輸入您的姓名" },
              { k: "phone", label: "聯絡電話", placeholder: "0912-345-678" },
              { k: "date", label: "預計日期", placeholder: "YYYY / MM / DD" },
            ].map(f => (
              <div key={f.k} style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>{f.label}</label>
                <input
                  value={form[f.k]}
                  onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                  placeholder={f.placeholder}
                  style={{
                    width: "100%", height: 46, padding: "0 16px",
                    borderRadius: 12, border: "1px solid #e0e0e0",
                    fontSize: 14, fontFamily: "inherit",
                    outline: "none", boxSizing: "border-box",
                  }}
                  onFocus={e => e.target.style.borderColor = "#FF4D1A"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                />
              </div>
            ))}

            <div style={{
              background: "var(--cream)", borderRadius: 12,
              padding: 14, marginBottom: 18, fontSize: 13, color: "#666", lineHeight: 1.6,
            }}>
              <strong style={{ color: "#FF4D1A" }}>已選擇：</strong>{form.type} · {form.slot || "未指定時段"}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setStep(0)} className="btn btn-ghost" style={{ flex: 1, justifyContent: "center" }}>
                上一步
              </button>
              <button onClick={() => { alert("已送出預約申請！我們將於 24 小時內回覆。"); onClose(); }}
                className="btn btn-primary" style={{ flex: 2, justifyContent: "center" }}>
                送出預約 <Arrow size={14} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Pricing, Location, FAQ, Testimonials, CTAStrip, Footer, BookingModal });

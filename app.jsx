/* Main App */

function App() {
  const [booking, setBooking] = React.useState(false);
  const [tweaks, setTweaks] = useTweaks(/*EDITMODE-BEGIN*/{
    "heroVariant": "gradient-card",
    "primaryHue": "orange",
    "showFloatingChips": true,
    "pricingHighlight": "weekday"
  }/*EDITMODE-END*/);

  // Apply primary hue swap to CSS vars
  React.useEffect(() => {
    const root = document.documentElement;
    const hues = {
      orange: { y: "#FFC107", o: "#FF7A00", r: "#FF4D1A" },
      sunset: { y: "#FFB74D", o: "#FF6F3D", r: "#E63946" },
      warm:   { y: "#FFD166", o: "#EF8354", r: "#D62246" },
    };
    const h = hues[tweaks.primaryHue] || hues.orange;
    root.style.setProperty("--brand-yellow", h.y);
    root.style.setProperty("--brand-orange", h.o);
    root.style.setProperty("--brand-red", h.r);
    root.style.setProperty("--brand-grad", `linear-gradient(135deg, ${h.y} 0%, ${h.o} 45%, ${h.r} 100%)`);
    root.style.setProperty("--brand-grad-radial", `radial-gradient(120% 90% at 80% 0%, ${h.y} 0%, ${h.o} 35%, ${h.r} 85%)`);
  }, [tweaks.primaryHue]);

  const openBooking = () => setBooking(true);

  // simple reveal-on-scroll
  React.useEffect(() => {
    const obs = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <TopNav onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} showChips={tweaks.showFloatingChips} />
        <Pillars />
        <Services onBook={openBooking} />
        <SpaceShowcase />
        <Facilities />
        <Pricing onBook={openBooking} />
        <Testimonials />
        <Location />
        <FAQ />
        <CTAStrip onBook={openBooking} />
      </main>
      <Footer />
      <BookingModal open={booking} onClose={() => setBooking(false)} />

      {/* Tweaks panel */}
      <TweaksPanel title="Ctmebc Tweaks">
        <TweakSection label="品牌色調">
          <TweakRadio
            label="主色"
            value={tweaks.primaryHue}
            options={[
              { label: "活力橙", value: "orange" },
              { label: "Sunset", value: "sunset" },
              { label: "Warm", value: "warm" },
            ]}
            onChange={v => setTweaks({ primaryHue: v })}
          />
        </TweakSection>
        <TweakSection label="Hero 設定">
          <TweakToggle
            label="顯示懸浮資訊卡"
            value={tweaks.showFloatingChips}
            onChange={v => setTweaks({ showFloatingChips: v })}
          />
        </TweakSection>
        <TweakSection label="價格區塊">
          <TweakRadio
            label="主推方案"
            value={tweaks.pricingHighlight}
            options={[
              { label: "平日", value: "weekday" },
              { label: "假日", value: "weekend" },
            ]}
            onChange={v => setTweaks({ pricingHighlight: v })}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

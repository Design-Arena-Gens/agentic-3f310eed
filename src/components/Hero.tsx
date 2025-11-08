export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-center gap-10 py-24">
      <div className="relative z-10 max-w-3xl space-y-6 animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-space-neon/30 bg-space-dark/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-space-neon/80">
          Veo 3 Cinematic Journey
        </span>
        <h1 className="font-heading text-5xl leading-tight md:text-6xl">
          <span className="text-gradient">Alien Arrival: पृथ्वी पर पहला मिलन</span>
        </h1>
        <p className="text-lg text-white/75 md:text-xl">
          Veo 3 का उपयोग करके ऐसा वीडियो बनाएं जिसमें एक एलियन पृथ्वी पर उतरता है, इंसानों से जुड़ने की कोशिश करता है और हमारे ग्रह की खूबसूरती को खोजता है। नीचे आपको पूरा सिनेमैटिक प्लान, प्रॉम्प्ट्स और विजुअल रेफरेंस मिलेंगे।
        </p>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-4 animate-fade-up-delay">
        <a
          href="#workflow"
          className="rounded-full bg-space-neon/90 px-6 py-3 text-sm font-medium text-space-dark transition hover:bg-space-neon"
        >
          पूरा वर्कफ़्लो देखें
        </a>
        <a
          href="#prompts"
          className="rounded-full border border-space-neon/40 px-6 py-3 text-sm font-medium text-space-neon transition hover:border-space-neon/80"
        >
          Veo 3 प्रॉम्प्ट्स
        </a>
      </div>

      <div className="relative z-10 mt-10 h-64 w-full max-w-5xl overflow-hidden rounded-3xl border border-space-neon/20 bg-gradient-to-r from-space-dark/70 via-space-glow/25 to-space-dark/60 p-[1px] animate-scale-fade">
        <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-2px)] bg-space-dark/85">
          <div
            className="absolute inset-0 opacity-60 animate-pulse-slow"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(74,177,255,0.35), transparent 55%), radial-gradient(circle at 70% 60%, rgba(76,255,192,0.25), transparent 60%)"
            }}
          />
          <div className="relative flex h-full flex-col justify-between p-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-space-alien">Scene Preview</h2>
              <p className="max-w-xl text-sm text-white/70">
                रात का समय, हिमालय की घाटियों में चमकता स्पेसक्राफ्ट उतरता है। वॉयसओवर: "जब दूर की सभ्यता ने पहली बार पृथ्वी को छुआ..."
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-1">Fog Layers</span>
              <span className="rounded-full border border-white/15 px-4 py-1">Bioluminescent Light</span>
              <span className="rounded-full border border-white/15 px-4 py-1">Wide-angle Drone Shot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

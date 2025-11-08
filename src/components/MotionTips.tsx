const tips = [
  {
    heading: "मूड · नीऑन शांति",
    points: [
      "Color script में gradient: deep navy → cyan → lavender → alien green",
      "Fog और particles के लिए highlight शब्द: \"volumetric mist, bioluminescent dust\"",
      "क्लाइमेक्स में सूर्योदय के warm hues जोड़ें"
    ]
  },
  {
    heading: "कैमरा ट्रिक",
    points: [
      "Arrival: \"slow tilt-down drone shot, 24mm lens, cinematic easing\"",
      "Contact: \"steadycam glide, 35mm lens, human eye perspective\"",
      "Departure: \"heroic wide shot, dolly backward, sunrise flare\""
    ]
  },
  {
    heading: "साउंड डिजाइन",
    points: [
      "Ambient hum + distant choir → intro में suspense",
      "First contact पर soft chime hit + low heartbeat",
      "Departure पर उभरता orchestral swell + हवा की घंटियाँ"
    ]
  }
];

export function MotionTips() {
  return (
    <section className="relative py-24">
      <h2 className="mb-12 font-heading text-4xl text-white md:text-5xl animate-fade-up">
        ऑडियो · मूडबोर्ड · कैमरा भाषा
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {tips.map((tip, index) => (
          <div
            key={tip.heading}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md card-glow animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="relative z-10 font-heading text-xl text-space-neon">{tip.heading}</h3>
            <ul className="relative z-10 mt-5 space-y-4 text-sm text-white/75">
              {tip.points.map(point => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

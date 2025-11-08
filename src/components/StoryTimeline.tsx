const beats = [
  {
    title: "सीन 1 · Arrival Pulse",
    description:
      "रात का आसमान, उत्तरी रोशनी जैसी हरकतें। अचानक एक वेव-शेप्ड जहाज बादलों को चीरते हुए उतरता है। कैमरा ऊपर से बर्ड्स-आई शॉट में।",
    camera: "Aerial tilt-down, 24mm, slow easing in",
    mood: "Ethereal · Awe-struck · शांत रोमांच"
  },
  {
    title: "सीन 2 · First Contact",
    description:
      "एलियन मानव बच्चे के सामने धीरे से उतरता है। त्वचा पर ग्लो और आँखों में जिज्ञासा। बच्चे के हाथ में मिट्टी का छोटा ग्लोब।",
    camera: "Eye-level, steadycam, 35mm, shallow depth of field",
    mood: "Tender · आश्वस्त · हार्मोनिक"
  },
  {
    title: "सीन 3 · Shared Vision",
    description:
      "दोनों हाथ एक तालाब के ऊपर मिलते हैं और पानी में पृथ्वी और एलियन ग्रह की संयुक्त होलोग्राफिक झलक उभरती है।",
    camera: "Orbiting dolly, macro close-up, 50mm",
    mood: "Magical · Transcendent · शांत"
  },
  {
    title: "सीन 4 · Departure Promise",
    description:
      "सूर्योदय के साथ जहाज आसमान में गायब होता है, पीछे झरने पर नया इंद्रधनुष और हवा में चमकती पत्तियाँ।",
    camera: "Wide establishing, 16mm, slow zoom out",
    mood: "Hopeful · वादा · भविष्यवादी"
  }
];

export function StoryTimeline() {
  return (
    <section id="workflow" className="relative py-24">
      <h2 className="relative z-10 mb-12 font-heading text-4xl text-white md:text-5xl animate-fade-up">
        सिनेमैटिक बीट्स टाइमलाइन
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-space-neon/60 via-white/10 to-transparent md:left-8" />
        <div className="space-y-10 pl-10 md:pl-20">
          {beats.map((beat, index) => (
            <article
              key={beat.title}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 transition shadow-[0_0_40px_-15px_rgba(74,177,255,0.35)] backdrop-blur-lg md:p-10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="absolute left-[-44px] top-10 hidden h-6 w-6 rounded-full border border-space-neon/50 bg-space-dark md:block" />
              <div className="absolute left-[-40px] top-[52px] hidden h-16 w-[2px] bg-space-neon/40 md:block" />
              <h3 className="font-heading text-2xl text-space-alien">{beat.title}</h3>
              <p className="mt-4 text-base text-white/75 leading-relaxed">{beat.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <span className="rounded-full border border-space-neon/30 px-4 py-1">
                  कैमरा · {beat.camera}
                </span>
                <span className="rounded-full border border-space-accent/30 px-4 py-1">
                  मूड · {beat.mood}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

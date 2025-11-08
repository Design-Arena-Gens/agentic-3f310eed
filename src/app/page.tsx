import { CosmicBackground } from "@/components/CosmicBackground";
import { Hero } from "@/components/Hero";
import { MotionTips } from "@/components/MotionTips";
import { PromptGrid } from "@/components/PromptGrid";
import { StoryTimeline } from "@/components/StoryTimeline";

const workflow = [
  {
    title: "1. संदर्भ खोजें",
    items: [
      "Pinterest पर \"ethereal night landscape\", \"bioluminescent forest\" खोजें",
      "Color palettes के लिए Coolors पर gradient export करें (navy → cyan → violet)",
      "Soundscape के लिए Artlist में \"cosmic ambient\" प्लेलिस्ट सेव रखें"
    ]
  },
  {
    title: "2. Veo 3 में प्रॉम्प्ट संरचना",
    items: [
      "Visual: environment + subject + प्रकाश + कैमरा + रंग",
      "Emotion: भावनात्मक शब्द + दर्शक प्रतिक्रिया",
      "Motion: कैमरा मूव + गति + ट्रांज़िशन संकेत",
      "Audio: mood, instrumentation, SFX"
    ]
  },
  {
    title: "3. पोस्ट-प्रोसेसिंग",
    items: [
      "CapCut या Premiere में light bloom 10-15%",
      "Sound design में low rumble + airy pad layer",
      "Subtitles: \"जब दूर की सभ्यता ने पहली बार पृथ्वी को छुआ...\""
    ]
  }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <CosmicBackground />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:px-12">
        <Hero />
        <StoryTimeline />
        <section className="relative py-24">
          <h2 className="mb-8 font-heading text-4xl text-white md:text-5xl animate-fade-up">
            Veo 3 वर्कफ़्लो चेकलिस्ट
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {workflow.map((stage, index) => (
              <div
                key={stage.title}
                className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md card-glow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="relative z-10 font-heading text-xl text-space-accent">{stage.title}</h3>
                <ul className="relative z-10 space-y-3 text-sm text-white/70">
                  {stage.items.map(item => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <PromptGrid />
        <MotionTips />
        <section className="relative mb-20 mt-10 rounded-3xl border border-space-neon/20 bg-space-dark/60 p-[1px] animate-scale-fade">
          <div className="rounded-[calc(1.5rem-2px)] bg-gradient-to-r from-space-dark/80 via-space-glow/15 to-space-dark/80 p-12">
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <h2 className="font-heading text-3xl text-white md:text-4xl">Render Direction Sheet</h2>
                <p className="mt-4 text-base text-white/70 leading-relaxed">
                  Veo 3 में multi-shot script के लिए ऊपर दिए गए प्रॉम्प्ट्स को क्रम में चलाएं। हर शॉट के बाद "next shot
                  continues with" लिखें ताकि नैरेटिव जुड़ाव बना रहे। Duration सेटिंग को 6-8 seconds पर रखें और output को
                  24fps में export करें।
                </p>
              </div>
              <div className="space-y-4 text-sm text-white/65">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-space-neon/70">Audio Cue</div>
                  <div className="mt-2 font-medium text-white/80">
                    "Celestial Heartbeat" + soft wind chimes + low sub drones
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-space-neon/70">एडिटिंग टिप</div>
                  <div className="mt-2 font-medium text-white/80">
                    Color LUT: teal shadows, magenta mid-tones, golden highlights. Motion blur 25%, grain 6%.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-space-neon/70">AI Voiceover</div>
                  <div className="mt-2 font-medium text-white/80">
                    Murf या ElevenLabs में warm Hindi narrator, हाई रिवर्ब tail 8%.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

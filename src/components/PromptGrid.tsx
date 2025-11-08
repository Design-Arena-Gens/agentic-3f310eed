import { PromptCard } from "./PromptCard";

const promptData = [
  {
    title: "PROMPT · Arrival Exterior",
    description: "हिमालय में अवतरण",
    prompt:
      "cinematic video, night time Himalayan valley under moonlight, sleek bio-organic alien spacecraft descending with translucent wings, volumetric fog, aurora borealis, glistening snow peaks, awe-filled shepherds watching, 24fps, blue-teal palette, dramatic lighting, Veo 3"
  },
  {
    title: "PROMPT · First Contact",
    description: "पहला संवाद",
    prompt:
      "tender nighttime clearing, curious luminescent alien kneeling to meet a young girl holding an earthen globe, bioluminescent plants, floating fireflies, shallow depth of field, warm rim light, emotional close-up, Veo 3"
  },
  {
    title: "PROMPT · Shared Vision",
    description: "होलोग्राफिक झील",
    prompt:
      "macro shot of hands hovering above mountain lake surface, holographic projection emerging showing Earth and alien planet merging, liquid light ripples, particles, soft choir score atmosphere, Veo 3, high fidelity"
  },
  {
    title: "PROMPT · Farewell",
    description: "रुख़सत का वादा",
    prompt:
      "sunrise over misty valley, alien ship ascending leaving ribbon of light, villagers waving, rainbow refracting through waterfall mist, cinematic drone pullback, emotive orchestral swell, Veo 3"
  }
];

export function PromptGrid() {
  return (
    <section id="prompts" className="relative py-24">
      <h2 className="mb-12 font-heading text-4xl text-white md:text-5xl">Veo 3 प्रॉम्प्ट पैलेट</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {promptData.map(item => (
          <PromptCard key={item.title} title={item.title} description={item.description} prompt={item.prompt} />
        ))}
      </div>
    </section>
  );
}

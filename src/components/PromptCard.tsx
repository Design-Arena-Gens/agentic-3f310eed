'use client';
import { useState } from "react";

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
}

export function PromptCard({ title, description, prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg card-glow animate-fade-up">
      <div className="relative z-10">
        <div className="mb-3 text-sm uppercase tracking-[0.3em] text-space-neon/70">{title}</div>
        <h3 className="text-2xl font-semibold text-space-alien">{description}</h3>
      </div>
      <p className="relative z-10 text-sm text-white/75 leading-relaxed">{prompt}</p>
      <div className="relative z-10 flex justify-end">
        <button
          onClick={handleCopy}
          className="rounded-full border border-space-neon/30 bg-space-dark/70 px-4 py-2 text-sm text-space-neon transition hover:border-space-neon/60 hover:bg-space-dark/40"
        >
          {copied ? "कॉपी हो गया ✅" : "प्रॉम्प्ट कॉपी करें"}
        </button>
      </div>
    </div>
  );
}

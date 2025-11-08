const layers = [
  { size: 320, blur: 180, opacity: 0.22, color: "#4ab1ff" },
  { size: 480, blur: 220, opacity: 0.16, color: "#9c6bff" },
  { size: 620, blur: 260, opacity: 0.12, color: "#4cffc0" }
];

export function CosmicBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-starscape opacity-65 animate-pulse-slow" />
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute rounded-full mix-blend-screen animate-slow-spin"
          style={{
            width: layer.size,
            height: layer.size,
            background: layer.color,
            filter: `blur(${layer.blur}px)`,
            opacity: layer.opacity
          }}
        />
      ))}
      <div
        className="absolute top-20 -right-24 h-96 w-96 rounded-full animate-float-soft"
        style={{ background: "radial-gradient(circle, rgba(156,107,255,0.35), transparent 70%)" }}
      />
      <div
        className="absolute bottom-8 left-12 h-80 w-80 rounded-full animate-float-bob"
        style={{ background: "radial-gradient(circle, rgba(76,255,192,0.28), transparent 65%)" }}
      />
    </div>
  );
}

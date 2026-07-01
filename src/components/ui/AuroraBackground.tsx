export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/30 blur-[120px] animate-aurora" />
      <div className="absolute right-[5%] top-[20%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[110px] animate-aurora [animation-delay:2s]" />
      <div className="absolute left-[5%] top-[45%] h-[380px] w-[380px] rounded-full bg-brand-soft/20 blur-[100px] animate-aurora [animation-delay:4s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(var(--border))_1px,transparent_0)] [background-size:32px_32px] opacity-[0.35]" />
    </div>
  );
}

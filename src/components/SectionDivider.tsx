export default function SectionDivider() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center py-12 px-6">
      <div className="gold-divider flex-1" />
      <div className="mx-6 flex items-center gap-2">
        <span className="h-1 w-1 rotate-45 bg-[color:var(--gold)]" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[color:var(--gold-bright)]" />
        <span className="h-1 w-1 rotate-45 bg-[color:var(--gold)]" />
      </div>
      <div className="gold-divider flex-1" />
    </div>
  );
}

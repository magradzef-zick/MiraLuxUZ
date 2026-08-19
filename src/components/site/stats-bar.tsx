import type { Dictionary } from "@/lib/i18n/dictionary";

export function StatsBar({ dict }: { dict: Dictionary }) {
  const stats = [
    dict.stats.years,
    dict.stats.tours,
    dict.stats.countries,
    dict.stats.unesco,
    dict.stats.rating,
  ];

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-2 divide-x divide-y divide-border border-border sm:grid-cols-5 sm:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-8 text-center">
            <span className="font-mono text-3xl font-semibold text-primary sm:text-4xl">
              {s.value}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

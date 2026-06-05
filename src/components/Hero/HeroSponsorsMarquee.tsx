import type { Sponsor } from "../../types/Sponsor";

type Props = { sponsors: Sponsor[] };

export default function HeroSponsorsMarquee({ sponsors }: Props) {
  const withLogos = sponsors.filter((s) => s.logo);

  const doubled = [...withLogos, ...withLogos];

  const duration = Math.min(20, withLogos.length * 1.2);

  return (
    <section className="bg-background py-6 overflow-hidden border-y border-border">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-muted mb-4">
        Patroni i Sponsorzy Festiwalu
      </p>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
          {doubled.map((sponsor, index) => (
            <a
              key={`${sponsor.id}-${index}`}
              href={sponsor.url ?? "#"}
              target="_blank"
              rel="noreferrer"
              title={sponsor.name}
              className="shrink-0 flex items-center justify-center w-32 h-16 bg-surface border border-border rounded-xl px-4 hover:border-accent transition-colors"
            >
              <img
                src={sponsor.logo!}
                alt={sponsor.name}
                className="max-h-10 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
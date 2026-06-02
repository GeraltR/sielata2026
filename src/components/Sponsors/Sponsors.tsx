import type { Sponsor } from "../../types/Sponsor";
import type { Festival } from "../../types/Festival";

type Props = {
  sponsors: Sponsor[];
  festival: Festival;
};

const TIERS: { key: Sponsor['category']; label: string; cols: string }[] = [
  { key: 'gold',    label: '🥇 Wsparcie w organizacji',  cols: 'grid-cols-2 sm:grid-cols-4' },
  { key: 'silver',  label: '🥈 Sponsorzy i Partnerzy',   cols: 'grid-cols-3 sm:grid-cols-6' },
  { key: 'partner', label: '🤝 Partnerzy',               cols: 'grid-cols-4 sm:grid-cols-8' },
  { key: 'media',   label: '📺 Patronat medialny',       cols: 'grid-cols-4 sm:grid-cols-8' },
];

const logoSize: Record<Sponsor['category'], string> = {
  gold:    'h-24',
  silver:  'h-20',
  partner: 'h-14',
  media:   'h-14',
};

type TierProps = {
  label: string;
  sponsors: Sponsor[];
  logoH: string;
  cols: string;
};

function SponsorTier({ label, sponsors, logoH, cols }: TierProps) {
  if (sponsors.length === 0) return null;

  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-4
                    flex items-center gap-3
                    after:content-[''] after:flex-1 after:h-px after:bg-border">
        {label}
      </p>
      <div className={`grid ${cols} gap-4`}>
        {sponsors.map((sponsor) => (
          <a  key={sponsor.id}
              href={sponsor.url ?? "#"}
              target="_blank"
              rel="noreferrer"
              title={sponsor.name}
              className={`flex items-center justify-center ${logoH}
                          p-4 rounded-xl border border-border bg-surface
                          hover:border-accent transition-colors`}
          >
            {sponsor.logo && (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full w-auto object-contain"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Sponsors({ sponsors, festival }: Props) {
  const sorted = [...sponsors].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-surface py-12" id="sponsorzy">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-start justify-between gap-4 mb-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink">
              Patroni i Sponsorzy {festival.edition} Festiwalu
            </h2>
            <p className="text-sm text-ink-muted mt-1">
              Dziękujemy wszystkim, którzy wspierają naszą działalność i pasję do lotnictwa
            </p>
          </div>
          <span className="shrink-0 text-sm font-bold text-accent border border-accent
                           px-4 py-1.5 rounded-full whitespace-nowrap">
            {sponsors.length} partnerów
          </span>
        </div>

        {TIERS.map(({ key, label, cols }) => (
          <SponsorTier
            key={key}
            label={label}
            sponsors={sorted.filter((s) => s.category === key && s.logo)}
            logoH={logoSize[key]}
            cols={cols}
          />
        ))}

      </div>
    </section>
  );
}
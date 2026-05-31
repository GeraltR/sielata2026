import type { Sponsor } from "../../types/Sponsor";

type Props = { sponsors: Sponsor[] };

const TIERS: { key: Sponsor['category']; label: string }[] = [
  { key: 'gold',    label: '🥇 Wsparcie organizacji' },
  { key: 'silver',  label: '🥈 Sponsorzy' },
  { key: 'partner', label: '🤝 Partnerzy' },
  { key: 'media',   label: '📺 Patronat medialny' },
];

const logoSize: Record<Sponsor['category'], string> = {
  gold:    'w-40 h-24',
  silver:  'w-32 h-20',
  partner: 'w-28 h-16',
  media:   'w-28 h-16',
};

type TierProps = {
  label: string;
  sponsors: Sponsor[];
  size: string;
};

function SponsorTier({ label, sponsors, size }: TierProps) {
  if (sponsors.length === 0) return null;

  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-widest
                    text-text-muted mb-4 flex items-center gap-3
                    after:content-[''] after:flex-1 after:h-px after:bg-border">
        {label}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {sponsors.map((sponsor) => (
          <a  key={sponsor.id}
              href={sponsor.url ?? "#"}
              target="_blank"
              rel="noreferrer"
              title={sponsor.name}
              className={`flex items-center justify-center ${size}
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

export default function Sponsors({ sponsors }: Props) {
  const sorted = [...sponsors].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-surface py-12">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-bold uppercase tracking-widest
                      text-text-muted mb-2">
          Patroni i Sponsorzy
        </p>
        <h2 className="font-heading text-3xl text-text mb-10">
          Dziękujemy za wsparcie
        </h2>

        {TIERS.map(({ key, label }) => (
          <SponsorTier
            key={key}
            label={label}
            sponsors={sorted.filter((s) => s.category === key && s.logo)}
            size={logoSize[key]}
          />
        ))}

      </div>
    </section>
  );
}
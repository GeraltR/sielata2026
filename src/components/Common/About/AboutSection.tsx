import type { Festival } from "../../../types/Festival";

const getPillars = (festival: Festival) => [
  {
    icon: '🤝',
    bg: 'bg-accent',
    title: 'Bez formalności, z pasją',
    body: 'Nieformalna grupa entuzjastów lotnictwa z Jaworzna i okolic. Modelarze, piloci, paralotniarze — wszyscy, których ciągnie niebo.',
  },
  {
    icon: '✈',
    bg: 'bg-accent',
    title: 'Lotnictwo w każdej postaci',
    body: 'Modelarstwo lotnicze i nie tylko, paralotniarstwo, szybownictwo, drony, historia polskich skrzydeł — przyjmujemy każdą formę miłości do latania.',
  },
  {
    icon: '🏆',
    bg: 'bg-navy',
    title: 'Festiwal Modelarski',
    body: `Coroczne święto modelarstwa na Śląsku — ${festival.edition} edycja w ${festival.year}. Setki uczestników, dziesiątki kategorii, wspaniała atmosfera.`,
  },
  {
    icon: '🌤',
    bg: 'bg-accent',
    title: 'Stacja Meteorologiczna',
    body: 'Prowadzimy własną stację pogodową, której dane są dostępne publicznie — szczególnie przydatne dla pilotów i paralotniarzy regionu.',
  },
];

const TAGS = [
  { icon: '✈', label: 'Modelarstwo lotnicze' },
  { icon: '🪂', label: 'Paralotniarstwo' },
  { icon: '🛩', label: 'Szybownictwo' },
  { icon: '🚁', label: 'Drony i FPV' },
  { icon: '📜', label: 'Historia lotnictwa' },
  { icon: '🏆', label: 'Zawody modelarskie', navy: true },
  { icon: '⛵', label: 'Modele okrętowe' },
  { icon: '🚂', label: 'Modele kolejowe' },
];

type Props = { festival: Festival };

export default function AboutSection({ festival }: Props) {
  return (
    <section className="py-16 bg-surface" id="o-nas">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Kim jesteśmy
        </span>

        <div className="grid md:grid-cols-2 gap-12 mt-8 items-start">

          {/* Lewa kolumna — filary */}
          <div className="flex flex-col gap-4">
            {getPillars(festival).map((p) => (
              <div key={p.title}
                className="flex items-start gap-4 bg-accent-light rounded-2xl p-5 border border-accent/10">
                <div className={`${p.bg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-ink mb-1">{p.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prawa kolumna — cytat + tekst + tagi */}
          <div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6">
              Łączymy wszystkich,<br />
              których ciągnie<br />
              <span className="text-accent">ku niebu</span>
            </h2>

            <p className="text-ink-muted leading-relaxed mb-4">
              SieLata to społeczność dla każdego, kto pasjonuje się lotnictwem — czy to buduje
              modele ze styroduru i balsy, steruje dronem, lata na paralotni nad Karpatami,
              albo po prostu fascynuje go historia polskiego lotnictwa wojskowego.
            </p>

            <p className="text-ink-muted leading-relaxed mb-8">
              Od 2008 roku organizujemy Festiwal Modelarski w Jaworznie, który stał się
              jednym z najważniejszych spotkań modelarzy na Śląsku. Co roku wybieramy
              motyw historyczny, który staje się inspiracją dla uczestników.
            </p>

            <div className="flex flex-wrap gap-3">
              {TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border
                    ${tag.navy
                      ? 'bg-navy-light border-navy/20 text-navy'
                      : 'bg-accent-light border-accent/20 text-ink'
                    }`}
                >
                  {tag.icon} {tag.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
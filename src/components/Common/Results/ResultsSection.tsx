import type { Festival } from "../../../types/Festival";
import type { GrandPrixe, RewardModel } from "../../../types/Results";
import { useResults } from "../../../hooks/useResults";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PLACE_ICONS: Record<string, string> = { "1": "🥇", "2": "🥈", "3": "🥉" };

function placeIcon(place: string) {
  return PLACE_ICONS[place] ?? "✦";
}

function GrandPrixGroup({ name, items }: { name: string; items: GrandPrixe[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="bg-navy px-4 py-2 text-ink-inverse font-bold text-sm uppercase tracking-wide flex items-center gap-2">
        🏆 {name}
      </div>
      {items.map((prixe, i) => (
        <div
          key={i}
          className={`grid grid-cols-2 gap-3 px-4 py-2 text-sm ${i % 2 ? "bg-accent-light" : "bg-surface"} border-t border-border`}
        >
          <span className="font-semibold text-ink">{prixe.imie} {prixe.nazwisko}</span>
          <span className="text-ink-muted">{prixe.modelName}</span>
        </div>
      ))}
    </div>
  );
}

function RewardGroup({ label, items }: { label: string; items: RewardModel[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="bg-accent px-4 py-2 text-ink-inverse font-bold text-sm uppercase tracking-wide">
        {label}
      </div>
      {items.map((user, i) => (
        <div
          key={i}
          className={`grid grid-cols-[auto_1fr_1fr] gap-x-3 px-4 py-2 text-sm items-center ${i % 2 ? "bg-accent-light" : "bg-surface"} border-t border-border`}
        >
          <span className="text-lg w-7 text-center">{placeIcon(user.place)}</span>
          <span className="font-semibold text-ink">{user.imie} {user.nazwisko}</span>
          <span className="text-ink-muted truncate">{user.nazwa}</span>
        </div>
      ))}
    </div>
  );
}

type Props = { festival: Festival };

export default function ResultsSection({ festival }: Props) {
  const resultsAvailable = festival.results_at && new Date() >= new Date(festival.results_at);
  const { grandPrixes, rewards, loading } = useResults();

  if (!resultsAvailable) return null;

  if (loading) {
    return (
      <section className="py-16 bg-background" id="wyniki">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <LoadingSpinner label="Ładowanie wyników…" />
        </div>
      </section>
    );
  }

  const gpGroups = grandPrixes.reduce<Record<string, GrandPrixe[]>>((acc, p) => {
    if (!acc[p.prix_name]) acc[p.prix_name] = [];
    acc[p.prix_name].push(p);
    return acc;
  }, {});

  const rwGroups = rewards.reduce<Record<string, { label: string; items: RewardModel[] }>>((acc, r) => {
    const material = r.klasa === "P" ? "Plastik" : "Karton";
    const key = `${r.klasa}|${r.symbol}|${r.categoryName}`;
    if (!acc[key]) acc[key] = { label: `[${material}] ${r.symbol} ${r.categoryName}`, items: [] };
    acc[key].items.push(r);
    return acc;
  }, {});

  return (
    <section className="py-16 bg-background" id="wyniki">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Wyniki
        </span>
        <h2 className="font-heading text-3xl font-bold text-ink mt-2 mb-10">
          Wyniki Festiwalu Modelarskiego {festival.year}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <div>
            <h3 className="font-heading text-xl font-bold text-ink mb-4 flex items-center gap-2">
              🏆 Grand Prix
            </h3>
            <div className="flex flex-col gap-4">
              {Object.entries(gpGroups).map(([name, items]) => (
                <GrandPrixGroup key={name} name={name} items={items} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-ink mb-4 flex items-center gap-2">
              🎖 Wyniki kategorii
            </h3>
            <div className="flex flex-col gap-4">
              {Object.entries(rwGroups).map(([key, { label, items }]) => (
                <RewardGroup key={key} label={label} items={items} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

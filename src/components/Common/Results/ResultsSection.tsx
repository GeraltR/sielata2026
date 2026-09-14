import type { Festival } from "../../../types/Festival";
import type { GrandPrixe, RewardModel } from "../../../types/Results";
import { useResults } from "../../../hooks/useResults";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PLACE_ORDER: Record<string, number> = { pierwsze: 1, drugie: 2, trzecie: 3, wyróżnienie: 4 };
const PLACE_COLOR: Record<string, string> = {
  pierwsze: "text-yellow-600",
  drugie: "text-gray-400",
  trzecie: "text-amber-700",
};

function placeColor(place: string) {
  return PLACE_COLOR[place] ?? "text-sky-600";
}

function PlaceMarker({ place }: { place: string }) {
  if (PLACE_COLOR[place]) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        className={placeColor(place)}
      >
        <path d="M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86m-4 1.8-1 .6-1-.6V3h2z" />
      </svg>
    );
  }
  return <span className={`text-lg leading-none ${placeColor(place)}`}>✦</span>;
}

function sortByPlaceThenName(a: RewardModel, b: RewardModel) {
  const placeDiff = (PLACE_ORDER[a.place] ?? 99) - (PLACE_ORDER[b.place] ?? 99);
  if (placeDiff !== 0) return placeDiff;
  return (
    (a.nazwisko || "").localeCompare(b.nazwisko || "", "pl") ||
    (a.imie || "").localeCompare(b.imie || "", "pl")
  );
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
          <span className="w-7 flex items-center justify-center">
            <PlaceMarker place={user.place} />
          </span>
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

  const rwGroups = rewards.reduce<Record<string, { label: string; grupa: string; items: RewardModel[] }>>((acc, r) => {
    const material = r.klasa === "P" ? "Plastik" : "Karton";
    const key = `${r.klasa}|${r.symbol}|${r.categoryName}`;
    if (!acc[key]) {
      acc[key] = {
        label: `[${material}] ${r.symbol} ${r.categoryName}`,
        grupa: r.grupa ?? key,
        items: [],
      };
    }
    acc[key].items.push(r);
    return acc;
  }, {});

  const sortedRwGroups = Object.entries(rwGroups).sort(([, a], [, b]) =>
    (a.grupa || "").localeCompare(b.grupa || "", "pl")
  );
  sortedRwGroups.forEach(([, group]) => group.items.sort(sortByPlaceThenName));

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
              {sortedRwGroups.map(([key, { label, items }]) => (
                <RewardGroup key={key} label={label} items={items} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

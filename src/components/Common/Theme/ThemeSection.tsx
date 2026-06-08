import type { Festival } from "../../../types/Festival";
import type { FestivalTopic } from "../../../types/FestivalTopic";
import { formatDateRange } from "../../../utils/date";
import ThemeGrid from "./ThemeGrid";

type Props = {
  festival: Festival;
  topics: FestivalTopic[];
  onOpenRules: () => void;
};

export default function ThemesSection({
  festival,
  topics,
  onOpenRules,
}: Props) {
  return (
    <section className="py-16 bg-background" id="tematyka">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-navy rounded-2xl p-8 mb-10 flex flex-wrap items-center gap-8">
          <span className="absolute right-8 top-1/2 -translate-y-1/2 font-heading text-[160px] font-black text-white/5 select-none leading-none pointer-events-none">
            {festival.edition}
          </span>

          <div className="flex flex-wrap items-center gap-4 md:gap-8 relative z-10">
            <span className="font-heading text-5xl md:text-7xl font-black text-white leading-none shrink-0">
              {festival.edition}
            </span>
            <div className="hidden md:block w-px h-16 bg-white/20 shrink-0" />
            <div>
              <h2 className="font-heading text-xl font-bold text-white mb-2">
                Festiwal Modelarski {festival.city} {festival.year}
              </h2>
              <div className="text-sm text-ink-inverse/70 mb-3">
                📅{" "}
                {formatDateRange(
                  festival.festival_start,
                  festival.festival_end,
                )}
                <span className="mx-2 opacity-40">·</span>
                📍 {festival.location ?? festival.city}
              </div>
              <button
                onClick={onOpenRules}
                className="text-accent font-semibold hover:underline"
              >
                Czytaj regulamin →
              </button>
            </div>
          </div>

          <a
            href="https://festiwal.sielata.com.pl/register"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 w-full md:w-auto md:shrink-0 bg-accent text-ink-inverse font-bold text-sm px-6 py-4 rounded-xl hover:bg-accent-dark transition-colors text-center whitespace-nowrap"
          >
            📝 Zarejestruj się →
          </a>
        </div>

        <ThemeGrid topics={topics} />
      </div>
    </section>
  );
}

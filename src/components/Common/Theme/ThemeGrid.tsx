import type { FestivalTopic } from "../../../types/FestivalTopic";
import { storageUrl } from "../../../utils/storage";

type Props = {
  topics: FestivalTopic[];
};

const subgridStyles = `
  @media (min-width: 768px) {
    .theme-row { grid-template-rows: auto 1fr; column-gap: 1.5rem; row-gap: 0; }
    .theme-card { display: grid !important; grid-template-rows: subgrid; grid-row: span 2; }
  }
`;

function TopicCard({ topic }: { topic: FestivalTopic }) {
  const img = storageUrl(topic.image);
  return (
    <div className="theme-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-colors flex flex-col">
      <div className="relative bg-navy p-6 overflow-hidden flex items-center">
        <span className="absolute right-2 top-1/2 -translate-y-1/2 font-heading text-[120px] font-black text-white/5 select-none leading-none pointer-events-none">
          {topic.anniversary_value}
        </span>
        <div className="relative z-10 flex items-start gap-4">
          <div className="shrink-0 text-left min-w-[80px]">
            <div className="font-heading text-5xl font-black text-white leading-none">
              {topic.anniversary_value}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink-inverse/50 mt-1">
              {topic.anniversary_period}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">
              {topic.title}
            </h3>
            {topic.description && (
              <p className="text-sm text-ink-inverse/70 leading-relaxed line-clamp-3">
                {topic.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="relative bg-surface flex flex-col" style={{ minHeight: "280px" }}>
        <div className="relative flex-1">
          {img && (
            <>
              <img
                src={img}
                alt={topic.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at center, transparent 40%, white 100%)" }}
              />
            </>
          )}
        </div>
        <div className="relative z-10 p-4">
          <a
            href="https://festiwal.sielata.com.pl"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center bg-navy text-ink-inverse font-bold text-sm px-4 py-3 rounded-xl hover:bg-navy-dark transition-colors"
          >
            🏆 Zgłoś model →
          </a>
        </div>
      </div>
    </div>
  );
}

const colClass: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

function TopicRow({ items, cols }: { items: FestivalTopic[]; cols: number }) {
  return (
    <div className={`theme-row grid grid-cols-1 gap-6 ${colClass[cols] ?? "md:grid-cols-2"}`}>
      {items.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}

export default function ThemeGrid({ topics }: Props) {
  const cols = [4, 3, 2].find((c) => topics.length % c === 0 || topics.length % c >= 2) ?? 2;
  const remainder = topics.length % cols;
  const topItems = remainder > 0 ? topics.slice(0, remainder) : [];
  const bottomItems = remainder > 0 ? topics.slice(remainder) : topics;

  const rows: FestivalTopic[][] = [];
  for (let i = 0; i < bottomItems.length; i += cols) {
    rows.push(bottomItems.slice(i, i + cols));
  }

  return (
    <>
      <style>{subgridStyles}</style>
      <div className="flex flex-col gap-6">
        {topItems.length > 0 && <TopicRow items={topItems} cols={topItems.length} />}
        {rows.map((row, i) => <TopicRow key={i} items={row} cols={cols} />)}
      </div>
    </>
  );
}
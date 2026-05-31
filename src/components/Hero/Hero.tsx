import { SITE_DESCRIPTION } from "../../config/site";
import type { Festival } from "../../types/Festival";
import type { FestivalTopic } from "../../types/FestivalTopic";
import { formatDateRange } from "../../utils/date";
import Badge from "../Common/Badge";

type HeroProps = {
  festival: Festival;
  topics: FestivalTopic[];
};

export default function Hero({ festival, topics }: HeroProps) {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge>SieLata · Jaworzno · od 2000</Badge>

            <h1 className="font-heading text-5xl lg:text-7xl text-ink leading-tight mt-5">
              Lotnictwo,<br />
              modelarstwo<br />
              <span className="text-accent">i wolność nieba</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-ink-muted">
              {SITE_DESCRIPTION}
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-navy rounded-2xl p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-5xl text-accent">
                  {festival.edition}
                </span>
                <span className="text-sm font-bold text-ink-inverse opacity-80 leading-tight">
                  Festiwal<br />Modelarski
                </span>
              </div>
              <div className="mt-1 text-sm text-ink-inverse opacity-60">
                {formatDateRange(festival.festival_start, festival.festival_end)}
              </div>
              <hr className="mt-4 border-white/15" />
              <div className="mt-3 text-xs font-bold tracking-widest uppercase text-accent">
                Rocznicowe tematy tej edycji ↓
              </div>
            </div>
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-surface rounded-xl border border-border p-4 flex items-center gap-4 hover:border-accent transition-colors"
              >
                <div className="text-center min-w-[64px] shrink-0">
                  <div className="font-heading text-3xl text-accent leading-none">
                    {topic.anniversary_value}
                  </div>
                  <div className="text-[10px] font-bold text-ink-muted uppercase tracking-wide mt-1">
                    {topic.anniversary_period}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-ink">
                    {topic.title}
                  </div>
                  {topic.subtitle && (
                    <div className="text-xs text-ink-muted mt-0.5">
                      {topic.subtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
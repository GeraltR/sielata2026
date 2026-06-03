import { NavLink } from "react-router-dom";
import { SITE_DESCRIPTION } from "../../config/site";
import type { Festival } from "../../types/Festival";
import type { FestivalTopic } from "../../types/FestivalTopic";
import { formatDateRange } from "../../utils/date";
import Badge from "../Common/Badge";
import { storageUrl } from "../../utils/storage";

type HeroProps = {
  festival: Festival;
  topics: FestivalTopic[];
};

const fadeClass: Record<string, string> = {
  none:   'hidden',
  short:  'bg-gradient-to-r from-surface via-surface/10 to-transparent',
  medium: 'bg-gradient-to-r from-surface via-surface/40 to-transparent',
  long:   'bg-gradient-to-r from-surface via-surface/80 to-transparent',
};

export default function Hero({ festival, topics }: HeroProps) {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge>SieLata · Jaworzno · od 2000</Badge>

            <h1 className="font-heading text-5xl lg:text-7xl text-ink leading-tight mt-5">
              Lotnictwo,
              <br />
              modelarstwo
              <br />
              <span className="text-accent">i wolność nieba</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-ink-muted">
              {SITE_DESCRIPTION}
            </p>
          </div>
          <div className="space-y-3">
            <NavLink
              to="/festiwal"
              className="relative overflow-hidden bg-navy rounded-2xl p-6 block hover:bg-navy-dark transition-colors"
            >
              {/* Watermark */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-heading text-9xl font-black text-white/5 select-none leading-none pointer-events-none">
                {festival.edition}
              </span>

              {/* Treść */}
              <div className="relative z-10">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-5xl text-accent">
                    {festival.edition}
                  </span>
                  <span className="text-sm font-bold text-ink-inverse opacity-80 leading-tight">
                    Festiwal
                    <br />
                    Modelarski
                  </span>
                </div>
                <div className="mt-3 font-bold text-ink-inverse">
                  {festival.city} {festival.year}
                </div>
                <div className="mt-2 text-sm text-ink-inverse/70 flex items-center gap-2">
                  📅{" "}
                  {formatDateRange(
                    festival.festival_start,
                    festival.festival_end,
                  )}
                  <span className="opacity-40">·</span>
                  📍 {festival.location ?? festival.city}
                </div>
                <hr className="mt-4 border-white/15" />
                <div className="mt-3 text-xs font-bold tracking-widest uppercase text-accent">
                  Rocznicowe tematy tej edycji ↓
                </div>
              </div>
            </NavLink>

            {topics.map((topic) => {
              const img = storageUrl(topic.image);
              return (
                <div
                  key={topic.id}
                  className="relative overflow-hidden bg-surface rounded-xl border border-border hover:border-accent transition-colors"
                >
                  {/* Obrazek po prawej */}
                  {img && (
                    <div
                      className="absolute right-0 top-0 bottom-0 w-1/2"
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize:
                          topic.image_position === "contain"
                            ? "contain"
                            : "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "white",
                      }}
                    >
                      <div className={`absolute inset-0 ${fadeClass[topic.fade_width ?? 'hidden']}`} />
                    </div>
                  )}

                  {/* Treść */}
                  <div className="relative z-10 p-4 flex items-center gap-4">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

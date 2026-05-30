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
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEWA KOLUMNA */}
          <div>
            <Badge>SieLata · Jaworzno · od 2000</Badge>

            <h1 className="heading">
              Lotnictwo,
              <br />
              modelarstwo
              <br />i wolność nieba
            </h1>

            <p className="mt-8 max-w-xl text-lg text-slate-300">
              {SITE_DESCRIPTION}
            </p>
          </div>

          {/* PRAWA KOLUMNA */}
          <div className="space-y-4">
            <div>
              <div className="text-5xl font-bold text-amber-400">
                {festival.edition}
              </div>

              <div className="mt-2 text-2xl font-semibold">
                Festiwal Modelarski
              </div>

              <div className="mt-3 text-slate-300">
                {formatDateRange(
                  festival.festival_start,
                  festival.festival_end,
                )}
              </div>
            </div>
            <div className="grid gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="rounded-xl bg-slate-800 border border-slate-700 p-5"
                >
                  <div className="text-3xl font-bold text-amber-400">
                    {topic.title}
                  </div>

                  {topic.subtitle && (
                    <div className="mt-2 text-lg font-medium">
                      {topic.subtitle}
                    </div>
                  )}

                  {topic.description && (
                    <div className="mt-2 text-sm text-slate-400">
                      {topic.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

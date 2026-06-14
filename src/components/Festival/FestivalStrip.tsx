import type { Festival } from "../../types/Festival";
import { formatDateRange } from "../../utils/date";

type FestivalStripProps = {
  festival: Festival;
};

export default function FestivalStrip({ festival }: FestivalStripProps) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-amber-400 font-bold">{festival.edition}</span>{" "}
          Festiwal Modelarski
        </div>

        <div className="text-slate-300">
          {formatDateRange(festival.festival_start, festival.festival_end)}
        </div>
      </div>
    </section>
  );
}

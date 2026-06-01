import type { Festival } from "../../types/Festival";
import WeatherTile from "./WeatherTile";
import FestivalTile from "./FestivalTile";
import DynamicTile from "./DynamicTile";
import ContactTile from "./ContactTile";

type Props = { festival: Festival };

export default function QuickBar({ festival }: Props) {
  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row min-h-20">
        <WeatherTile />
        <FestivalTile festival={festival} />
        <DynamicTile festival={festival} />
        <ContactTile />
      </div>
    </div>
  );
}
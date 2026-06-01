import QuickTile from "./QuickTile";
import type { Festival } from "../../types/Festival";

type Props = { festival: Festival };

export default function FestivalTile({ festival }: Props) {
  return (
    <QuickTile
      icon="🏆"
      iconBg="bg-navy-light"
      title="Festiwal Modelarski"
      description={`${festival.edition} edycja · ${festival.year}`}
      href="/festiwal"
    />
  );
}
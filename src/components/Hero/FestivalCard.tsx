import type { Festival } from "../../types/Festival";

type FestivalCardProps = {
  festival: Festival;
};

export default function FestivalCard({
  festival,
}: FestivalCardProps) {
  return (
    <div>
      <div>{festival.edition}</div>

      <div>Festiwal Modelarski</div>
    </div>
  );
}
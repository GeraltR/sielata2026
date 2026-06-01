import QuickTile from "./QuickTile";
import type { Festival } from "../../types/Festival";

type Props = { festival: Festival };

export default function DynamicTile({ festival }: Props) {
  const showResults = new Date() > new Date(festival.results_at);

  if (showResults) {
    return (
      <QuickTile
        icon="🏅"
        iconBg="bg-accent-light"
        title="Wyniki zawodów"
        description={`Laureaci i nagrodzeni ${festival.year}`}
        href="https://festiwal.sielata.com.pl/results"
        external
      />
    );
  }

  return (
    <QuickTile
      icon="📝"
      iconBg="bg-navy-light"
      title="Rejestracja"
      description={`Zgłoś model na ${festival.edition} edycję zawodów`}
      href="https://festiwal.sielata.com.pl/register"
      external
    />
  );
}
import Hero from "../components/Hero/Hero";
import Sponsors from "../components/Sponsors/Sponsors";

import { useFestival } from "../hooks/useFestival";
import { useTopics } from "../hooks/useTopics";
import { useSponsors } from "../hooks/useSponsors";
import MainLayout from "../layouts/MainLayout";
import HeroSponsorsMarquee from "../components/Hero/HeroSponsorsMarquee";
import FestivalStrip from "../components/Festival/FestivalStrip";
import QuickBar from "../components/QuickBar/QuickBar";

export default function HomePage() {
  const { festival, loading: festivalLoading } = useFestival();
  const { topics, loading: topicsLoading } = useTopics();
  const { sponsors, loading: sponsorsLoading } = useSponsors();

  if (festivalLoading || topicsLoading) {
    return <div>Ładowanie...</div>;
  }

  if (!festival) {
    return <div>Brak aktywnej edycji festiwalu.</div>;
  }

  return (
    <MainLayout>
      <Hero festival={festival} topics={topics} />

      <HeroSponsorsMarquee sponsors={sponsors} />

      <FestivalStrip festival={festival} />

      <QuickBar festival={festival} />

      <Sponsors sponsors={sponsors} />
    </MainLayout>
  );
}

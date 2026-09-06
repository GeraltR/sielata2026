import Hero from "../components/Hero/Hero";
import Sponsors from "../components/Sponsors/Sponsors";

import { useFestival } from "../hooks/useFestival";
import { useFestivalLifecycle } from "../hooks/useFestivalLifecycle";
import { useTopics } from "../hooks/useTopics";
import { useSponsors } from "../hooks/useSponsors";
import MainLayout from "../layouts/MainLayout";
import HeroSponsorsMarquee from "../components/Hero/HeroSponsorsMarquee";
import FestivalStrip from "../components/Festival/FestivalStrip";
import QuickBar from "../components/QuickBar/QuickBar";
import Footer from "../components/Footer/Footer";
import RodoSection from "../components/RODO/RodoSection";
import ContactSection from "../components/Contatct/ContactSection";
import AboutSection from "../components/Common/About/AboutSection";
import ThemesSection from "../components/Common/Theme/ThemeSection";
import ResultsSection from "../components/Common/Results/ResultsSection";
import { useState } from "react";
import RulesModal from "./RulesModal";
import LoadingSpinner from "../components/Common/LoadingSpinner/LoadingSpinner";

export default function HomePage() {
  const { festival, loading: festivalLoading } = useFestival();
  useFestivalLifecycle(festival);
  const { topics, loading: topicsLoading } = useTopics();
  const { sponsors } = useSponsors();
  const [rulesOpen, setRulesOpen] = useState(false);

  if (festivalLoading || topicsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner label="Ładowanie…" />
      </div>
    );
  }

  if (!festival) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-ink-muted text-sm">
          Brak aktywnej edycji festiwalu.
        </p>
      </div>
    );
  }

  const openRules = () => setRulesOpen(true);

  return (
    <MainLayout>
      <Hero festival={festival} topics={topics} onOpenRules={openRules} />

      <HeroSponsorsMarquee sponsors={sponsors} />

      <FestivalStrip festival={festival} />

      <QuickBar festival={festival} />

      <Sponsors sponsors={sponsors} festival={festival} />

      <ThemesSection
        festival={festival}
        topics={topics}
        onOpenRules={openRules}
      />

      <ResultsSection festival={festival} />

      <AboutSection festival={festival} />

      <ContactSection />

      <RodoSection />

      <Footer festival={festival} onOpenRules={openRules} />

      <RulesModal isOpen={rulesOpen} onClose={() => setRulesOpen(false)} />
    </MainLayout>
  );
}

import Hero from "../components/Hero/Hero";
import HeroTopics from "../components/Hero/HeroTopics";
import Sponsors from "../components/Sponsors/Sponsors";
import { useFestival } from "../hooks/useFestival";
import { useTopics } from "../hooks/useTopics";
import { useSponsors } from "../hooks/useSponsors";




export default function HomePage() {
    const { festival, loading } =
        useFestival();

    const { topics } =
        useTopics();

    const { sponsors } =
        useSponsors();

    if (loading || !festival) {
        return <div>Ładowanie...</div>;
    }

    return (
        <>
            <Hero festival={festival} />

            <HeroTopics topics={topics} />

            <Sponsors sponsors={sponsors} />
        </>
    );
}
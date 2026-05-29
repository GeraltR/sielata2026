import { useEffect, useState } from "react";

import { getCurrentFestival } from "../api/festival";
import { getCurrentTopics } from "../api/topics";
import { getSponsors } from "../api/sponsors";

import Hero from "../components/Hero/Hero";
import HeroTopics from "../components/Hero/HeroTopics";
import Sponsors from "../components/Sponsors/Sponsors";

import type { Festival } from "../types/Festival";
import type { FestivalTopic } from "../types/FestivalTopic";
import type { Sponsor } from "../types/Sponsor";


export default function HomePage() {
    const [festival, setFestival] = useState<Festival | null>(null);

    const [topics, setTopics] = useState<FestivalTopic[]>([]);

    const [sponsors, setSponsors] = useState<Sponsor[]>([]);    

    useEffect(() => {
        getCurrentFestival().then(setFestival);
        getCurrentTopics().then(setTopics);
        getSponsors().then(setSponsors);
    }, []);

    if (!festival) {
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
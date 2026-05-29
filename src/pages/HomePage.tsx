import { useEffect, useState } from "react";

import { getCurrentFestival } from "../api/festival";
import { getCurrentTopics } from "../api/topics";

import Hero from "../components/Hero/Hero";
import HeroTopics from "../components/Hero/HeroTopics";

import type { Festival } from "../types/Festival";
import type { FestivalTopic } from "../types/FestivalTopic";

export default function HomePage() {
    const [festival, setFestival] =
        useState<Festival | null>(null);

    const [topics, setTopics] =
        useState<FestivalTopic[]>([]);

    useEffect(() => {
        getCurrentFestival().then(setFestival);
        getCurrentTopics().then(setTopics);
    }, []);

    if (!festival) {
        return <div>Ładowanie...</div>;
    }

    return (
        <>
            <Hero
                edition={festival.edition}
                title={festival.title}
                city={festival.city}
                year={festival.year}
            />

            <HeroTopics topics={topics} />
        </>
    );
}
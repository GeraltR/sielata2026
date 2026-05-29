import { useEffect, useState } from "react";
import { getCurrentTopics } from "../api/topics";
import type { FestivalTopic } from "../types/FestivalTopic";

export function useTopics() {
    const [topics, setTopics] = useState<FestivalTopic[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentTopics()
            .then(setTopics)
            .finally(() => setLoading(false));
    }, []);

    return {
        topics,
        loading,
    };
}
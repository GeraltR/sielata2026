import type { FestivalTopic } from "../../types/FestivalTopic";

type HeroTopicsProps = {
    topics: FestivalTopic[];
};

export default function HeroTopics({
    topics,
}: HeroTopicsProps) {
    return (
        <div>
            {topics.map((topic) => (
                <div key={topic.id}>
                    <h3>{topic.title}</h3>

                    {topic.subtitle && (
                        <p>{topic.subtitle}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
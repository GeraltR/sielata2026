import type { Festival } from "../../types/Festival";
import type { FestivalTopic } from "../../types/FestivalTopic";

type HeroProps = {
    festival: Festival;
    topics: FestivalTopic[];
};

export default function Hero({ festival }: HeroProps) {
    return (
        <section>
            <h1>
                {festival.edition} {festival.title}
            </h1>

            <p>{festival.city}</p>
            <p>{festival.year}</p>
        </section>
    );
}
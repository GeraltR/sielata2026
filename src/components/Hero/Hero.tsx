import type { Festival } from "../../types/Festival";
import type { FestivalTopic } from "../../types/FestivalTopic";
import { formatDate } from "../../utils/date";

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
            <p>
                {`${formatDate(festival.festival_start, {day:"numeric"})} 
                  - 
                ${formatDate(festival.festival_end, {day: "numeric", month:"long", year:"numeric"})}`}
            </p>
        </section>
    );
}
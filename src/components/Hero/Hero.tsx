import type { Festival } from "../../types/Festival";

type HeroProps = {
    festival: Festival;
};

export default function Hero({
    festival,
}: HeroProps) {
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
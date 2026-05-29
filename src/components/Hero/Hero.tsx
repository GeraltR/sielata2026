type HeroProps = {
    edition: string;
    title: string;
    city: string;
    year: number;
};

export default function Hero({
    edition,
    title,
    city,
    year,
}: HeroProps) {
    return (
        <section>
            <h1>
                {edition} {title}
            </h1>

            <p>{city}</p>
            <p>{year}</p>
        </section>
    );
}
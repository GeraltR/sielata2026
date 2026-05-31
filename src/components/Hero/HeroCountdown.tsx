type HeroCountdownProps = {
    targetDate: string;
    label: string;
};

export default function HeroCountdown({targetDate, label}: HeroCountdownProps) {
    const now = new Date();
    const target = new Date(targetDate);

    const diff =
        target.getTime() - now.getTime();

    const days = Math.max(
        0,
        Math.floor(
            diff / (1000 * 60 * 60 * 24)
        )
    );

    return (
        <div>
            <strong>{label}</strong>
            <div>{days} dni</div>
        </div>
    );
}
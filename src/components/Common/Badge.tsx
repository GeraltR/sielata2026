type BadgeProps = {
    children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
    return (
        <div className="inline-flex items-center gap-2
                        bg-surface border border-accent
                        text-accent text-xs font-bold
                        px-4 py-1.5 rounded-full">
            {children}
        </div>
    );
}
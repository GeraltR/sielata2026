type BadgeProps = {
    children: React.ReactNode;
};

export default function Badge({children}: BadgeProps) {
    return (
        <div>
            {children}
        </div>
    );
}
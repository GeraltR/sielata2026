import Header from "../components/Header/Header";

type MainLayoutProps = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
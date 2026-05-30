import Header from "../components/Header/Header";

type MainLayoutProps = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>
        </>
    );
}
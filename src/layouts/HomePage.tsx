import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

type MainLayoutProps = {
    children: React.ReactNode;
};

export default function HomePage({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
}
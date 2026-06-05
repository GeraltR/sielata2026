import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <link rel="icon" type="image/png" href="/sielata_ico.png" />
        <title>SieLata · Lotnictwo i Modelarstwo Jaworzno</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </>
  );
}
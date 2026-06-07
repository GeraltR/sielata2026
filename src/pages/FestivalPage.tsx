import { useEffect } from "react";
import logo from "../assets/sielata_logo_53w.gif";
import LoadingSpinner from "../components/Common/LoadingSpinner/LoadingSpinner";

export default function FestivalPage() {
  useEffect(() => {
    window.location.replace("https://festiwal.sielata.com.pl");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
      <LoadingSpinner label="Przekierowanie do Festiwalu…" />
    </div>
  );
}
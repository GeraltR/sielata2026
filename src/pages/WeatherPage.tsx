import { useEffect } from "react";
import LoadingSpinner from "../components/Common/LoadingSpinner/LoadingSpinner";

export default function WeatherPage() {
  useEffect(() => {
    window.location.replace("https://pogoda.sielata.com.pl");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
      <LoadingSpinner label="Przekierowanie do pogody" />
    </div>
  );
}
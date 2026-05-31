import { useEffect } from "react";

export default function FestivalPage() {
  useEffect(() => {
    window.location.replace("https://festiwal.sielata.com.pl");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-text-muted">
        Przekierowanie do Festiwalu…
      </p>
    </div>
  );
}
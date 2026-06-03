import { useWeather } from '../../hooks/useWeather';

function windDirection(deg: number): string {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(deg / 45) % 8];
}

export default function WeatherTile() {
  const { weather, loading, error } = useWeather();

  return (
    <a
      href="https://pogoda.sielata.com.pl"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 px-6 py-5 md:flex-[1.4] border-b md:border-b-0 md:border-r border-border bg-accent-light hover:bg-orange-200 transition-colors"
    >
      <div>
        <div className="text-xs font-bold tracking-widest uppercase text-accent mb-1">
          🌤 Stacja Pogodowa · Jaworzno — na żywo
        </div>

        {loading && (
          <div className="text-sm text-ink-muted">Ładowanie...</div>
        )}

        {error && (
          <div className="text-sm text-ink-muted">Brak danych</div>
        )}

        {weather && (
          <>
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-4xl font-bold text-ink">
                {Math.round(weather.temp)}°
              </span>
              <span className="text-base text-ink-muted">C</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-navy mt-1">
              <span className="w-2 h-2 rounded-full bg-navy animate-pulse inline-block" />
              dane aktualizowane co 5 min
            </div>
          </>
        )}
      </div>

      {weather && (
        <div className="flex flex-col gap-0.5 ml-4">
          <div className="text-xs text-ink-muted">
            💧 Wilgotność: {weather.humidity}%
          </div>
          <div className="text-xs text-ink-muted">
            💨 Wiatr: {weather.wind} km/h {windDirection(weather.windDir)}
          </div>
          <div className="text-xs text-ink-muted">
            🌡 Ciśnienie: {Math.round(weather.pressure)} hPa
          </div>
        </div>
      )}

      <span className="ml-auto text-border text-lg">→</span>
    </a>
  );
}
import { useEffect, useRef } from "react";
import { getCurrentFestival } from "../api/festival";
import type { Festival } from "../types/Festival";

const KEY_REGISTRATION_START = "sielata.festival.registrationStart";
const KEY_RESULTS_REACHED = "sielata.festival.resultsReached";
const KEY_LAST_DAILY_CHECK = "sielata.festival.lastDailyCheckAt";

const HEARTBEAT_MS = 5 * 60 * 1000;
const DAILY_CHECK_MS = 24 * 60 * 60 * 1000;

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage niedostępny (np. tryb prywatny) - pomijamy
  }
}

function clearStorage(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

function isSameLocalDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDailyCheckDue(): boolean {
  const last = readStorage(KEY_LAST_DAILY_CHECK);
  if (!last) return true;
  return Date.now() - Number(last) >= DAILY_CHECK_MS;
}

function markDailyCheckDone() {
  writeStorage(KEY_LAST_DAILY_CHECK, Date.now().toString());
}

/**
 * Trzyma otwartą kartę w zgodzie z aktualnym cyklem festiwalu bez udziału
 * użytkownika: w fazie "rejestracja" wykrywa nadejście `results_at` i cicho
 * przeładowuje stronę, a w fazie "wyniki" wykrywa nową edycję (zmianę
 * `registration_start`) i wraca do fazy rejestracji.
 */
export function useFestivalLifecycle(festival: Festival | null) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!festival) return;

    if (!initialized.current) {
      initialized.current = true;
      if (!readStorage(KEY_REGISTRATION_START)) {
        writeStorage(KEY_REGISTRATION_START, festival.registration_start);
        const alreadyReached =
          !!festival.results_at && new Date() >= new Date(festival.results_at);
        writeStorage(KEY_RESULTS_REACHED, alreadyReached ? "1" : "0");
      }
    }

    const checkRegistrationPhase = () => {
      if (!festival.results_at) return;
      const now = new Date();
      const resultsAt = new Date(festival.results_at);
      const sameDay = isSameLocalDay(now, resultsAt);

      // W dniu wyników sprawdzamy przy każdym tyknięciu (co 5 min).
      // Przed tym dniem wystarczy raz dziennie.
      if (!sameDay && !isDailyCheckDue()) return;
      if (!sameDay) markDailyCheckDone();

      if (now >= resultsAt) {
        writeStorage(KEY_RESULTS_REACHED, "1");
        window.location.reload();
      }
    };

    const checkResultsPhase = async () => {
      if (!isDailyCheckDue()) return;
      markDailyCheckDone();
      try {
        const fresh = await getCurrentFestival();
        const stored = readStorage(KEY_REGISTRATION_START);
        const freshRegistrationStart = fresh?.registration_start || "";
        if (!freshRegistrationStart || freshRegistrationStart !== stored) {
          writeStorage(KEY_REGISTRATION_START, freshRegistrationStart);
          clearStorage(KEY_RESULTS_REACHED);
          window.location.reload();
        }
      } catch {
        // brak aktywnej edycji albo błąd sieci - spróbujemy przy kolejnym sprawdzeniu
      }
    };

    const tick = () => {
      const resultsReached = readStorage(KEY_RESULTS_REACHED) === "1";
      if (resultsReached) {
        checkResultsPhase();
      } else {
        checkRegistrationPhase();
      }
    };

    tick();
    const interval = setInterval(tick, HEARTBEAT_MS);
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") tick();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [festival]);
}

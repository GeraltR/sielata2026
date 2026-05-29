import { useEffect, useState } from "react";
import { getCurrentFestival } from "../api/festival";
import type { Festival } from "../types/Festival";

export function useFestival() {
    const [festival, setFestival] =
        useState<Festival | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        getCurrentFestival()
            .then(setFestival)
            .finally(() => setLoading(false));
    }, []);

    return {
        festival,
        loading,
    };
}
import { useEffect, useState } from "react";
import { getSponsors } from "../api/sponsors";
import type { Sponsor } from "../types/Sponsor";

export function useSponsors() {
    const [sponsors, setSponsor] = useState<Sponsor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSponsors()
            .then(setSponsor)
            .finally(() => setLoading(false));
    }, []);

    return {
        sponsors,
        loading,
    };
}
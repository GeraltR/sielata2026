import type { Sponsor } from "../types/Sponsor";

const API_URL = import.meta.env.VITE_API_URL;

export async function getSponsors(): Promise<Sponsor[]> {
    const response = await fetch(
        `${API_URL}/sponsors`
    );

    if (!response.ok) {
        throw new Error("Failed to load sponsors");
    }

    return response.json();
}
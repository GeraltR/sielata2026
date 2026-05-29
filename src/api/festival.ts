import type { Festival } from "../types/Festival";

const API_URL = import.meta.env.VITE_API_URL;

export async function getCurrentFestival(): Promise<Festival> {
    const response = await fetch(`${API_URL}/festival/current`);

    if (!response.ok) {
        throw new Error("Failed to load festival");
    }

    return response.json();
}
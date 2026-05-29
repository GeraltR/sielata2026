import type { FestivalTopic } from "../types/FestivalTopic";

const API_URL = import.meta.env.VITE_API_URL;

export async function getCurrentTopics(): Promise<FestivalTopic[]> {
    const response = await fetch(`${API_URL}/festival/current/topics`);

    if (!response.ok) {
        throw new Error("Failed to load topics");
    }

    return response.json();
}
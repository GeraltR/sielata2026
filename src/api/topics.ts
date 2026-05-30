import { apiGet } from "./client";
import type { FestivalTopic } from "../types/FestivalTopic";

export function getCurrentTopics() {
    return apiGet<FestivalTopic[]>("/festival/current/topics");
}
import { apiGet } from "./client";
import type { Sponsor } from "../types/Sponsor";

export function getSponsors() {
    return apiGet<Sponsor[]>("/sponsors");
}
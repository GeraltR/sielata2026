import { apiGet } from "./client";
import type { Festival } from "../types/Festival";

export function getCurrentFestival() {
    return apiGet<Festival>("/festival/current");
}
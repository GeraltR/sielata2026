import { apiGet } from "./client";
import type { GrandPrixe, RewardModel } from "../types/Results";

export function getResultGrandPrixes() {
  return apiGet<{ grandprixes: GrandPrixe[] }>("/resultgrandprixes/1");
}

export function getRewardModels() {
  return apiGet<{ rewards: RewardModel[]; isadmin: number }>("/rewardmodels/0");
}

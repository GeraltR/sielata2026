import { useEffect, useState } from "react";
import { getResultGrandPrixes, getRewardModels } from "../api/results";
import type { GrandPrixe, RewardModel } from "../types/Results";

export function useResults() {
  const [grandPrixes, setGrandPrixes] = useState<GrandPrixe[]>([]);
  const [rewards, setRewards] = useState<RewardModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getResultGrandPrixes(), getRewardModels()])
      .then(([gpData, rwData]) => {
        setGrandPrixes(gpData.grandprixes);
        setRewards(rwData.rewards);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { grandPrixes, rewards, loading };
}

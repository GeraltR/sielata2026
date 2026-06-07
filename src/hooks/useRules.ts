import { useState, useEffect } from 'react';
import type { Rules } from '../types/Rules';

const API_URL = import.meta.env.VITE_API_URL;


export function useRules() {
  const [rules, setRules] = useState<Rules | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/festival/current/rules`)
      .then(res => res.ok ? res.json() : null)
      .then(data => { setRules(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return { rules, loading };
}
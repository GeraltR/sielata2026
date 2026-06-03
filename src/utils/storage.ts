const STORAGE_URL = import.meta.env.VITE_STORAGE_URL as string;

export function storageUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${STORAGE_URL}/${path}`;
}
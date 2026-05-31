export interface Sponsor {
    id: number;
    name: string;
    logo: string | null;
    url: string | null;
    category: 'gold' | 'silver' | 'partner' | 'media';
    order: number;
}
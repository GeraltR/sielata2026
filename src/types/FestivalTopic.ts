export interface FestivalTopic {
    id: number;
    title: string;
    subtitle: string | null;
    description: string | null;
    image: string | null;
    order: number;
    anniversary_value: number;
    anniversary_period: string;
}
export interface FestivalTopic {
    id: number;
    title: string;
    subtitle: string | null;
    description: string | null;
    image: string | null;
    image_position: string | null;
    fade_width: string | null;
    order: number;
    anniversary_value: number;
    anniversary_period: string;
}
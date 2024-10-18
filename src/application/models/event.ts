export interface IEvent {
    name: string;
    price: number;
    photo: string;

    day: string;
    hour: string;
    type: string;

    creator: string;
    latitude?: string;
    vacancies?: number;
    longitude?: string;
    description?: string;
    manyRequests?: boolean;
};

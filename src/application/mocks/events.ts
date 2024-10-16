import { IEvent } from "../models/event";

export const events: IEvent[] = [
    {
        day: "2024-10-15",
        name: "Encontro virtual Literatura e Criatividade",
        hour: "14:00",
        type: "Virtual",
        photo: "https://cpp.org.br/wp-content/uploads/2021/06/ef97f6703c6ab99de2290ae8e2df39de-c0f.jpg",
        price: 0,
        creator: "João",
        latitude: "-23.550520",
        longitude: "-46.633308",
        vacancies: 20,
        description: "Vamos fazer um encontro virtual...",
        manyRequests: false,
    },
    {
        day: "2024-10-18",
        name: "Workshop de Tecnologia",
        hour: "10:00",
        type: "Presencial",
        photo: "https://cpp.org.br/wp-content/uploads/2021/06/ef97f6703c6ab99de2290ae8e2df39de-c0f.jpg",
        price: 50,
        creator: "Maria",
        latitude: "-23.550520",
        longitude: "-46.633308",
        vacancies: 15,
        description: "Discussão sobre as tendências de tecnologia...",
        manyRequests: true,
    },
];
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "../../components/modules/Card";
import { IEvent } from "../../../application/models/event";
import * as S from "./styles";

export function Home() {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const mockEvents: IEvent[] = [
      {
        day: "2024-10-15",
        name: "Encontro virtual Literatura e Criatividade",
        hour: "14:00",
        type: "Virtual",
        photo: "https://via.placeholder.com/150",
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
        photo: "https://via.placeholder.com/150",
        price: 50,
        creator: "Maria",
        latitude: "-23.550520",
        longitude: "-46.633308",
        vacancies: 15,
        description: "Discussão sobre as tendências de tecnologia...",
        manyRequests: true,
      },
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <div>
      <S.HomeContainer>
        {events.map((e) => (
          <Card key={e.name} event={e}/>
        ))}
      </S.HomeContainer>
      <Outlet />
    </div>
  );
}

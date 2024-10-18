import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/modules/Card";
import { IEvent } from "../../../application/models/event";
import * as S from "./styles";
import { CardEmpty } from "../../components/modules/CardEmpty";
// import { events as eventsMock } from "@/application/mocks/events";
import { eventsService } from "@/application/services/events";
import { useAuth } from "@/presentation/contexts/AuthContext";

export function Home() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    eventsService.listEventsByUserId(currentUser?.uid as string).then((res) => setEvents(res.data as unknown as IEvent[]))
  }, [currentUser?.uid]);

  const addNewEvent = () => {
    navigate("/form");
  };

  return (
    <div>
      <S.HomeContainer>
        <CardEmpty onClick={addNewEvent}>+</CardEmpty>

        {events?.map((e) => (
          <Card key={e.name} event={e}/>
        ))}
      </S.HomeContainer>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/modules/Card";
import { IEvent } from "../../../application/models/event";
import * as S from "./styles";
import { CardEmpty } from "../../components/modules/CardEmpty";
import { eventsService } from "@/application/services/events";
import { useAuth } from "@/presentation/contexts/AuthContext";
import { Modal } from "@/presentation/components/modules/Modal/Modal";
import { EditEvent } from "@/presentation/components/features/EditEvent/EditEvent";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function Home() {
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => eventsService.listEventsByUserId(currentUser?.uid as string),
  })

  const events = data?.data;

  const queryClient = useQueryClient();

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [eventSelected, setEventSelected] = useState<IEvent | null>(null);

  const handleOpenModal = (event: IEvent) => {
    setOpenModal(true);
    setEventSelected(event);
  }

  const handleConfirmEditEvent = async (event: IEvent) => {
    await eventsService.updateEvent(event);
    queryClient.invalidateQueries({ queryKey: ['repoData'] })
  }

  const addNewEvent = () => {
    navigate("/form");
  };

  return (
    <div>
      <Modal isOpen={openModal} >
        {eventSelected && <EditEvent {...eventSelected} onConfirm={handleConfirmEditEvent} onClose={() => setOpenModal(false)} />}
      </Modal>
      <S.HomeContainer>
        <CardEmpty onClick={addNewEvent}>+</CardEmpty>

        {events?.map((event) => (
          <Card key={event.name} event={event} onClick={() => handleOpenModal(event)} />
        ))}
      </S.HomeContainer>
    </div>
  );
}

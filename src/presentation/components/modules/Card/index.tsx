import { IEvent } from "../../../../application/models/event";
import { Button } from "../../elements/Button";
import * as S from "./styles";
import { Paragraph } from "../../elements/Paragraph";

interface CardProps {
  event: IEvent;
  onClick: (...props: unknown[]) => void;
}

export const Card = ({ event, onClick }: CardProps) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <img src={event.photo} alt={event.name} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <Paragraph className="title">{event.name}</Paragraph>
        <Paragraph className="description">{event.description}</Paragraph>
      </S.DescriptionContainer>
      <S.ActionsContainer>
        <Button onClick={onClick}>Editar</Button>
      </S.ActionsContainer>
    </S.CardContainer>
  );
};

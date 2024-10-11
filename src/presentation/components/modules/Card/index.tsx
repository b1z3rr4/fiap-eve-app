import { IEvent } from "../../../../application/models/event";
import * as S from "./styles";

interface CardProps {
    event: IEvent;
}

export const Card = ({ event }: CardProps) => {
    return(
        <S.CardContainer>
            <img src={event.photo} alt={event.name}/>
            <S.CardTitle>{event.name}</S.CardTitle>
            <S.CardDescription>{event.description}</S.CardDescription>
        </S.CardContainer>
    )
};
import { IEvent } from "../../../../application/models/event";
import * as S from "./styles";

interface CardProps {
    event: IEvent;
}

export const Card = ({ event }: CardProps) => {
    return(
        <S.CardContainer>
            <p>Meu card</p>
        </S.CardContainer>
    )
};
import { useNavigate } from "react-router-dom";
import { IEvent } from "../../../../application/models/event";
import { Button } from "../../elements/Button";
import * as S from "./styles";

interface CardProps {
    event: IEvent;
}

export const Card = ({ event }: CardProps) => {
    const navigate = useNavigate();

    return(
        <S.CardContainer>
            <img src={event.photo} alt={event.name}/>
            <S.CardTitle>{event.name}</S.CardTitle>
            <S.CardDescription>{event.description}</S.CardDescription>
            <Button onClick={() => navigate(`/edit/1`)}>Editar</Button>
        </S.CardContainer>
    )
};
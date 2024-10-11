import { PropsWithChildren } from 'react';
import * as S from "./styles";

export const CardEmpty = ({
    children,
    onClick
}: PropsWithChildren<{ onClick: () => void }>) => {
    return <S.CardContainer onClick={onClick}>{children}</S.CardContainer>
};
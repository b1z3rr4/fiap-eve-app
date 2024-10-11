import { PropsWithChildren } from 'react';
import * as S from './styles';

export const Button = ({
    children,
    ...props
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => (
    <S.ButtonContainer {...props}>{children}</S.ButtonContainer>
);

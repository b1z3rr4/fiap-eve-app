import { PropsWithChildren } from 'react';
import * as S from './styles';

export function Modal({ isOpen, children }: PropsWithChildren<{ isOpen: boolean }>) {
    
    return (
        <S.Dialog open={isOpen}>
            {children}
        </S.Dialog>
    );
}

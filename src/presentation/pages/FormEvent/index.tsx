import { UploadImage } from '@/presentation/components/features/UploadImage';
import * as S from './styles';

export function FormEvent() {

    return (
        <S.FormContainer>
            <h1 style={{ color: '#333'}}>Bem vindo(a) a pagina de formulario!</h1>

            <UploadImage />
        </S.FormContainer>
    )
}

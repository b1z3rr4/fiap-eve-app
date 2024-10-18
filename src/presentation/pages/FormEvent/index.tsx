import { UploadImage } from '@/presentation/components/features/UploadImage';
import * as S from './styles';
import { Button } from '@/presentation/components/elements/Button';
import { useForm } from 'react-hook-form';
import { storageFirebaseService } from '@/application/services/storageFirebase';
import { InputForm } from '@/presentation/components/modules/InputForm';


export const UPLOAD_NAME = 'fileUpload';

export function FormEvent() {
    const {
        handleSubmit,
        // watch,
        setValue
    } = useForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSendEvent = async (data: any) => {
        try {
            const upload = await storageFirebaseService.uploadImage(data[UPLOAD_NAME]);

            console.log(upload)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <S.FormContainer>
            <form onSubmit={handleSubmit(handleSendEvent)}>
                <div>
                    <UploadImage setValue={setValue} />
                </div>
                <div>
                    <InputForm label='Titulo' />
                </div>

                <div>
                    <InputForm label='Valor' />
                </div>

                <div>
                    <InputForm label='Descrição' type='textarea' />
                </div>

                <div>
                    <InputForm label='Localização' />
                </div>

                <div>
                    <InputForm label='Vagas' />
                </div>
                <div>
                    <Button type='submit'>Salvar</Button>
                </div>
            </form>
        </S.FormContainer>
    )
}

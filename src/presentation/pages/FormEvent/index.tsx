import { UploadImage } from "@/presentation/components/features/UploadImage";
import * as S from "./styles";
import { Button } from "@/presentation/components/elements/Button";
import { useForm } from "react-hook-form";
import { storageFirebaseService } from "@/application/services/storageFirebase";
import { InputForm } from "@/presentation/components/modules/InputForm";
import { useAuth } from "@/presentation/contexts/AuthContext";
import { eventsService } from "@/application/services/events";
import { useToast } from "@/presentation/hooks/useToast";
import { useHistory } from "@/application/libs/history";

export const UPLOAD_NAME = "fileUpload";

export function FormEvent() {
  const { handleSubmit, watch, setValue } = useForm();
  const { currentUser } = useAuth();

  const { notifySuccess, notifyError } = useToast();
  const { navigate } = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSendEvent = async (data: any) => {
    try {
        const upload = await storageFirebaseService.uploadImage(
          data[UPLOAD_NAME]
        );
        const event = {
            photo: upload.downloadURL,
            creator: currentUser?.uid,
            ...data,
        }

        await eventsService.createEvent(event);

        notifySuccess('Evento criado com sucesso!');
        navigate('/home');
    } catch (error) {
        console.error(error);
        notifyError('Erro ao criar evento.')
    }
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(handleSendEvent)}>
        <div>
          <UploadImage setValue={setValue} />
        </div>
        <div>
          <InputForm
            label="Titulo"
            name="name"
            value={watch("name")}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Dia"
            name="day"
            type="date"
            defaultValue="full"
            value={watch("day")}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Hora"
            name="hour"
            type="time"
            defaultValue="full"
            value={watch("hour")}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </div>

        <div>
            <S.Select name="type" onChange={(e) => setValue(e.target.name, e.target.value)}>
                <option value="online">Online</option>
                <option value="presencial">Presencial</option>
            </S.Select>
        </div>

        <div>
          <InputForm
            label="Valor"
            name="price"
            value={watch("price")}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Descrição"
            type="textarea"
            name="description"
            value={watch("description")}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Localização"
            name="address"
            value={watch("address")}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Vagas"
            name="slots"
            type="number"
            value={watch("slots")}
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </S.FormContainer>
  );
}

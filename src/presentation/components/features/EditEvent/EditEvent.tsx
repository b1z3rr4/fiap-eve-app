import { UploadImage } from "@/presentation/components/features/UploadImage";
import * as S from "./styles";
import { Button } from "@/presentation/components/elements/Button";
import { useForm } from "react-hook-form";
import { storageFirebaseService } from "@/application/services/storageFirebase";
import { InputForm } from "@/presentation/components/modules/InputForm";
import { useAuth } from "@/presentation/contexts/AuthContext";
import { useToast } from "@/presentation/hooks/useToast";
import { IEvent } from "@/application/models/event";

export const UPLOAD_NAME = "fileUpload";

type Options =
  | "fileUpload"
  | "day"
  | "hour"
  | "name"
  | "price"
  | "type"
  | "description"
  | "slots";

export function EditEvent({
  id,
  day,
  hour,
  name,
  photo,
  price,
  type,
  description,
  vacancies,
  onClose,
  onConfirm
}: IEvent & { onClose: () => void, onConfirm: (event: IEvent) => Promise<void> }) {
  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      day,
      hour,
      name,
      price,
      type,
      description,
      slots: vacancies,
      fileUpload: photo as unknown as File,
      address: "",
    },
  });

  const { currentUser } = useAuth();

  const { notifySuccess, notifyError } = useToast();

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
        id
      };

      await onConfirm(event);

      notifySuccess("Evento atualizado com sucesso!");
      onClose();
    } catch (error) {
      console.error(error);
      notifyError("Erro ao criar evento.");
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
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Dia"
            name="day"
            type="date"
            defaultValue="full"
            value={watch("day")}
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Hora"
            name="hour"
            type="time"
            defaultValue="full"
            value={watch("hour")}
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          />
        </div>

        <div>
          <S.Select
            name="type"
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          >
            <option value="online">Online</option>
            <option value="presencial">Presencial</option>
          </S.Select>
        </div>

        <div>
          <InputForm
            label="Valor"
            name="price"
            value={watch("price")}
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Descrição"
            type="textarea"
            name="description"
            value={watch("description")}
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Localização"
            name="address"
            value={watch("address")}
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          />
        </div>

        <div>
          <InputForm
            label="Vagas"
            name="slots"
            type="number"
            value={watch("slots")}
            onChange={(e) => setValue(e.target.name as Options, e.target.value)}
          />
        </div>

        <div>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </S.FormContainer>
  );
}

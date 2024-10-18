import { useRef, useState } from "react";
import * as S from './styles';
import addImage from '@/application/assets/addImage.png';
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { UPLOAD_NAME } from "@/presentation/pages/FormEvent";

export function UploadImage({ setValue }: {
    setValue: UseFormSetValue<FieldValues>
}) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setValue(UPLOAD_NAME, selectedFile);

      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result as string);
      };

      // url -> que indica a localizacao em memória dessa imagem
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleClickOnImage = () => {
    inputFileRef.current?.click();
  }


  return (
    <>
      <input
        type="file"
        name={UPLOAD_NAME}
        ref={inputFileRef}
        onChange={handleChangeFile}
        style={{ display: 'none' }}
        accept="image/png, image/jpeg, image/jpg"
      />
      {!file && <S.ImageUploadButton src={addImage} onClick={handleClickOnImage} />}
      {preview && (
        <S.ImageContainer>
          <S.Image src={preview} />
        </S.ImageContainer>
      )}
    </>
  );
}

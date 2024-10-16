import * as S from "./styles";

// Eu quero todas as props (atributos) do elemento html <input>
// HTMLProps<HTMLInputElement>

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ placeholder, type = "text", ...props }: InputProps) => (
  <S.InputContainer type={type} placeholder={placeholder} {...props} />
);

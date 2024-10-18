import * as S from "./styles";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = ({ placeholder, ...props }: TextareaProps) => (
  <S.TextareaContainer placeholder={placeholder} {...props} />
);

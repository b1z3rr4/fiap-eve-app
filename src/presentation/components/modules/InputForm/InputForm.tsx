import { InputProps } from "../../elements/Input";
import { TextareaProps } from "../../elements/TextArea";
import * as S from "./styles";

interface InputFormProps extends InputProps {
  label?: string;
  error?: string;
}

interface TextAreaFormProps extends TextareaProps {
  label?: string;
  error?: string;
  defaultValue?: string;
}

export const InputForm = ({
  label,
  error,
  type = "text",
  ...props
}: InputFormProps & TextAreaFormProps) => {
  console.log(props);
  return (
    <S.FieldSetStyle>
      <S.LabelStyle>
        {type === "textarea" ? (
          <S.TextAreaStyle
            className={props.value ? "fulfilled" : props.className}
            {...props}
          />
        ) : (
          <S.InputStyle
            className={props.value || props.defaultValue ? "fulfilled" : props.className}
            type={type}
            {...props}
          />
        )}

        <S.SpanStyle type={type}>{label}</S.SpanStyle>
      </S.LabelStyle>
      {error && <S.LabelError>{error}</S.LabelError>}
    </S.FieldSetStyle>
  );
};

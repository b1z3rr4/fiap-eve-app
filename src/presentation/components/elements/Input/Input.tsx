import { HTMLProps } from "react";
import * as S from "./styles";

// Eu quero todas as props (atributos) do elemento html <input>
// HTMLProps<HTMLInputElement>

export function Input({
  id,
  step,
  size,
  type = "string",
  label,
  value,
  checked,
  pattern,
  tabIndex,
  onChange,
  disabled,
  maxLength,
  placeholder,
  defaultValue,
}: HTMLProps<HTMLInputElement>) {
  return (
    <S.LabelStyle htmlFor={id}>
      <S.InputStyle
        id={id}
        step={step}
        size={size}
        type={type}
        value={value}
        pattern={pattern}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        tabIndex={tabIndex}
        maxLength={maxLength}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <S.SpanStyle type={type}>{label}</S.SpanStyle>
    </S.LabelStyle>
  );
}

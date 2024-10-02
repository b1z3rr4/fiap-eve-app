import { HTMLProps } from "react";

// Eu quero todas as props (atributos) do elemento html <input>
// HTMLProps<HTMLInputElement>

export function Input({
  id,
  step,
  size,
  type,
  label,
  placeholder,
  maxLength,
  onChange,
  defaultValue,
  disabled,
  value,
  tabIndex,
  checked,
  pattern,
}: HTMLProps<HTMLInputElement>) {
  return (
    <label htmlFor={id}>
      {label}
      <input
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
    </label>
  );
}

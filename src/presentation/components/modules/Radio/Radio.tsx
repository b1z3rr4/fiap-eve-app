import { Input } from "../../elements/Input";

export function Radio({
  value,
  label,
  checked,
  onChange,
}: {
  label: string;
  checked?: boolean;
  value: string | number;
  onChange?: (value: string | number) => void;
}) {
  const id = value + "radio-button";

  const handleChange = () => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Input
      id={id}
      type="radio"
      label={label}
      checked={checked}
      onChange={handleChange}
    />
  );
}

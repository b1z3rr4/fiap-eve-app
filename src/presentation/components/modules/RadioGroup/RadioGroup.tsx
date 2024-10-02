import React, { ChangeEvent, PropsWithChildren } from "react";

interface RadioGroupProps {
  name: string;
  value: string | number;
  onChange: (value: string) => void;
}

interface RadioProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

// Reaproveitavel
// De facil entendimento
export function RadioGroup({
  name,
  value,
  onChange,
  children,
}: PropsWithChildren<RadioGroupProps>) {
  return (
    <div>
      {React.Children.map(children, (child) => {

        if (React.isValidElement<RadioProps>(child)) {
          return React.cloneElement<RadioProps>(child, {
            checked: value === child.props.value,
            onChange: () => onChange(child.props.value),
            name: name,
          });
        }

        return child;
      })}
    </div>
  );
}

export function Input({
    size,
    type,
    placeholder,
    maxLength, 
    onChange, 
    defaultValue,
    disabled,
    value,
    tabIndex
}: {
    type: string,
    size?: number,
    tabIndex?: number;
    maxLength?: number,
    disabled?: boolean,
    placeholder?: string,
    value?: string | number | readonly string[] | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    defaultValue?: string | number | readonly string[] | undefined;
}) {
    return (
        <input size={size} value={value} type={type} placeholder={placeholder} maxLength={maxLength} onChange={onChange} defaultValue={defaultValue} disabled={disabled} tabIndex={tabIndex} />
    )
}
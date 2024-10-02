import { PropsWithChildren } from "react";

export function Select({ children, onChange, value, id, label }: PropsWithChildren<{
    id: string;
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}>) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select onChange={onChange} value={value} id={id}>
                {children}
            </select>
        </div>
    )
}

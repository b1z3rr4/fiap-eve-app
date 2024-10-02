import { PropsWithChildren } from "react";

export function Option({ children, value }: PropsWithChildren<{ value: string | number }>) {
    return (
        <option value={value}>{children}</option>
    )
}
import { PropsWithChildren } from "react";

// O nome precisa ser 'children'
// PropsWithChildren o tipo que o react disponibiliza para componentes que vao receber um componente (ou varios) como filho.
export function Form({ children, onSubmit }: PropsWithChildren<{ onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }>) {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

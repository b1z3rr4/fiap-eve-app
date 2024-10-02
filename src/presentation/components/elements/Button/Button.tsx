// React Fragment
// Dumb Components
// Tipagem direta
export function Button({ label, onClick, disabled = false, type }: {
    label: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void; // usado para quando a função não retorna nada.
    disabled?: boolean;
}) {
    return (
        <button onClick={onClick} disabled={disabled} type={type}>{label}</button>
    );
}


// export function Button2(props: {
//     label: string;
//     onClick: () => void; // usado para quando a função não retorna nada.
//     disabled?: boolean;
// }) {
//     return (
//         <button onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
//     );
// }

// React Fragment
// Dumb Components
// Tipagem direta
export function Button({ label, onClick }: {
    label: string;
    onClick: () => void; // usado para quando a função não retorna nada.
}) {
    return (
        <button onClick={onClick}>{label}</button>
    );
}

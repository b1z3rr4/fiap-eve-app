import { useNavigate } from "react-router-dom";
import { Button } from "../../components/elements/Button";

export function FormEvent() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bem vindo(a) a pagina de formulario!</h1>
            <Button label="Voltar" onClick={() => {
                navigate(-1); // historia de acessos do usuario e ta voltando uma pagina
            }}/>
        </div>
    )
}

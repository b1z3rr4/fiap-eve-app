import { Button } from "../../components/elements/Button";
import { useHistory } from "../../../application/libs/history";
import { Forms } from "../../components/features/Forms";

export function FormEvent() {
    const { goBack, navigate } = useHistory();

    return (
        <div>
            <h1>Bem vindo(a) a pagina de formulario!</h1>
            <Forms />
            <Button label="Voltar" onClick={() => {
                goBack(); // historia de acessos do usuario e ta voltando uma pagina
            }}/>

            <Button label="Ir para login" onClick={() => {
                navigate('/login');
            }}/>
        </div>
    )
}

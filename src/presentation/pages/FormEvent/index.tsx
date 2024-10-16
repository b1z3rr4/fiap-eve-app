import { Button } from "../../components/elements/Button";
import { useHistory } from "../../../application/libs/history";
import { Forms } from "../../components/features/Forms";

export function FormEvent() {
    const { goBack, navigate } = useHistory();

    return (
        <div>
            <h1>Bem vindo(a) a pagina de formulario!</h1>
            <Forms />
            <Button onClick={() => {
                goBack(); // historia de acessos do usuario e ta voltando uma pagina
            }}>Voltar</Button>

            <Button onClick={() => {
                navigate('/login');
            }}>Ir para login</Button>
        </div>
    )
}

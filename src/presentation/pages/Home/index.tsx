import { Outlet } from "react-router-dom";
import { Button } from "../../components/elements/Button";
import { useHistory } from "../../../application/libs/history";

export function Home() {
  const { navigate } = useHistory();

  return (
    <div>
      <h1>Bem vindo(a) a Home!</h1>
      <Button
        label="Ir para form"
        onClick={() => {
            // /form -> atualizar a string toda
            // form -> apenas adicionar a nova string no caminho atual
          navigate('form');
        }}
      />
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { Button } from "../../components/elements/Button";
import { useHistory } from "../../../application/libs/history";
import { Logo, Logo2, Logo3 } from "../../components/modules/Logo/Logo";

export function Home() {
  const { navigate } = useHistory();

  return (
    <div>
      <Logo />
      <Logo2 />
      <Logo3 />
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

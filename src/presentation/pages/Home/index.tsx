import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../components/elements/Button";

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem vindo(a) a Home!</h1>
      <Button
        label="Ir para form"
        onClick={() => {
          navigate(1);
        }}
      />
      <Outlet />
    </div>
  );
}

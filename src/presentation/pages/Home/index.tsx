import { Outlet } from "react-router-dom";
import { Card } from "../../components/modules/Card";

export function Home() {

  return (
    <div>
      <Card></Card>
      <Outlet />
    </div>
  );
}

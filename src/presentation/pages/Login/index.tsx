import { Button } from "@/presentation/components/elements/Button";
import { Input } from "@/presentation/components/elements/Input";
import { Logo } from "@/presentation/components/modules/Logo/Logo";
import * as S from './styles';
import { useAuth } from "@/presentation/contexts/AuthContext";
import { useState } from "react";

export function Login() {
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            login(email, password);
        }
    }

    return (
        <S.Container>
        <S.ContainerLogin>
          <Logo />
          <S.ContainerInput>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </S.ContainerInput>
          <Button onClick={handleLogin}>Entrar</Button>
        </S.ContainerLogin>
      </S.Container>
    )
}

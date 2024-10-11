import { Logo } from "@/presentation/components/modules/Logo/Logo";
// caminho relativo -> ao arquivo/pasta onde eu estou
import * as S from "./styles";

export function AppBar() {
    return (
        <S.AppBarContainer>
            <Logo />
        </S.AppBarContainer>
    )
}
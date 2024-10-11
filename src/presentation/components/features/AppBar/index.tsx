import { Logo } from "../../modules/Logo/Logo";
import * as S from "./styles";

export function AppBar() {
    return (
        <S.AppBarContainer>
            <Logo />
        </S.AppBarContainer>
    )
}
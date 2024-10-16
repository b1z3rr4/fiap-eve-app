import { Logo } from "@/presentation/components/modules/Logo/Logo";
import * as S from "./styles";
import { DropDown } from "../../modules/DropDown";
import { Paragraph } from "../../elements/Paragraph";
import { useAuth } from "@/presentation/contexts/AuthContext";
import { getInitials } from "@/application/utils/getInitials";
import { useState } from "react";

export function AppBar() {
  const { currentUser, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  if (!currentUser) return;

  const displayName = currentUser?.email?.split("@")[0] as string;

  const initials = getInitials(displayName);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    logout();
  };

  return (
    <S.AppBarContainer>
      <S.LinkHome to="/">
        <Logo size="sm" />
      </S.LinkHome>
      <DropDown.Root>
        <DropDown.Trigger onClick={toggleDropdown}>
          <S.MenuContainer>
            <Paragraph>{displayName}</Paragraph>
            <S.ProfileContainer>
              <S.ProfileImg src={currentUser?.photoURL || ""}>
                {!currentUser?.photoURL && initials}
              </S.ProfileImg>
            </S.ProfileContainer>
          </S.MenuContainer>
        </DropDown.Trigger>
        <DropDown.Menu isOpen={isOpen}>
          <DropDown.Item onClick={handleItemClick}>Sair</DropDown.Item>
        </DropDown.Menu>
      </DropDown.Root>
    </S.AppBarContainer>
  );
}

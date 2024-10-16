import { PropsWithChildren } from "react";
import * as S from "./styles";

const DropdownContainer = ({ children }: PropsWithChildren) => (
  <S.DropdownContainer>{children}</S.DropdownContainer>
);

const DropdownButton = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick: () => void }>) => (
  <S.DropdownButton onClick={onClick}>{children}</S.DropdownButton>
);

const DropdownMenu = ({
  children,
  isOpen,
}: PropsWithChildren<{ isOpen: boolean }>) => (
  <S.DropdownMenu isOpen={isOpen}>{children}</S.DropdownMenu>
);

const DropdownItem = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick: () => void }>) => (
  <S.DropdownItem onClick={onClick}>{children}</S.DropdownItem>
);

export const DropDown = {
  Root: DropdownContainer,
  Trigger: DropdownButton,
  Menu: DropdownMenu,
  Item: DropdownItem,
};

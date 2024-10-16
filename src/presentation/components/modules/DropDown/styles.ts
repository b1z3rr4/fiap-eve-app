import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  all: unset;
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  z-index: 1;
  padding: 12px 0;
  margin-top: 4px;
  min-width: 140px;
  position: absolute;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.surfaceColor};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.robotoFont};

  &:hover {
      background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

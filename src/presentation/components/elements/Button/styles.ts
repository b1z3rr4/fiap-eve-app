import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  color: ${({ theme }) => theme.surfaceColor};
  font-size: ${({ theme }) => theme.poppinsSize};
  font-family: ${({ theme }) => theme.poppinsFont};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;
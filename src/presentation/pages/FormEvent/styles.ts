import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 60px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius};
`;


export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-family: ${({ theme }) => theme.robotoFont};
  font-size: ${({ theme }) => theme.robotoSize};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.surfaceColor};
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
  `;

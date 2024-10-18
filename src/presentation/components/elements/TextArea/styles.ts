import styled from 'styled-components';

export const TextareaContainer = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.robotoSize};
  font-family: ${({ theme }) => theme.robotoFont};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.surfaceColor};
  color: ${({ theme }) => theme.textColor};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.mutedTextColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

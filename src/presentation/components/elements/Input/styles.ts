import { styling } from "../../../../application/libs/styling";

export const InputContainer = styling.input`
  width: 100%;
  padding: 10px;
  font-family: ${({ theme }) => theme.robotoFont};
  font-size: ${({ theme }) => theme.robotoSize};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.surfaceColor};
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.mutedTextColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;
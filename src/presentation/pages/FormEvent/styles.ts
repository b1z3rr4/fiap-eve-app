import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 60px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

import styled from "styled-components";

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.robotoFont};
`;

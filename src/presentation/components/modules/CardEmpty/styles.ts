import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    padding: 30px;
    cursor: pointer;
    font-size: 64px;
    font-weight: 50;
    max-width: 250px;
    max-height: 450px;
    min-height: 300px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.borderColor};
    font-family: ${({ theme }) => theme.robotoFont};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px dashed ${({ theme }) => theme.mutedTextColor};

    &:hover {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
`;
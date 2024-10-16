import styled from "styled-components";

export const CardContainer = styled.div`
    gap: 12px;
    display: flex;
    padding: 20px;
    margin: 0 auto;
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
    border: 1px dashed ${({ theme }) => theme.borderColor};

    &:hover {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
`;

export const ChildrenContainer = styled.div`
    width: 200px;
    display: flex;
    font-size: 64px;
    font-weight: 50;
    align-items: center;
    justify-content: center;
`;

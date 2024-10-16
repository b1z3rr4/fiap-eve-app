import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerLogin = styled.div`
    gap: 60px;
    width: 40%;
    display: flex;
    padding: 60px;
    align-items: center;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ContainerInput = styled.div`
    gap: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

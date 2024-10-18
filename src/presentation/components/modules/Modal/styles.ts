import styled from "styled-components";

export const Dialog = styled.dialog`
    margin: auto;
    min-width: 700px;
    min-height: 400px;
    padding: 20px;
    border: none;
    margin-top: 20px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
`;

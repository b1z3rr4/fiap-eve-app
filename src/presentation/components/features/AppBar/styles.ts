import styled from "styled-components";

export const AppBarContainer = styled.div`
    display: flex;
    padding: 6px 12px;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

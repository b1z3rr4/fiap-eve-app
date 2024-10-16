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
    flex-direction: column;
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.robotoFont};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 100%;

    & > img {
        width: 100%;
        border-radius: ${({ theme }) => theme.borderRadius};
    }
`;

export const DescriptionContainer = styled.div`
    gap: 6px;
    display: flex;
    font-size: 14px;
    flex-direction: column;

    & > .title {
        font-weight: 600;
    }

    & > .description {
        height: 50px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
`;

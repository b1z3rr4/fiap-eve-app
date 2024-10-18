import styled from "styled-components";


export const ImageContainer = styled.div`
    display: flex;
    padding: 12px;
    max-width: 300px;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius};    
    border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Image = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    aspect-ratio: 3/4;
`;

export const ImageUploadButton = styled.img`
    padding: 12px;
    cursor: pointer;
    max-width: 300px;
    background-color: #8FBED7;
    border-radius: ${({ theme }) => theme.borderRadius};    
    border: 1px solid ${({ theme }) => theme.borderColor};
`;

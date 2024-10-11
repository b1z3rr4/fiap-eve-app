import styled from "styled-components";

export const CardContainer = styled.div`
  width: 360px;
  height: 400px;
  padding: 10px 20px;
  gap: 24px;
  border-radius: 10px;
  border: 1px solid var(--Border, #E6E6E6);
  background: var(--Surface, #FFFFFF);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

export const CardDescription = styled.p`
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 14px;
`;

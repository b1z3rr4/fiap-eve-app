import styled from "styled-components";

export const CardContainer = styled.div`
  width: 360px;
  height: 400px;
  padding: 10px 20px;
  gap: 24px;
  border-radius: 10px 0 0 0;
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
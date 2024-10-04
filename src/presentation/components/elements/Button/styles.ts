import { styling } from "../../../../application/libs/styling";

export const ButtonStyle = styling.button`
    cursor: pointer;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;


    color: white;
    font-size: 16px;
    border-radius: 4px;
    background-color: #000;
    border: 1px solid #000;

    &:hover {
        border: 1px solid #19de
    }
`;

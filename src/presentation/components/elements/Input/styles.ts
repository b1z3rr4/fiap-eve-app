import { CSS, styling } from "../../../../application/libs/styling";

export const InputStyle = styling.input`
    margin: 4px;
    padding: 4px;
    background-color: #1e1e1e;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    outline: none;
    color: white;
    transition: border-color .2s ease;

    &:focus {
        border: 1px solid #19de;

        & + span {
            top: -12px;
        }
    }
    
    &.fulfilled {
        & + span {
            top: -12px;
        }
    }
`;

export const LabelStyle = styling.label`
    position: relative;
`;

export const SpanStyle = styling.span<{ type: string }>`
    ${({ type }) => 
        type !== 'radio' && type !== 'checkbox' && CSS`
            top: 4px;
            z-index: 2;
            left: 10px;
            color: #999;
            cursor: text;
            padding: 0 4px;
            font-size: 12px;
            background: #fff;
            font-weight: bold;
            position: absolute;
            transition: all .3s ease;
            background-color: #1e1e1e;
        `
    }
`;
import styled, { css } from "styled-components";
import { Input } from "../../elements/Input";
import { Textarea } from "../../elements/TextArea";

export const FieldSetStyle = styled.fieldset`
    all: unset;
    width: 100%;
    margin-top: 8px;
`;

export const InputStyle = styled(Input)`
    &:focus {
        & + span {
            top: -18px;
        }
    }
    
    &.fulfilled {
        & + span {
            top: -18px;
        }
    }
`;

export const TextAreaStyle = styled(Textarea)`
    &:focus {
        & + span {
            top: -62px;
        }
    }
    
    &.fulfilled {
        & + span {
            top: -62px;
        }
    }
`;

export const LabelStyle = styled.label`
    position: relative;
`;

export const SpanStyle = styled.span<{ type: string }>`
    ${({ type }) =>
        type !== 'radio' && type !== 'checkbox' && css`
            top: ${() => type === 'textarea' ? "-32px" : '4px'};
            z-index: 1;
            left: 10px;
            color: #999;
            cursor: text;
            padding: 0 4px;
            font-size: 12px;
            background: #fff;
            font-weight: bold;
            position: absolute;
            transition: all .3s ease;`
    }
`;

export const LabelError = styled.span`
    color: ${({ theme }) => theme.errorColor};
    font-size: 12px;
    margin-left: 4px;
`;

import { HTMLProps, PropsWithChildren } from "react";
import * as S from "./styles";

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  className?: string;
}

export const Paragraph = ({
  children,
  ...attributes
}: PropsWithChildren<ParagraphProps>) => {
  return <S.Paragraph {...attributes}>{children}</S.Paragraph>;
};

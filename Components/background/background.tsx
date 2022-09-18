import { ReactNode } from "react";
import { BackgroundStyle, CenteredContainer } from "./styles";

interface Props {
  children?: ReactNode;
}

export const Background = ({ children }: Props) => (
  <BackgroundStyle src="pattern-bg.png">
    <CenteredContainer>{children}</CenteredContainer>
  </BackgroundStyle>
);

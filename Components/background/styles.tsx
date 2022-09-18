import styled from "@emotion/styled";

interface IBackgroundProps {
  src: string;
}

export const BackgroundStyle = styled.div<IBackgroundProps>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1080px) {
    height: 360px;
  }
`;

export const CenteredContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  @media (max-width: 1080px) {
  }
`;

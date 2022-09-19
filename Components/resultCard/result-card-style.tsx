import styled from "@emotion/styled";
import { SimpleGrid, Stack } from "@mantine/core";

export const DesktopGridResult = styled(SimpleGrid)`
  border-style: solid;
  background-color: white;
  border-radius: 15px;
  width: 1110px;
  height: 162px;
  z-index: 2;
  border @media (max-width: 1080px) {
  }
`;

export const MobileGridResult = styled(Stack)`
  border-style: solid;
  background-color: white;
  border-radius: 15px;
  width: 351px;
  height: 320px;
  z-index: 2;
  border @media (max-width: 1080px) {
  }
`;

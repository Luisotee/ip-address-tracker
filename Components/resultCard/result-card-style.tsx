import styled from "@emotion/styled";
import { SimpleGrid, Stack } from "@mantine/core";

export const DesktopGridResult = styled(SimpleGrid)`
  background-color: white;
  border-radius: 15px;
  width: 1110px;
  height: 162px;
  z-index: 2;
`;

export const MobileGridResult = styled(Stack)`
  background-color: white;
  border-radius: 15px;
  width: 351px;
  height: 320px;
  z-index: 2;
`;

export const StackBorder = styled(Stack)`
  border-left: 1px solid #eee;
  gap: 0px;
`;

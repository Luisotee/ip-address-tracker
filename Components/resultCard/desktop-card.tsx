import { Stack, Text, Title } from "@mantine/core";
import { ResultCardI } from "../../interface";
import { DesktopGridResult, StackBorder } from "./result-card-style";

export function DesktopCard({ resultCardProps }: ResultCardI) {
  return (
    <DesktopGridResult cols={4}>
      <Stack align="flex-start" my={35} px={35} style={{ gap: "0px" }}>
        <Text color="#969696">IP ADDRESS</Text>
        <Title order={2}>{resultCardProps.ip}</Title>
      </Stack>
      <StackBorder align="flex-start" my={35} px={35}>
        <Text color="#969696">LOCATION</Text>
        <Title order={2}>{resultCardProps.location}</Title>
      </StackBorder>
      <StackBorder align="flex-start" my={35} px={35}>
        <Text color="#969696">TIMEZONE</Text>
        <Title order={2}>{resultCardProps.timezone}</Title>
      </StackBorder>
      <StackBorder align="flex-start" my={35} px={35}>
        <Text color="#969696">ISP</Text>
        <Title order={2}>{resultCardProps.isp}</Title>
      </StackBorder>
    </DesktopGridResult>
  );
}

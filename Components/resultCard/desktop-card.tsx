import { Stack, Text, Title } from "@mantine/core";
import { DesktopGridResult, StackBorder } from "./result-card-style";

export function DesktopCard() {
  return (
    <DesktopGridResult cols={4}>
      <Stack align="flex-start" my={35} px={35}>
        <Text color="#969696">IP ADDRESS</Text>
        <Title order={2}>192.168.0.1</Title>
      </Stack>
      <StackBorder align="flex-start" my={35} px={35}>
        <Text color="#969696">LOCATION</Text>
        <Title order={2}>Bairro</Title>
      </StackBorder>
      <StackBorder align="flex-start" my={35} px={35}>
        <Text color="#969696">TIMEZONE</Text>
        <Title order={2}>Brasilia time</Title>
      </StackBorder>
      <StackBorder align="flex-start" my={35} px={35}>
        <Text color="#969696">ISP</Text>
        <Title order={2}>NET Virtua</Title>
      </StackBorder>
    </DesktopGridResult>
  );
}

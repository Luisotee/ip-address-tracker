import { Stack, Text, Title } from "@mantine/core";
import { DesktopGridResult } from "./result-card-style";

export function DesktopCard() {
  return (
    <DesktopGridResult cols={4}>
      <Stack align="flex-start" m={35}>
        <Text color="#969696">IP ADDRESS</Text>
        <Title order={2}>192.168.0.1</Title>
      </Stack>
      <Stack align="flex-start" m={35}>
        <Text color="#969696">LOCATION</Text>
        <Title order={2}>Bairro</Title>
      </Stack>
      <Stack align="flex-start" m={35}>
        <Text color="#969696">TIMEZONE</Text>
        <Title order={2}>Brasilia time</Title>
      </Stack>
      <Stack align="flex-start" m={35}>
        <Text color="#969696">ISP</Text>
        <Title order={2}>NET Virtua</Title>
      </Stack>
    </DesktopGridResult>
  );
}

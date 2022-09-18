import { Group, Stack, Text, Title } from "@mantine/core";
import { DesktopGridResult, MobileGridResult } from "./result-card-style";

export function MobileCard() {
  return (
    <MobileGridResult align="center" justify="space-around">
      <Stack spacing="sm" align="center" mt="md">
        <Text color="#969696">IP ADDRESS</Text>
        <Title order={3}>192.168.0.1</Title>
      </Stack>
      <Stack spacing="sm" align="center">
        <Text color="#969696">LOCATION</Text>
        <Title order={3}>Bairro</Title>
      </Stack>
      <Stack spacing="sm" align="center">
        <Text color="#969696">TIMEZONE</Text>
        <Title order={3}>Brasilia time</Title>
      </Stack>
      <Stack spacing="sm" align="center" mb="md">
        <Text color="#969696">ISP</Text>
        <Title order={3}>NET Virtua</Title>
      </Stack>
    </MobileGridResult>
  );
}

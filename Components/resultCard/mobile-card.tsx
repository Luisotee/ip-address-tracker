import { Group, Stack, Text, Title } from "@mantine/core";
import { DesktopGridResult, MobileGridResult } from "./result-card-style";

export function MobileCard() {
  return (
    <MobileGridResult align="center" justify="space-around">
      <Stack spacing="xs" align="center" mt="lg">
        <Text size={12} color="#969696">
          IP ADDRESS
        </Text>
        <Title order={4}>192.168.0.1</Title>
      </Stack>
      <Stack spacing="xs" align="center">
        <Text size={12} color="#969696">
          LOCATION
        </Text>
        <Title order={4}>Bairro</Title>
      </Stack>
      <Stack spacing="xs" align="center">
        <Text size={12} color="#969696">
          TIMEZONE
        </Text>
        <Title order={4}>Brasilia time</Title>
      </Stack>
      <Stack spacing="xs" align="center" mb="md">
        <Text size={12} color="#969696">
          ISP
        </Text>
        <Title order={4}>NET Virtua</Title>
      </Stack>
    </MobileGridResult>
  );
}

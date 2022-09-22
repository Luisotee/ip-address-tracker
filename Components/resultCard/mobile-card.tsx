import { Group, Stack, Text, Title } from "@mantine/core";
import { ResultCardI } from "../../interface";
import { DesktopGridResult, MobileGridResult } from "./result-card-style";

export function MobileCard({ resultCardProps }: ResultCardI) {
  return (
    <MobileGridResult align="center" justify="space-around">
      <Stack spacing="xs" align="center" mt="lg">
        <Text size={12} color="#969696">
          IP ADDRESS
        </Text>
        <Title order={4}>{resultCardProps.ip}</Title>
      </Stack>
      <Stack spacing="xs" align="center">
        <Text size={12} color="#969696">
          LOCATION
        </Text>
        <Title order={4}>{resultCardProps.location}</Title>
      </Stack>
      <Stack spacing="xs" align="center">
        <Text size={12} color="#969696">
          TIMEZONE
        </Text>
        <Title order={4}>{resultCardProps.timezone}</Title>
      </Stack>
      <Stack spacing="xs" align="center" mb="md">
        <Text size={12} color="#969696">
          ISP
        </Text>
        <Title order={4}>{resultCardProps.isp}</Title>
      </Stack>
    </MobileGridResult>
  );
}

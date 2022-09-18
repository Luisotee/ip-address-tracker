import { Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { NextPage } from "next";
import { InputSearch } from "../Components/inputSearch/input-search";
import { GroupInput } from "../styles/indexStyle";

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(min-width: 1080px)");

  return (
    <Stack align="center">
      <Title order={isMobile ? 1 : 2} mt="lg" color="white">
        IP Address Tracker
      </Title>
      <GroupInput mt="md">
        <InputSearch isMobile={isMobile} />
      </GroupInput>
    </Stack>
  );
};

export default Home;

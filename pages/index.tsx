import { SimpleGrid, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { NextPage } from "next";
import { InputSearch } from "../Components/inputSearch/input-search";
import { ResultCard } from "../Components/resultCard/result-card";

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(min-width: 1080px)");

  return (
    <Stack align="center">
      <Title order={isMobile ? 1 : 2} mt="xl" color="white">
        IP Address Tracker
      </Title>
      <InputSearch isMobile={isMobile} />
      <ResultCard isMobile={isMobile} />
    </Stack>
  );
};

export default Home;

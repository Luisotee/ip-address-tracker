import { SimpleGrid, Stack, Title } from "@mantine/core";
import { useInputState, useMediaQuery } from "@mantine/hooks";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { InputSearch } from "../Components/inputSearch/input-search";
import { ResultCard } from "../Components/resultCard/result-card";

const LiveMap = dynamic(() => import("../Components/mapAPI/map-api"), {
  ssr: false,
});

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(min-width: 1110px)");
  const [inputValue, setInputValue] = useInputState("");

  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");

  const resultProps = {
    setIp: setIp,
    setLocation: setLocation,
    setTimezone: setTimezone,
    setIsp: setIsp,
  };

  const resultCardProps = {
    ip: ip,
    location: location,
    timezone: timezone,
    isp: isp,
  };

  return (
    <Stack align="center" style={{ height: "100vh" }}>
      <Title order={isMobile ? 1 : 2} mt="xl" color="white">
        IP Address Tracker
      </Title>
      <InputSearch
        isMobile={isMobile}
        setInputValue={setInputValue}
        inputValue={inputValue}
        resultProps={resultProps}
      />
      <ResultCard isMobile={isMobile} resultCardProps={resultCardProps} />
      <LiveMap />
    </Stack>
  );
};

export default Home;

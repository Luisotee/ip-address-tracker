import { Stack, Title } from "@mantine/core";
import { useInputState, useMediaQuery } from "@mantine/hooks";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { InputSearch } from "../Components/inputSearch/input-search";
import { getInitialIp } from "../Components/ipAPI/initialIP";
import { ipTracker } from "../Components/ipAPI/ipTracker";
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
  const [coord, setCoord] = useState([0, 0]);

  const resultProps = {
    setIp: setIp,
    setLocation: setLocation,
    setTimezone: setTimezone,
    setIsp: setIsp,
    setCoord: setCoord,
  };

  const resultCardProps = {
    ip: ip,
    location: location,
    timezone: timezone,
    isp: isp,
    coord: coord,
  };

  useEffect(() => {
    async function initialIP() {
      const userIP = await getInitialIp();
      setInputValue(userIP);
      ipTracker({ inputValue, resultProps, resultCardProps });
    }

    initialIP();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        resultCardProps={resultCardProps}
      />
      <ResultCard isMobile={isMobile} resultCardProps={resultCardProps} />
      <LiveMap resultCardProps={resultCardProps} />
    </Stack>
  );
};

export default Home;

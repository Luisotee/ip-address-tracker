import { Button, Group, Image, TextInput } from "@mantine/core";
import { InputSearchProps } from "../../interface";
import { ipTracker } from "../ipAPI/ipTracker";
import { GroupInput } from "./input-style";

export function InputSearch({
  isMobile,
  setInputValue,
  inputValue,
  resultProps,
}: InputSearchProps) {
  const arrowButton = (
    <Button
      color="dark"
      radius={0}
      onClick={() => ipTracker({ inputValue, resultProps })}
      style={{
        width: "100%",
        height: "100%",
        borderBottomRightRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <Image src="icon-arrow.svg" alt="arrow icon" />
    </Button>
  );

  return (
    <GroupInput mt="md">
      <TextInput
        size="xl"
        radius="lg"
        placeholder={
          isMobile
            ? "Search for any IP address or domain"
            : "Search for any IP or domain"
        }
        rightSection={arrowButton}
        rightSectionWidth={57}
        onChange={setInputValue}
        style={{ width: "100%" }}
      />
    </GroupInput>
  );
}

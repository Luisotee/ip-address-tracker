import { useState } from "react";

interface inputInterface {
  inputValue: string;
}
export const isDomain = ({ inputValue }: inputInterface) => {
  if (inputValue == "") return false;
  else if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      inputValue
    )
  ) {
    return false;
  }
  return true;
};

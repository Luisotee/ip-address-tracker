import { useState } from "react";

export const isDomain = ({ inputValue }: any) => {
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

import axios from "axios";
import { useState } from "react";
import { IpTrackerProps } from "../../interface";

export async function ipTracker({
  inputValue,
  resultProps,
  resultCardProps,
}: IpTrackerProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let isDomain = false;
  if (inputValue == "") isDomain = false;
  else if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      inputValue
    )
  ) {
    isDomain = false;
  } else isDomain = true;

  const ip = inputValue;
  const ipAdressApi = axios.create({
    baseURL:
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_Yxxqxxi7C1mlbPE0ES2cMk9ceDDIt&ipAddress=?domain=?",
  });
  let data;
  if (isDomain) {
    data = await ipAdressApi
      .get(`&domain=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        alert("dominio");
      });
  } else {
    data = await ipAdressApi
      .get(`&ipAddress=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        alert("ip");
      });
  }

  if (data) {
    resultProps.setIp(data.ip);
    resultProps.setLocation(data.location.city + ", " + data.location.region);
    resultProps.setTimezone("UTC " + data.location.timezone);
    resultProps.setIsp(data.isp);
    resultProps.setCoord([data.location.lat, data.location.lng]);
  }
}

import axios from "axios";
import { useState } from "react";
import { IpTrackerProps } from "../../interface";
import { isDomain } from "./is-domain";

export async function ipTracker({
  inputValue,
  resultProps,
  resultCardProps,
}: IpTrackerProps) {
  const ip = inputValue;
  const ipAdressApi = axios.create({
    baseURL:
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_Yxxqxxi7C1mlbPE0ES2cMk9ceDDIt&ipAddress=?domain=?",
  });
  let data;
  if (isDomain({ inputValue })) {
    data = await ipAdressApi
      .get(`&domain=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        alert("Invalid input");
      });
  } else {
    data = await ipAdressApi
      .get(`&ipAddress=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        alert("Invalid input");
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

import axios from "axios";
import { useState } from "react";
import { IpTrackerProps } from "../../interface";
import { isDomain } from "./is-domain";

export async function ipTracker({
  inputValue,
  resultProps,
  resultCardProps,
}: IpTrackerProps) {
  const baseURL =
    "https://geo.ipify.org/api/v2/country,city?apiKey=" +
    process.env.NEXT_PUBLIC_GET_API +
    "&ipAddress=?domain=?&";

  //console.log(process.env.NEXT_PUBLIC_GET_API);

  try {
    var res;
    if (isDomain({ inputValue })) {
      res = await fetch(baseURL + "domain=" + inputValue);
    } else {
      res = await fetch(baseURL + "ipAddress=" + inputValue);
    }
    const data = await res.json();
    console.log(data);
    resultProps.setIp(data.ip);
    resultProps.setLocation(data.location.city + ", " + data.location.region);
    resultProps.setTimezone("UTC " + data.location.timezone);
    resultProps.setIsp(data.isp);
    resultProps.setCoord([data.location.lat, data.location.lng]);
  } catch (error) {}
}

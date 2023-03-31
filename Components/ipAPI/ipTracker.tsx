import axios from "axios";
import { useState } from "react";
import { IpTrackerProps } from "../../interface";
import { isDomain } from "./is-domain";

export async function ipTracker({
  inputValue,
  resultProps,
  resultCardProps,
}: IpTrackerProps) {
  const baseURL = "http://ip-api.com/json/";
  //console.log("Inpuvalue:", inputValue);

  try {
    var res;
    if (isDomain({ inputValue })) {
      res = await fetch(baseURL + "domain=" + inputValue);
    } else {
      res = await fetch(baseURL + inputValue);
    }
    const data = await res.json();
    console.log(data);
    resultProps.setIp(inputValue);
    resultProps.setLocation(data.city + ", " + data.regionName);
    resultProps.setTimezone("UTC " + data.timezone);
    resultProps.setIsp(data.isp);
    resultProps.setCoord([data.lat, data.lon]);
  } catch (error) {}
}

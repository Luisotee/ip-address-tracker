import axios from "axios";
import { IpTrackerProps } from "../../interface";

export async function ipTracker({
  inputValue,
  resultProps,
  resultCardProps,
}: IpTrackerProps) {
  const ip = inputValue;
  const ipAdressApi = axios.create({
    baseURL:
      "https://geo.ipify.org/api/v1?apiKey=at_Yxxqxxi7C1mlbPE0ES2cMk9ceDDIt&ipAddress=",
  });
  const data = await ipAdressApi
    .get(`&ipAddress=${ip}`)
    .then((r) => r.data)
    .catch((err) => {
      alert("Invalid ip, try again");
    });

  if (data) {
    resultProps.setIp(data.ip);
    resultProps.setLocation(data.location.city + ", " + data.location.region);
    resultProps.setTimezone("UTC " + data.location.timezone);
    resultProps.setIsp(data.isp);
    resultProps.setCoord([data.location.lat, data.location.lng]);
  }
}

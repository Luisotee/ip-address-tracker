import axios from "axios";

export async function ipTracker() {
  const ip = "177.84.241.63";
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
  console.log(data);
}

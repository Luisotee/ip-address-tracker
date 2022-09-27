import axios from "axios";

export async function getInitialIp() {
  const data = await axios
    .get("https://api.ipify.org?format=json")
    .then((r) => r.data)
    .catch((e) => {
      alert("Sorry, an adblocker issue occurred.");
    });

  return data.ip;
}

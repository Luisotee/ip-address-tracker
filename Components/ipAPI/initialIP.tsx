import axios from "axios";

export async function getInitialIp() {
  const data = await axios
    .get("https://api.ipify.org?format=json")
    .then((r) => r.data)
    .catch((e) => {
      e.errors = "Sorry, an adblocker issue occurred.";
    });

  //console.log(data.ip);
  return data.ip;
}

export async function getInitialIp() {
  const baseURL = "https://api.ipify.org?format=json";
  var data;

  try {
    const res = await fetch(baseURL);
    data = await res.json();
    console.log(data);
  } catch (error) {}

  return data.ip;
}

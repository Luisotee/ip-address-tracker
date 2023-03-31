export async function getInitialIp() {
  const baseURL = "https://api.ipify.org?format=json";
  let data; // Set a default value for data

  try {
    const res = await fetch(baseURL);
    data = await res.json();
  } catch (error) {
    console.log("Error:", error);
  }

  return data.ip;
}

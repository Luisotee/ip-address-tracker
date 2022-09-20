import ipify from "ipify";

export async function ipTracker() {
  console.log(await ipify({ useIPv6: false }));
}

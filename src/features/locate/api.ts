import LocateState from "./types/LocateState";

export async function getLocationByIP(): Promise<LocateState> {
    const res = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=1ff461371eea478a9da941e993ecbbc2');
    const obj = await res.json();
    const { ip_address, city, latitude, longitude } = obj;

    // console.log(ip_address);
    // console.log(city);
    // console.log(latitude);
    // console.log(longitude);
    const result: LocateState = { ip_address, latitude, longitude, city }
    console.log(result.ip_address);
    return result;
}
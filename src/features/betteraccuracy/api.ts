import Coordinates from './types/Coordinates';

export async function getBetterAcc() {
  let latitude = 0;
  let longitude = 0;
  const obj = {
    ip_address: "",
    latitude: 1,
    longitude: 1,
    city: ""
  }
  navigator.geolocation.getCurrentPosition(
    function (position) {
      obj.latitude = position.coords.latitude;
      obj.longitude = position.coords.longitude;
      console.log(position.coords);
    });
  console.log(obj.latitude);
  console.log(obj.longitude);

  // const res = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=1ff461371eea478a9da941e993ecbbc2');
  // const obj = res.json();
  return obj;
}

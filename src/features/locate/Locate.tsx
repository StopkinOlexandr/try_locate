import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { selectLocateIP } from './selectors';
import { getlocationIP } from './locateSlice';

export default function Locate(): JSX.Element {
  const dispatch = useAppDispatch();
  const value = useSelector(selectLocateIP);

  
  
  // async function getWeather(latitude: number, longitude: number) {

  //   const linkWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  //   const response = await fetch(linkWeather);
  //   const obj = await response.json();
  //   const { current_weather: { temperature, windspeed, weathercode }
  //   } = obj;
  //   console.log("temp" + temperature);
  //   console.log(windspeed);
  //   console.log(weathercode);
  //   console.log(weatherSubscription(weathercode));
  //   // 
  //   // let url = `https://api.openweathermap.org/data/3.0/onecall?lat=51.0&lon=12.0&appid={31139eef076061717f46f5131b9f4b0d}`;
  //   // const res = await fetch(url)
  //   // const obj = res.json()
  //   // console.log(obj);
  // }
  // getfromNavigator()
  // const coord = getfromNavigator()
  // getWeather(coord.latitude, coord.longitude)



  useEffect(() => {
    dispatch(getlocationIP());
  }, [dispatch]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(getlocationIP());
        }}
      >
        get location
      </button>
      <p id="ip">{value.ip_address}</p>
      <p id="lat">{value.latitude}</p>
      <p id="long">{value.longitude}</p>
      <p id="city">{value.city}</p>

    </>
  );
}

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { getBetterAccuracy } from './BetterAccuracySlice';
import { selectBetterAccuracy } from './selectors';

export default function BetterAccuracy(): JSX.Element {
  const dispatch = useAppDispatch();
  const betterCoords = useSelector(selectBetterAccuracy);

  useEffect(() => {
    dispatch(getBetterAccuracy());
  }, [dispatch]);
  // console.log("ip:" + value.ip_address);
  // console.log("tezt");

  return (
    <>

      {/* <button
        type="button"
        onClick={() => {
          dispatch(getlocationIP());
        }}
      > 
        get location
      </button>*/}
      {/* <p id="ip">{value.ip_address}</p>
      <p id="lat">{value.latitude}</p>
      <p id="long">{value.longitude}</p>
      <p id="city">{value.city}</p> */}
      <button
        type="button"
        onClick={() => { dispatch(getBetterAccuracy()); }}
      >
        Better geo accuracy
      </button>
      {betterCoords.latitude}{betterCoords.longitude}
    </>
  );
}

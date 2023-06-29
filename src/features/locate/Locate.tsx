import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { selectLocateIP } from "./selectors";
import { getIP, getlocationIP } from './locateSlice';


export default function Locate(): JSX.Element {
    const dispatch = useAppDispatch();
    // const ip = useSelector(selectLocateIP);
    const value = useSelector(selectLocateIP);

    useEffect(() => { dispatch(getlocationIP()); }, [dispatch]);

    return (
        <>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        dispatch(getlocationIP())
                        console.log("click!");
                    }}
                >
                    get location
                </button>
                <p id="ip">{value.ip_address}</p>
                <p id="lat">{value.latitude}</p>
                <p id="long">{value.longitude}</p>
                <p id="city">{value.city}</p>
                <button
                    type="button"
                // onClick={() => dispatch(minus(1))}
                >
                    Better geo accuracy
                </button>{' '}

                <span >value</span>{' '}
            </div>
        </>
    );
}
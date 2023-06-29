import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


import * as api from './api';
import LocateState from './types/LocateState';

const initialState: LocateState = {
    ip_address: "no ip",
    latitude: 0,
    longitude: 0,
    city: "no city"
};

export const getlocationIP = createAsyncThunk(
    'locate/getip',
    () => api.getLocationByIP()
);

const locateSlice = createSlice({
    name: 'locate',
    initialState,

    reducers: {
        getIP(state, action: PayloadAction<LocateState>) {
            state = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getlocationIP.fulfilled, (state, action) => {
            // в action.payload придет результат из thunk
            state = action.payload;
        });
    }
});

export const { getIP } = locateSlice.actions;


export default locateSlice.reducer;

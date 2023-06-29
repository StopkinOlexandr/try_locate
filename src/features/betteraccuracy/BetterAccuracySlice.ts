import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from './api';
import Coordinates from './types/Coordinates';
import LocateState from './types/LocateState';

const initialState: LocateState = {
  coordinates: {
    ip_address: 'no ip',
    latitude: 0,
    longitude: 0,
    city: 'no city'
  },
  error: undefined
};

export const getBetterAccuracy = createAsyncThunk(
  'betteraccuracy/getcoordinates',
  async (coordinates: Coordinates) => {
    await api.getBetterAcc();
    return coordinates;
  }
);


// export const getBetterAccuracy = createAsyncThunk(
//   'locate/getBetterCoordinates',
//   () => api.getBetterAcc()
// );

const betterAcuuracySlice = createSlice({
  name: 'betteraccuracy',
  initialState,

  reducers: {
    BetterAccuracy(state, action: PayloadAction<Coordinates>) {
      state.coordinates = action.payload;
    },
    // resetError: (state) => {
    //   state.error = undefined;
    // }

  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getBetterAccuracy.fulfilled, (state, action) => {
    //     // в action.payload придет результат из thunk
    //     state.coordinates = action.payload;
    //     console.log("slice");

    //   })
    //   .addCase(getBetterAccuracy.rejected, (state) => {
    //     state.error = 'Error: products fetch rejected';
    //   });
  }
});

// export const { resetError } = betterAcuuracySlice.actions;
export default betterAcuuracySlice.reducer;

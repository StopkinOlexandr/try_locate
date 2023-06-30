import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import locateReducer from './features/locate/locateSlice';
import routReducer from "./features/map/rootSlice";
const store = configureStore({
  reducer: {
    root: routReducer,
    locate: locateReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// для правильной типизации будем использовать useAppDispatch() вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

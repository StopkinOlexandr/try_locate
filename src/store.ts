import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import BetterAccuracy from './features/betteraccuracy/BetterAccuracy';
import locateReducer from './features/locate/locateSlice';
import betteraccuracyReducer from './features/betteraccuracy/BetterAccuracySlice';

const store = configureStore({
  reducer: {
    // betteraccuracy: betteraccuracyReducer,
    locate: locateReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// для правильной типизации будем использовать useAppDispatch() вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

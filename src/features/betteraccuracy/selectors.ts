import { RootState } from '../../store';
import Coordinates from './types/Coordinates';

export const selectBetterAccuracy = (state: RootState): Coordinates => state.betteraccuracy.coordinates;

import { RootState } from '../../store';
import LocateState from './types/LocateState';



export const selectLocateIP = (state: RootState): LocateState => state.locate;

//location


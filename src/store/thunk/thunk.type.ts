import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../RootState';

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

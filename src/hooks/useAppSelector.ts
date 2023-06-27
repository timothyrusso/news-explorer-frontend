import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/RootState';

// Saves you the need to type (state: RootState) every time
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

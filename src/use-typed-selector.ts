import { State } from './store/modules/items/types';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface AppState {
  items: State
}

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
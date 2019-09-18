import { State } from './types';
import { FETCH_ITEMS_START, FETCH_ITEMS_SUCCESS } from './actions';
import { AnyAction } from 'redux';

const initialState: State = {
  error: null,
  isLoading: false,
  items: []
}

const reducer = (state: State = initialState, action: AnyAction): State => {
  switch(action.type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
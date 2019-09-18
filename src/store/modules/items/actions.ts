import { FeedItem } from './types';

// action types
export const FETCH_ITEMS_START = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';

// action creator
export const fetchItemsStart = () => ({
  type: FETCH_ITEMS_START
});

export const fetchItemsSuccess = (items: FeedItem[]) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items
});

export const fetchItemsError = (error: string) => ({
  type: FETCH_ITEMS_ERROR,
  payload: error
})

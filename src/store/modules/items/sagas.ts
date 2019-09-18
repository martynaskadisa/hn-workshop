import { FETCH_ITEMS_START, fetchItemsSuccess } from "./actions";
import { takeEvery, put } from "@redux-saga/core/effects";

function* fetchItems() {
  const response = yield fetch('https://api.hnpwa.com/v0/news/1.json');
  const json = yield response.json();

  yield put(fetchItemsSuccess(json))
}

export function* watchFetchItemsStarts() {
  yield takeEvery(FETCH_ITEMS_START, fetchItems);
}
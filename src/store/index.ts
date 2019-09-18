import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import items from './modules/items/reducer';
import createSagaMiddleware from 'redux-saga';
import { watchFetchItemsStarts } from './modules/items/sagas';

const reducer = combineReducers({
  items: items
})

const sagaMiddleware = createSagaMiddleware();

const reduxDevTool =
  typeof window && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f;

const enhancedCreateStore = compose<typeof createStore>(
  applyMiddleware(sagaMiddleware),
  reduxDevTool
)(createStore);

const store = enhancedCreateStore(reducer);

sagaMiddleware.run(watchFetchItemsStarts);

export default store;
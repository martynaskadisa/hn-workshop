/// <reference types="react-scripts" />

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: (
    opts?: ReduxDevToolsOptions
  ) => <T>(createStore: T) => T;
}
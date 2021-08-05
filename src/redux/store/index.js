import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import loggerMiddleware from "middleware/logger";
import rootReducer from "redux/reducers";

let store;

const initStore = (preloadedState) => {
  let middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') middlewares = [loggerMiddleware, ...middlewares];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  return createStore(rootReducer, preloadedState, composedEnhancers);
};

export default function configureStore(preloadedState) {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState) {
  const store = useMemo(() => configureStore(initialState), [initialState]);
  return store;
}

import { createStore, applyMiddleware, Store } from "redux";
import RootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store: Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof RootReducer>;
export default store;

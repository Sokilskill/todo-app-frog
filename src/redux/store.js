import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import projectsReducer from "./projects/projectsSlice";
import todosReducer from "./todos/todosSlice";
import filtersReducer from "./filters/filtersSlice";

const rootReducer = combineReducers({
  projects: projectsReducer,
  todos: todosReducer,
  filters: filtersReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["projects", "todos"],
  blacklist: ["filters"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

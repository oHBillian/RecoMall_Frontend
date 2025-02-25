import { configureStore} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedCartReducer } from "./slice/Cartslice";
import Paginationslice from "./slice/Paginationslice";
import subcategoryslice from "./slice/subcategoryslice";


export const store = configureStore({
  reducer: {
    cart : persistedCartReducer,
    pagination : Paginationslice,
    subcategoryId: subcategoryslice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER'
        ],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import { baseApi } from './api/baseApi'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer, persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persitConfig = {
  key: 'root',
  storage,
}


const persistedAuthReducer = persistReducer(persitConfig, authSlice);


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
  middleware: (getdefaultMiddleware) => getdefaultMiddleware({
    serializableCheck: {
      ignoredActions
        : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }).concat(baseApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);
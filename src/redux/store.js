import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice.js"
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { productsApi } from './services/productsApi.js'
import { setupListeners } from "@reduxjs/toolkit/query"
import cartReducer from './slices/productSlice.js'

const reducers = combineReducers({
  userData: userReducer,
  [productsApi.reducerPath] : productsApi.reducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['productApi']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store =  configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware),
});

setupListeners(store.dispatch)
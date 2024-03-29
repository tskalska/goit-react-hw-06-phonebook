import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import {contactsReducer, filterReducer} from './contactsRedux/reducer'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {FLUSH, REHYDRATE, PAUSE,
PERSIST,
PURGE,
REGISTER} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  }


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }),
})

const persistedStore = persistStore(store);

export default {store, persistedStore};   
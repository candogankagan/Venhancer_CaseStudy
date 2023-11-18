import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import FavoriteSlice from './favCharacters/FavoriteSlice';
import LoaderSlice from './loader/LoaderSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: 'character',
};

const rootReducer = combineReducers({
  loader: LoaderSlice,
  character: FavoriteSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

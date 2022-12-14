// import { configureStore } from '@reduxjs/toolkit';
// // Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { contactsApi } from './contacts/contacts';
// import { userApi } from './auth/auth-rtk-query';
// import { contactsReducer } from './contacts/contactsSlice';
// import { authReducer } from './auth';
// // import logger from 'redux-logger';

// import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   stateReconciler: autoMergeLevel1,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [userApi.reducerPath]: userApi.reducer,
//     auth: persistedReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     contacts: contactsReducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//     // logger,
//     thunk,
//   ],
// });

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);

// export const persistor = persistStore(store);

// =====================================================

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsHW7/contactsSlice';
import { authReducer } from './auth';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactsApi.middleware,
    logger,
    // thunk,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

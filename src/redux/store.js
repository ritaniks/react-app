import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import globalReducer from './global/globalReducers';

const rootReducer = combineReducers({
  global: globalReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import ReduxThunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const sessionPersistConfig = {
//   key: 'session',
//   storage,
//   whitelist: ['token'],
// };

// const rootReducer = combineReducers({
//   global: globalReducer,
//   //   products: productsReducer,
//   //   session: persistReducer(sessionPersistConfig, sessionReducers),
// });

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [ReduxThunk];

// const enhancer = applyMiddleware(...middleware);

// export const store = createStore(rootReducer, composeWithDevTools(enhancer));

// // export const persistor = persistStore(store);

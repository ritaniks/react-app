import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import testReducers from './test/testReducers';
import globalReducer from './global/globalReducers';

// Middleware
import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger';

const rootReducer = combineReducers({
  test: testReducers,
  global: globalReducer,
});

const middleware = [ReduxThunk]; // logger

const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

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

// const enhancer =
//   process.env.NODE_ENV === 'development'
//     ? composeWithDevTools(applyMiddleware(...middleware))
//     : applyMiddleware(...middleware);

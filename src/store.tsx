import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import rootSaga from './redux/rootSaga';
import rootReducer from './redux/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

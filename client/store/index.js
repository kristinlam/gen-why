import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import auth from './auth';
import subjects from './subjects';
import singleSubject from './singleSubject';

// configureStore auto calls combineReducers
const reducer = { auth, subjects, singleSubject };

// getDefaultMiddleware auto includes redux-thunk
// configureStore auto enables DevTools when not in production
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger({ collapsed: true })),
});

export default store;
export * from './auth';

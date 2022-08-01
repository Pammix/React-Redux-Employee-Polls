import { configureStore } from '@reduxjs/toolkit';
import authUser from './reducers/authUser';
import users from './reducers/users';
import questions from './reducers/questions';
import logger from './middleware/logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    authUser,
    users,
    questions
  },
  middleware: [thunk, logger]
});

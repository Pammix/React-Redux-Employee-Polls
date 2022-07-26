import { combineReducers } from 'redux';
import { users } from '../reducers/users';
import { questions } from '../reducers/questions';
import { authUser } from '../reducers/authUser';

export default combineReducers({
  authUser,
  users,
  questions
});

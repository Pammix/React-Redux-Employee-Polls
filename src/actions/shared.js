import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export function handleInitialData() {
  //thunk
  return function (dispatch) {
    return getInitialData().then(({ users, questions }) => {
      // dispach specific actions
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

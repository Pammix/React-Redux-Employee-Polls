import { ADD_QUESTION_USER } from '../actions/users';
import { RECEIVE_USERS } from '../actions/users';
import { SAVE_ANSWER } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case SAVE_ANSWER:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    case ADD_QUESTION_USER:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          questions: state[action.authUser].questions.concat(action.qid)
        }
      };
    default:
      return state;
  }
}

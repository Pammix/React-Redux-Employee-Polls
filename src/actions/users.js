export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function saveUserAnswer({ authUser, qid, answer }) {
  return {
    type: SAVE_USER_ANSWER,
    authUser,
    qid,
    answer
  };
}

export function addQuestionUser(authUser, id ) {
  return {
    type: ADD_QUESTION_USER,
    authUser,
    qid:id
  };
}

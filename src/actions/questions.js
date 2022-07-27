import { _saveQuestionAnswer } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveAnswer({ authUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authUser,
    qid,
    answer
  };
}

export function handleSaveAnswer({ authUser, qid, answer }) {
  return (dispatch) => {
     dispatch(saveAnswer({ authUser, qid, answer }));
    return _saveQuestionAnswer({ authUser, qid, answer }).catch((e) => {
      alert('Error in saving Answer');
      console.warn('Error in saving Answer');
    });
  };
}

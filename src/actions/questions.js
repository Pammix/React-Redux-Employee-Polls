import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';
import { addQuestionUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authUser
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionUser(authUser, question.id));
      })
      .then(dispatch(hideLoading()));
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

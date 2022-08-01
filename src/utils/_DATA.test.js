const { _saveQuestionAnswer , _saveQuestion } = require('./_DATA');
describe('_saveQuestion', () => {
  it('should return true for correct data', async () => {
    const question = {
      optionOneText: 'optionOne',
      optionTwoText: 'OptionTwo',
      author: 'sarahedo'
    };
    const response = await _saveQuestion(question);
    expect(response).toBeTruthy();
  });
  it('should return error for incorrect data', async () => {
    const question = {
      optionOneText: 'optionOne',
      optionTwoText: 'OptionTwo'
    };
    const response = await _saveQuestion(question).catch((e) => e);
    expect(response).toBe(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('_saveQuestionAnswer', () => {
  it('should return true for correct parameters', async () => {
    const response = await _saveQuestionAnswer({
      authUser: 'sarahedo',
      qid: 'loxhs1bqm25b708cmbf3g',
      answer: 'optionOne'
    });
    expect(response).toBeTruthy();
  });

  it('should return error for false parameters', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: 'sarahedo',
      qid: undefined,
      answer: 'optionOne'
    }).catch((e) => e);
    expect(response).toBe('Please provide authedUser, qid, and answer');
  });
});

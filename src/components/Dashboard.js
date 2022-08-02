import { connect } from 'react-redux';
import './Dashboard.css';
import Question from './Question';
import { useState } from 'react';

const Dashboard = (props) => {
  const [checkedNewQuestion, setCeckedNewQuestion] = useState(true);
  const [checkedAnswerdQuestion, setCeckedAnsweredQuestion] = useState(false);

  const handleChangeCheckNewQuestion = () => {
    setCeckedNewQuestion(!checkedNewQuestion);
  };
  const handleChangeCheckAnsweredQuestion = () => {
    setCeckedAnsweredQuestion(!checkedAnswerdQuestion);
  };
  return (
    <div className='wrapper-container'>
      <h1 className='gradient-text'> Polls Dashboard</h1>
      <h3 className='title-check'> New Questions: </h3>
      <label className='switch'>
        <input
          id='new-question-check'
          type='checkbox'
          checked={checkedNewQuestion}
          onChange={handleChangeCheckNewQuestion}
        />
        <span className='slider round'></span>
      </label>
      {checkedNewQuestion && (
        <div>
          <ul className='questions-list'>
            {props.questionsIds
              .filter((item) => !props.userAnswersIds.includes(item))
              .map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))}
          </ul>
        </div>
      )}
      <h3 className='title-check'> Answered Questions: </h3>
      <label className='switch'>
        <input
          id='answerd-question-check'
          type='checkbox'
          checked={checkedAnswerdQuestion}
          onChange={handleChangeCheckAnsweredQuestion}
        />
        <span className='slider round'></span>
      </label>
      {checkedAnswerdQuestion && (
        <div>
          <ul className='questions-list'>
            {props.questionsIds
              .filter((item) => props.userAnswersIds.includes(item))
              .map((id) => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ questions, users, authUser }) => {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    userAnswersIds: Object.keys(users[authUser].answers),
    authUser
  };
};
export default connect(mapStateToProps)(Dashboard);

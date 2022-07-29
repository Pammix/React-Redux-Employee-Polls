import { connect } from 'react-redux';
import './Dashboard.css';
import Question from './Question';

const Dashboard = (props) => {
  return (
    <div className='wrapper-container'>
      <h1 className='gradient-text'> Polls Dashboard</h1>
      <h3> New Questions: </h3>
      <ul className='questions-list'>
        {props.questionsIds
          .filter((item) => !props.userAnswersIds.includes(item))
          .map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
      </ul>
      <h3> Answered Questions: </h3>
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

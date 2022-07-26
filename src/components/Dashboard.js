import { connect } from 'react-redux';

const Dashboard = (props) => {

  return (
    <div>
      <h1> Dashboard</h1>
      <h3> New Questions: </h3>
      <ul className='questions-list'>
        {props.questionsIds
          .filter((item) => !props.userAnswersIds.includes(item))
          .map((id) => (
            <li key={id}>
              <div>Question ID: {id}</div>
            </li>
          ))}
      </ul>
      <h3> Answered Questions: </h3>
      <ul className='questions-list'>
        {props.questionsIds
          .filter((item) => props.userAnswersIds.includes(item))
          .map((id) => (
            <li key={id}>
              <div>Question ID: {id}</div>
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

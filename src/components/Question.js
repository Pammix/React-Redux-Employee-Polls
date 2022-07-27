import { connect } from 'react-redux';
import './Question.css';

const Question = (props) => {
  console.log(props.question);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (
    <div className='question'>
      <h3 className='gradient-text'> {props.question.author}</h3>
      <h6> {formatDate(props.question.timestamp)}</h6>
      <button id='btn-show'>Show</button>
    </div>
  );
};

const mapStateToProps = ({ authUser, questions }, { id }) => {
  const question = questions[id];
  return {
    authUser,
    question
  };
};
export default connect(mapStateToProps)(Question);

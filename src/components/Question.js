import { connect } from 'react-redux';
import './Question.css';
import { Link, useNavigate } from 'react-router-dom';

const Question = (props) => {
  const navigate = useNavigate();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (
    <div className='question'>
      <h3 className='gradient-text'> {props.question.author}</h3>
      <h6> {formatDate(props.question.timestamp)}</h6>
      <Link to={`/questions/${props.id}`}>
        <button id='btn-show'>Show</button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ questions }, { id }) => {
  const question = questions[id];
  return {
    question
  };
};
export default connect(mapStateToProps)(Question);

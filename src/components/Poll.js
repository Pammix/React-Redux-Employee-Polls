import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
  Navigate
} from 'react-router-dom';
import './Poll.css';
import { handleSaveAnswer } from '../actions/questions';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};
const Poll = (props) => {
  let navigate = useNavigate();
  if (!props.question) return <Navigate to='/404' />;
  const fristAnswerSelected =
    props.question.optionOne.votes.filter((v) => v === props.authUser).length >
    0;

  const secondAnswerSelected =
    props.question.optionTwo.votes.filter((v) => v === props.authUser).length >
    0;

  const isAnswered = fristAnswerSelected || secondAnswerSelected;

  function clickButton(e, option) {
    e.preventDefault();
    props.dispatch(
      handleSaveAnswer({
        authUser: props.authUser,
        qid: props.question.id,
        answer: option
      })
    );
  }

  return (
    <div className='wrapper-container'>
      <h1 className='gradient-text'>Poll by {props.question.author} </h1>
      <figure>
        <img className='avatar' src={props.userAvatar} alt='Author Avatar' />
      </figure>
      <h1>Would You Rather </h1>
      <div className='option-container'>
        <button
          className={
            'button-option' + (fristAnswerSelected ? ' selected ' : '')
          }
          id='optionOne'
          disabled={isAnswered}
          onClick={(e) => {
            clickButton(e, 'optionOne');
          }}
        >
          {' '}
          {props.question.optionOne.text}
        </button>
        <button
          className={
            'button-option' + (secondAnswerSelected ? ' selected ' : '')
          }
          id='optionTwo'
          disabled={isAnswered}
          onClick={(e) => {
            clickButton(e, 'optionTwo');
          }}
        >
          {' '}
          {props.question.optionTwo.text}
        </button>
        {isAnswered && (
          <div className='statistics-wrapper'>
            <h3>Statistics : </h3>
            <div>
              <h4 className='text-upper'> {props.question.optionOne.text}</h4>
              <span className='padding'>
                People votes :{' '}
                <span>{props.question.optionOne.votes.length} </span>
              </span>
              <span>
                Percentage :{' '}
                {(props.question.optionOne.votes.length / 4) * 100 + '%'}
              </span>
            </div>
            <div>
              <h4 className='text-upper'> {props.question.optionTwo.text}</h4>
              <span className='padding'>
                People votes :{' '}
                <span> {props.question.optionTwo.votes.length}</span>
              </span>
              <span>
                Percentage :{' '}
                {(props.question.optionTwo.votes.length / 4) * 100 + '%'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  const userAvatar = users[question?.author]?.avatarURL;

  return {
    id,
    userAvatar,
    authUser,
    question,
    questions
  };
};

export default withRouter(connect(mapStateToProps)(Poll));

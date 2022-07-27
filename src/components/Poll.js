import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  function clickButton(e, option) {
    e.preventDefault();
    console.log(option);
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
          className='button-option'
          id='optionOne'
          onClick={(e) => {
            clickButton(e, 'optionOne');
          }}
        >
          {' '}
          {props.question.optionOne.text}
        </button>
        <button
          className='button-option'
          id='optionTwo'
          onClick={(e) => {
            clickButton(e, 'optionTwo');
          }}
        >
          {' '}
          {props.question.optionTwo.text}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  const userAvatar = users[question.author].avatarURL;
  return {
    id,
    userAvatar,
    authUser,
    question
  };
};

export default withRouter(connect(mapStateToProps)(Poll));

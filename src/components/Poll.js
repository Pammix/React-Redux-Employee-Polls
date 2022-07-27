import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Poll.css';

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
  console.log(props.question.optionOne.text);

  return (
    <div className='wrapper-container'>
      <h1 className='gradient-text'>Poll by {props.question.author} </h1>
      <figure>
        <img className='avatar' src={props.userAvatar} alt='Author Avatar' />
      </figure>
      <h1>Would You Rather </h1>
      <div className='option-container'>
        <button id='option'> {props.question.optionOne.text}</button>
        <button id='option'> {props.question.optionTwo.text}</button>
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

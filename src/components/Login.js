import './Login.css';
import { connect } from 'react-redux';
import { authenticatedUser } from '../actions/authUser';
import { useState } from 'react';
import logo from '../utils/img/poll-logo.png'; // with import

const Login = (props) => {
  const [userSelected, setUserSelected] = useState('sarahedo');
  const [wrongPsw, setWrongPsw] = useState(false);
  let usersList =
    props.UsersIds.length > 0 &&
    props.UsersIds.map((item, i) => {
      return (
        <option key={i} value={item}>
          {item}
        </option>
      );
    }, this);

  const selectUser = (e) => {
    setUserSelected(e.target.value);
  };
  const verifyPassword = () => {
    const input = document.getElementById('password').value;
    const userPassword = props.users[userSelected].password;
    if (input !== userPassword) {
      setWrongPsw(true);
      return;
    } else {
      setWrongPsw(false);
      props.dispatch(authenticatedUser(userSelected));
      props.setToken(true);
    }
  };
  return (
    <div className='login-wrapper'>
      <h1 className='gradient-text'>Employee Polls</h1>
      <figure>
        <img src={logo} alt='Poll' />
      </figure>
      <h3> Log In </h3>
      <form id='loginForm'>
        <label>
          <p>User</p>
          <select name='users' id='users' onChange={selectUser}>
            {usersList}
          </select>
        </label>
        <label>
          <p>Password</p>
          <input id='password' type='password' />
        </label>
        <div className='button-container'>
          <button
            id='btnlogin'
            type='submit'
            onClick={(e) => {
              verifyPassword();
              e.preventDefault();
            }}
          >
            Login
          </button>
        </div>
        {wrongPsw === true && (
          <div className='error-message'>Wrong Password!</div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { UsersIds: Object.keys(users), users: users };
};

export default connect(mapStateToProps)(Login);

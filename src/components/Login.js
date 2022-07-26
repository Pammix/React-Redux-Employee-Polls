import './Login.css';
import { connect } from 'react-redux';
import { authenticatedUser } from '../actions/authUser';
import { useState } from 'react';

const Login = (props) => {
  const [userSelected, setUserSelected] = useState(props.UsersIds[0]);
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
    var input = document.getElementById('password').value;
    const userPassword = props.users[userSelected].password;
    if (input !== userPassword) {
      setWrongPsw(true);
      return;
    } else {
      setWrongPsw(false);
      props.dispatch(authenticatedUser(userSelected));
    }
  };
  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form id='loginForm'>
        <label>
          <p>Username</p>
          <select name='users' id='users' onChange={selectUser}>
            {usersList}
          </select>
        </label>
        <label>
          <p>Password</p>
          <input id='password' type='password' />
        </label>
        <div>
          <button
            id='btnlogin'
            type='submit'
            onClick={(e) => {
              verifyPassword();
              e.preventDefault();
            }}
          >
            Submit
          </button>
          {wrongPsw === true && <div>Wrong Password! Please login again</div>}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { UsersIds: Object.keys(users), users: users };
};

export default connect(mapStateToProps)(Login);

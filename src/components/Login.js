import './Login.css';
import { connect } from 'react-redux';
import { authenticatedUser, handleLogin } from '../actions/authUser';
import { useState } from 'react';
import logo from '../utils/img/poll-logo.png'; // with import
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import authUser from '../reducers/authUser';

const Login = (props) => {
  const navigate = useNavigate();

  const [userSelected, setUserSelected] = useState('sarahedo');

  const [wrongPsw, setWrongPsw] = useState(false);
  /* let usersList =
    props.UsersIds.length > 0 &&
    props.UsersIds.map((item, i) => {
      return (
        <option key={i} value={item}>
          {item}
        </option>
      );
    });
*/
  const handleselectUser = (e) => {
    setUserSelected(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('password').value;
    const userPassword = props.users[userSelected].password;
    if (input !== userPassword) {
      setWrongPsw(true);
      return;
    } else {
      setWrongPsw(false);
      props.dispatch(authenticatedUser(userSelected));
      setUserSelected('');
    }
  };
  return (
    <div className='login-wrapper' data-testid='login-head'>
      <h1 className='gradient-text'>Employee Polls</h1>
      <figure>
        <img src={logo} alt='Poll' />
      </figure>
      <h3> Log In </h3>
      <form id='loginForm' onSubmit={handleSubmit}>
        <label>
          <p>User</p>
          <input
            type='text'
            data-testid='username'
            value={userSelected}
            onChange={handleselectUser}
          ></input>
        </label>
        <label>
          <p>Password</p>
          <input data-testid='password' id='password' type='password' />
        </label>
        <div className='button-container'>
          <input data-testid='submit-btn' id='btnlogin' type='submit' />
        </div>
      </form>
      {wrongPsw === true && (
        <div data-testid='error' className='error-message'>
          Wrong Password!
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { UsersIds: Object.keys(users), users: users };
};

export default connect(mapStateToProps)(Login);

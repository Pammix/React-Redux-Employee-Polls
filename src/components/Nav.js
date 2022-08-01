import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import { logoutAuthUser } from '../actions/authUser';

const Nav = (props) => {
  const { authUser, avatar } = props;

  const logout = (e) => {
    e.preventDefault();
    props.dispatch(logoutAuthUser());
  };
  return (
    <nav>
      <ul>
        <li>
          <Link className='link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='link' to='/add'>
            New Question
          </Link>
        </li>
        <li>
          <Link className='link' to='/board'>
            Leaderboard
          </Link>
        </li>
        <li className='link' id='logout'>
          <button className='logout-btn' onClick={logout}>Logout</button>
        </li>
        <img className='userAvatar' src={avatar} alt='Author Avatar' />
        <span className='username'>{authUser} </span>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authUser, users }) => {
  return { authUser, avatar: users[authUser].avatarURL };
};

export default connect(mapStateToProps)(Nav);

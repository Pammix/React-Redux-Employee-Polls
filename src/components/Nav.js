import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';

const Nav = (props) => {
  console.log(props);
  const { authUser, avatar } = props;
  return (
    <nav>
      <ul>
        <li>
          <Link className='link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='link' to='/new'>
            New Question
          </Link>
        </li>
        <li>
          <Link className='link' to='/board'>
            Leaderboard
          </Link>
        </li>
        <li className='link' id='logout'>
          <a href=''>Logout</a>
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

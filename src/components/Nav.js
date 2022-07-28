import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/'>Home </Link>
        </li>
        <li>
          <Link to='/new'>New Question</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import { useEffect, Fragment } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import NotFoundPage from './NotFoundPage';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Poll from './Poll';

const App = (props) => {
  useEffect(() => {
    if (props.loggedIn) {
      return;
    }
    props.dispatch(handleInitialData());
  });

  if (!props.loggedIn) {
    return <Login/>;
  }
  return (
    <Fragment>
      <div className='container'>
        {props.loggedIn && <Nav />}
        <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/questions/:id' element={<Poll />} />
          <Route path='/add' exact element={<NewPoll />} />
          <Route path='/board' exact element={<Leaderboard />} />
          <Route path='/404' exact element={<NotFoundPage />} />
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authUser }) => {
  return { loggedIn: authUser != null };
};

export default connect(mapStateToProps)(App);

import { useEffect, useState, Fragment } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewPoll from './NewPoll';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Poll from './Poll';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className='container'>
        {props.loading === true ? (
          <Login />
        ) : (
          <>
            <Nav />
            <Routes>
              <Route path='/' exact element={<Dashboard />} />
              <Route path='/questions/:id' element={<Poll />} />
              <Route path='/new' exact element={<NewPoll />} />
              <Route path='/login' exact element={<Login />} />
            </Routes>
          </>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authUser }) => {
  return { loading: authUser === null };
};

export default connect(mapStateToProps)(App);

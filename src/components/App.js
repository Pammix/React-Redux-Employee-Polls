import { useEffect, Fragment } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import { Routes, Route } from 'react-router-dom';
import Poll from './Poll';

const App = (props) => {
  console.log(props);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className='container'>
        {props.loading === true ? (
          <Login />
        ) : (
          <Routes>
            <Route path='/questions' exact element={<Dashboard />} />
            <Route path='/questions/:id' element={<Poll />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authUser }) => {
  return { loading: authUser === null };
};

export default connect(mapStateToProps)(App);

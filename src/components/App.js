import { useEffect } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';

const App = (props) => {
  console.log(props);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return <div>{props.loading === true ? <Login/> : <Dashboard />}</div>;
};

const mapStateToProps = ({ authUser }) => {
  return { loading: authUser === null };
};

export default connect(mapStateToProps)(App);

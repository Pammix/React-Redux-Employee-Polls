import { useState, useEffect } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return <div> Hello World </div>;
};
export default connect()(App);

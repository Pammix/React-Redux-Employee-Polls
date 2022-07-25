import { useState } from 'react';
import { Login } from './Login';

const App = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return <div> Hello World </div>;
};
export default App;

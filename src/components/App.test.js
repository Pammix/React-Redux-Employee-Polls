import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';
import { store } from '../store';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should render the component', () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });
  it('should render the Login component', () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(view.queryByTestId('login-head')).toBeInTheDocument();
  });
});

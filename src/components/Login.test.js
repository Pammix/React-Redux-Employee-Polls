import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { store } from '../store';
import '@testing-library/jest-dom';
import { authenticatedUser } from '../actions/authUser';
import {screen} from '@testing-library/react'

describe('Login', () => {
  it('should render the component', () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  it('will display an error password is wrong', () => {
 render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const selectUserElement = screen.getByTestId('username');

    const passwordInputElement = screen.getByTestId('password');

    const submitButton = screen.getByTestId('submit-btn');

    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(selectUserElement).toBeInTheDocument();
  });

  it('verify value of input field', () => {
   render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const selectUserElement = screen.getByTestId('username');

    const passwordInputElement = screen.getByTestId('password');

    const submitButton = screen.getByTestId('submit-btn');

    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(selectUserElement).toBeInTheDocument();

    fireEvent.change(selectUserElement, {
      target: { value: 'sarahedo' }
    });
    fireEvent.change(passwordInputElement, {
      target: { value: 'password123' }
    });
    expect(selectUserElement.value).toBe('sarahedo');
    expect(passwordInputElement.value).toBe('password123');
  });

  it('Dispatches the correct action and payload', () => {
    store.dispatch(authenticatedUser('sarahedo'));
    expect(store.getState().authUser).toEqual('sarahedo');
  });
});

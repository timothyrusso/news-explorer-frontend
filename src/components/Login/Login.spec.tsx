import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Login from './Login';

describe('Login component', () => {
  it('Should render the Login component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

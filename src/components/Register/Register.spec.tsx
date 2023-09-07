import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Register from './Register';

describe('Register component', () => {
  it('Should render the Register component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

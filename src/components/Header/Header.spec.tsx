import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Header from './Header';

describe('Header component', () => {
  it('Should render the Header component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

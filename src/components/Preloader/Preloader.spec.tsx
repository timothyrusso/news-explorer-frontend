import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Preloader from './Preloader';

describe('Preloader component', () => {
  it('Should render the Preloader component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Preloader />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

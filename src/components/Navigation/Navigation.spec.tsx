import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation component', () => {
  it('Should render the Navigation component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

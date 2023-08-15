import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('Should render the App component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

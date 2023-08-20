import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Main from './Main';

describe('Main component', () => {
  it('Should render the Main component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

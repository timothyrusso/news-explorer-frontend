import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Description from './Description';

describe('Description component', () => {
  it('Should render the Description component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Description />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import InfoTooltip from './InfoTooltip';

describe('InfoTooltip component', () => {
  it('Should render the InfoTooltip component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <InfoTooltip />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

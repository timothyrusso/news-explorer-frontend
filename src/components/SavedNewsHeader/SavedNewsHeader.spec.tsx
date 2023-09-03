import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import SavedNewsHeader from './SavedNewsHeader';

describe('SavedNewsHeader component', () => {
  it('Should render the SavedNewsHeader component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <SavedNewsHeader />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

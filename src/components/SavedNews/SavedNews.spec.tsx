import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import SavedNews from './SavedNews';

describe('SavedNews component', () => {
  it('Should render the SavedNews component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <SavedNews />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

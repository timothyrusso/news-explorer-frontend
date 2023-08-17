import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import FormRedirect from './FormRedirect';

describe('FormRedirect component', () => {
  it('Should render the FormRedirect component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <FormRedirect popupRedirectText={'Example text'} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

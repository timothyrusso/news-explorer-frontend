import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import ProtectedRoute from './ProtectedRoute';
import { mockChildren } from '../PopupWithForm/PopupWithForm.spec';

describe('ProtectedRoute component', () => {
  it('Should render the ProtectedRoute component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ProtectedRoute
          children={mockChildren}
          authToken={'tocken'}
          path={'path'}
        />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

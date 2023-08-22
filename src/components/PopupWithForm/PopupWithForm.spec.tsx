import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import PopupWithForm from './PopupWithForm';
import Input from '../Input/Input';
import PopupServerError from '../PopupServerError/PopupServerError';

const MIN_LENGTH = 5;
const MAX_LENGTH = 20;

const mockChildren = (
  <>
    <Input
      type="email"
      idName="email-input"
      name="email"
      fieldName="field_email"
      placeholder="Enter email"
      minLength={MIN_LENGTH}
      maxLength={MAX_LENGTH}
      value=""
      onChange={jest.fn()}
      errorMessage=""
      labelText="Email"
    />
    <Input
      type="password"
      idName="password-input"
      name="password"
      fieldName="field_password"
      placeholder="Enter password"
      minLength={MIN_LENGTH}
      maxLength={MAX_LENGTH}
      value=""
      onChange={jest.fn()}
      errorMessage=""
      labelText="Password"
    />
    <Input
      type="text"
      idName="username-input"
      name="username"
      fieldName="field_username"
      placeholder="Enter your username"
      minLength={MIN_LENGTH}
      maxLength={MAX_LENGTH}
      value=""
      onChange={jest.fn()}
      errorMessage=""
      labelText="Username"
    />
    <PopupServerError popupServerErrorMessage="" />
  </>
);

describe('PopupWithForm component', () => {
  it('Should render the PopupWithForm component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <PopupWithForm
            name="signup"
            title="Sign up"
            isOpen={true}
            popupRedirectText="popupRedirectText"
            buttonText={'Sign up'}
            loadingText={'Saving..'}
            isLoadingText={false}
            onSubmit={jest.fn()}
          >
            {mockChildren}
          </PopupWithForm>
        </Router>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

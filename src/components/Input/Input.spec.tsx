import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Input from './Input';

describe('Input component', () => {
  it('Should render the Input component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Input
          type="text"
          idName="testId"
          name="testName"
          fieldName="testField"
          placeholder="testPlaceholder"
          onChange={jest.fn()}
          minLength={10}
          maxLength={20}
          value="testValue"
          errorMessage={{ testName: 'Error message for testing' }}
          labelText="Test Label"
        />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

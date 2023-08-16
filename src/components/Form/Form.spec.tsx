import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Form from './Form';

describe('Footer component', () => {
  it('Should render the Footer component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Form name={'myForm'} onSubmit={jest.fn()}>
          <input type="text" placeholder="Mock Input" />
          <button type="submit">Submit</button>
        </Form>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

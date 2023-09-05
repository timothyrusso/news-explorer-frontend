import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('Should render the SearchForm component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

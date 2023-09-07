import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import NewsCardList from './NewsCardList';
import { mockState } from './fixtures/mockStore';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('NewsCardList component', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector(mockState)
    );
  });

  it('Should render the NewsCardList component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <NewsCardList />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import NewsCard from './NewsCard';

const SavedArticle = {
  _id: '_id',
  keyword: 'string',
  title: 'string',
  text: 'string',
  date: 'dd-mm-yyyy',
  source: 'string',
  link: 'string',
  image: 'string',
  __v: 1,
};

describe('NewsCard component', () => {
  it('Should render the NewsCard component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <NewsCard key="_id" card={SavedArticle} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

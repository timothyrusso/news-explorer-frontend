import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NothingFound from './NothingFound';

describe('NothingFound component', () => {
  it('Should render the NothingFound component', () => {
    const { asFragment } = render(
      <Router>
        <NothingFound
          title="Nothing found"
          text="Sorry, but nothing matched your search terms."
          nothingFoundIcon="nothingFoundIcon_path"
        />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

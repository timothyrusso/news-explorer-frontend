import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

describe('Footer component', () => {
  it('Should render the Footer component', () => {
    const { asFragment } = render(
      <Router>
        <Footer />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

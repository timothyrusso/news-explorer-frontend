import React from 'react';
import { RenderResult, render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('Should render the App component', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import PopupServerError from './PopupServerError';

describe('PopupServerError component', () => {
  it('Should render the PopupServerError component', () => {
    const { asFragment } = render(
      <PopupServerError popupServerErrorMessage="Message" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

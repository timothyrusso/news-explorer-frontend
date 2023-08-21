import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Popup from './Popup';

const mockChild = (
  <>
    <h2 className="popup__title">Mock Title</h2>
    <div>Actual Content Here</div>
    <button
      type="submit"
      className="submit-button popup__button"
      aria-label="Mock Submit"
    >
      Mock Button Text
    </button>
    <div>Mocked FormRedirect Component</div>
  </>
);

describe('Popup component', () => {
  it('Should render the Popup component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Popup isOpen={true} name="name" infoTooltip={false}>
            {mockChild}
          </Popup>
        </Router>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

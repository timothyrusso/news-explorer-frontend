import React, { useEffect, FC } from 'react';
import { usePopup } from '../../hooks/usePopup';
import './Popup.css';

type PopupProps = {
  isOpen: boolean;
  name?: string;
  infoTooltip: boolean;
  children: React.ReactNode;
};

const Popup: FC<PopupProps> = ({ isOpen, name, infoTooltip, children }) => {
  const { closeAllPopups } = usePopup();
  // here is `useEffect` for the `Escape` listener
  useEffect(() => {
    // with this we prevent adding the listener if the popup is not opened
    if (!isOpen) return;
    // we should define the handler inside `useEffect`, so that it wouldn’t lose the reference to be able to remove it
    const closeByEscape = (evt: Event) => {
      if ((evt as KeyboardEvent).key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    // don’t forget to remove the listener in the `clean-up` function
    return () => document.removeEventListener('keydown', closeByEscape);
    // here we watch `isOpen` to add the listener only when it’s opened
  }, [isOpen, closeAllPopups]);

  // here is the overlay handler
  const handleOverlay = (evt: React.MouseEvent) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  // then we add the main wrapper with class `popup` and `popup_opened`
  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''} popup_type_${name}`}
      onClick={handleOverlay}
    >
      {/* the container for the contents */}
      <div className="popup__container">
        {/* here will be anything you add as `children`*/}
        {children}
        {/* add the close button */}
        <button
          aria-label={`Close ${name} popup`}
          type="button"
          className={`close-button ${
            infoTooltip ? 'close-button_type_info' : ''
          }`}
          onClick={closeAllPopups}
        />
      </div>
    </div>
  );
};

export default Popup;

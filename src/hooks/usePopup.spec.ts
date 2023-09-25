import { renderHook, act } from '@testing-library/react';
import { usePopup } from './usePopup';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInfoTooltipClosedAction,
  setIsSigninPopupClosedAction,
  setIsSignupPopupClosedAction,
  setIsSignupPopupOpenAction,
} from '../store/toggles/toggles.actions';
import {
  removeErrorMessageAction,
  setIsFormValidityTrueAction,
  setPopupserverErrorMessageAction,
} from '../store/errors/errors.actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('usePopup', () => {
  let mockDispatch: jest.Mock;
  const mockedUseDispatch = useDispatch as jest.Mock;
  const mockedUseSelector = useSelector as jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should close all popups', () => {
    const { result } = renderHook(() => usePopup());

    act(() => {
      result.current.closeAllPopups();
    });

    expect(mockDispatch).toHaveBeenCalledWith(setIsSigninPopupClosedAction());
    expect(mockDispatch).toHaveBeenCalledWith(setIsSignupPopupClosedAction());
    expect(mockDispatch).toHaveBeenCalledWith(setInfoTooltipClosedAction());
    expect(mockDispatch).toHaveBeenCalledWith(
      setPopupserverErrorMessageAction('')
    );
  });

  it('should handle signin popup click', () => {
    const { result } = renderHook(() => usePopup());

    act(() => {
      result.current.handleSigninPopupClick();
    });

    expect(mockDispatch).toHaveBeenCalledWith(setIsFormValidityTrueAction());
    expect(mockDispatch).toHaveBeenCalledWith(removeErrorMessageAction());
  });

  it('should handle switch popup', () => {
    mockedUseSelector.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const { result } = renderHook(() => usePopup());

    act(() => {
      result.current.handleSwitchPopup();
    });

    expect(mockDispatch).toHaveBeenCalledWith(setIsSigninPopupClosedAction());
    expect(mockDispatch).toHaveBeenCalledWith(setIsSignupPopupOpenAction());
  });
});

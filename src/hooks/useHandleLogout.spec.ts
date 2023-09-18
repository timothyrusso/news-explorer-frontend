import { renderHook, act } from '@testing-library/react';
import { useHandleLogout } from './useHandleLogout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsLoggedinFalseAction } from '../store/toggles/toggles.actions';
import { logoutUserAction } from '../store/user/user.actions';
import { removeAllSavedArticlesAction } from '../store/article/article.actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('useHandleLogout', () => {
  let mockDispatch: jest.Mock;
  let mockNavigate: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockNavigate = jest.fn();

    jest.mocked(useDispatch).mockReturnValue(mockDispatch);
    jest.mocked(useNavigate).mockReturnValue(mockNavigate);

    jest.spyOn(window.localStorage.__proto__, 'removeItem');
    jest.mocked(localStorage.removeItem).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.mocked(localStorage.removeItem).mockRestore();
  });

  it('should handle logout', () => {
    const { result } = renderHook(() => useHandleLogout());

    act(() => {
      result.current.handleLogout();
    });

    expect(mockDispatch).toHaveBeenCalledWith(setIsLoggedinFalseAction());
    expect(mockNavigate).toHaveBeenCalledWith('/');
    expect(localStorage.removeItem).toHaveBeenCalledWith('jwt');
    expect(mockDispatch).toHaveBeenCalledWith(logoutUserAction({}));
    expect(mockDispatch).toHaveBeenCalledWith(removeAllSavedArticlesAction());
  });
});

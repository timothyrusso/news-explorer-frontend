import { renderHook, act } from '@testing-library/react';
import { useAuthenticationApi } from './useAuthenticationApi';
import * as MainApi from '../utils/MainApi';
import { useDispatch } from 'react-redux';

jest.mock('../utils/MainApi');
jest.mock('react-redux');

describe('useAuthenticationApi', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle register submit', () => {
    jest.mocked(MainApi.register).mockResolvedValue({ data: { _id: '123' } });

    const { result } = renderHook(() =>
      useAuthenticationApi('test@email.com', 'password123', 'username123')
    );

    act(() => {
      result.current.handleRegisterSubmit();
    });

    expect(MainApi.register).toHaveBeenCalledWith(
      'test@email.com',
      'password123',
      'username123'
    );
  });

  it('should handle login submit', () => {
    jest.mocked(MainApi.authorize).mockResolvedValue({ token: 'testToken' });

    const { result } = renderHook(() =>
      useAuthenticationApi('test@email.com', 'password123')
    );

    act(() => {
      result.current.handleLoginSubmit();
    });

    expect(MainApi.authorize).toHaveBeenCalledWith(
      'password123',
      'test@email.com'
    );
  });

  it('should handle token check', () => {
    localStorage.setItem('jwt', 'testToken');
    jest.mocked(MainApi.checkToken).mockResolvedValue(true);

    const { result } = renderHook(() => useAuthenticationApi());

    act(() => {
      result.current.handleTokenCheck();
    });

    expect(MainApi.checkToken).toHaveBeenCalledWith('testToken');
  });
});

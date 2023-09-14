import { renderHook, act } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useCheckValidityInput } from './useCheckInputValidity';
import { setErrorMessageAction } from '../store/errors/errors.actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('useCheckValidityInput', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch setErrorMessageAction with updated error message', () => {
    const errorMessage = {
      email: '',
      password: '',
    };

    const { result } = renderHook(() => useCheckValidityInput(errorMessage));

    const mockEvent = {
      target: {
        name: 'email',
        validationMessage: 'Email is required',
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.checkValidity(mockEvent);
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      setErrorMessageAction({
        ...errorMessage,
        email: 'Email is required',
      })
    );
  });
});

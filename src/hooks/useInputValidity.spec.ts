import { renderHook, act } from '@testing-library/react';
import { useInputValidity } from './useInputValidity';
import { useCheckValidityInput } from './useCheckInputValidity';

jest.mock('./useCheckInputValidity');

describe('useInputValidity', () => {
  let mockCheckValidity: jest.Mock;
  let mockSetter: jest.Mock;

  beforeEach(() => {
    mockCheckValidity = jest.fn();
    mockSetter = jest.fn();

    jest.mocked(useCheckValidityInput).mockReturnValue({
      checkValidity: mockCheckValidity,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle input change', () => {
    const mockErrorMessage = { email: '', password: '' };
    const { result } = renderHook(() => useInputValidity(mockErrorMessage));

    const mockEvent = {
      target: {
        value: 'testValue',
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleInputChange(mockEvent, mockSetter);
    });

    expect(mockCheckValidity).toHaveBeenCalledWith(mockEvent);
    expect(mockSetter).toHaveBeenCalledWith('testValue');
  });
});

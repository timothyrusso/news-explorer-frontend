import { renderHook } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useAppSelector } from './useAppSelector';
import { mockState } from './fixtures/mockStore';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('useAppSelector hook', () => {
  it('should select data from the store', () => {
    (useSelector as jest.Mock).mockImplementation((callback) =>
      callback(mockState)
    );

    const { result } = renderHook(() => useAppSelector((state) => state));

    expect(result.current).toEqual(mockState);
  });
});

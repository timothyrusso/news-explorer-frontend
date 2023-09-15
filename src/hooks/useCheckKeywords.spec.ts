import { renderHook, act } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useCheckKeywords } from './useCheckKeywords';
import { setSearchKeywordsListAction } from '../store/user/user.actions';
import { useAppSelector } from './useAppSelector';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('useCheckKeywords', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    jest.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch setSearchKeywordsListAction with sorted keywords', () => {
    const savedArticles = [
      { keyword: 'tech' },
      { keyword: 'science' },
      { keyword: 'tech' },
      { keyword: 'nature' },
      { keyword: 'tech' },
    ];

    jest.mocked(useAppSelector).mockReturnValue(savedArticles);

    const { result } = renderHook(() => useCheckKeywords());

    act(() => {
      result.current.checkKeywords();
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      setSearchKeywordsListAction(['tech', 'science', 'nature'])
    );
  });
});

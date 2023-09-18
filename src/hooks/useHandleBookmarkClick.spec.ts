import { renderHook, act } from '@testing-library/react';
import { useHandleBookmarkClick } from './useHandleBookmarkClick';
import { useArticleApi } from './useArticleApi';
import { Article, SavedArticle } from './fixtures/mockStore';

jest.mock('./useArticleApi');

describe('useHandleBookmarkClick', () => {
  let mockHandleSaveArticles: jest.Mock;
  let mockHandleDeleteArticles: jest.Mock;
  let mockCheckSavedArticle: jest.Mock;

  beforeEach(() => {
    mockHandleSaveArticles = jest.fn();
    mockHandleDeleteArticles = jest.fn();
    mockCheckSavedArticle = jest.fn();

    jest.mocked(useArticleApi).mockReturnValue({
      handleSaveArticles: mockHandleSaveArticles,
      handleDeleteArticles: mockHandleDeleteArticles,
      checkSavedArticle: mockCheckSavedArticle,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call handleSaveArticles when article is not saved', () => {
    mockCheckSavedArticle.mockReturnValue(false);

    const { result } = renderHook(() => useHandleBookmarkClick());

    act(() => {
      result.current.handleBookmarkClick(Article);
    });

    expect(mockHandleSaveArticles).toHaveBeenCalledWith(Article);
    expect(mockHandleDeleteArticles).not.toHaveBeenCalled();
  });

  it('should call handleDeleteArticles when article is saved', () => {
    mockCheckSavedArticle.mockReturnValue(SavedArticle);

    const { result } = renderHook(() => useHandleBookmarkClick());

    act(() => {
      result.current.handleBookmarkClick(Article);
    });

    expect(mockHandleDeleteArticles).toHaveBeenCalledWith(SavedArticle);
    expect(mockHandleSaveArticles).not.toHaveBeenCalled();
  });
});

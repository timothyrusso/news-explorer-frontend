import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useArticleApi } from './useArticleApi';
import { deleteArticles } from '../utils/MainApi';
import { Article, SavedArticle } from './fixtures/mockStore';
import { useAppSelector } from './useAppSelector';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('./useAppSelector', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('../utils/MainApi', () => ({
  deleteArticles: jest.fn(),
}));

const SavedArticles = [SavedArticle, SavedArticle];

describe('useArticleApi hook', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle saving articles', () => {
    const { result } = renderHook(() => useArticleApi());

    result.current.handleSaveArticles(Article);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should handle deleting articles', async () => {
    jest.mocked(deleteArticles).mockResolvedValueOnce({});
    const { result } = renderHook(() => useArticleApi());

    await result.current.handleDeleteArticles(SavedArticle);
    expect(deleteArticles).toHaveBeenCalledWith({
      articleId: SavedArticle._id,
    });
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should check if an article is saved', () => {
    jest.mocked(useAppSelector).mockReturnValue(SavedArticles);
    const { result } = renderHook(() => useArticleApi());

    const savedArticle = result.current.checkSavedArticle(Article);
    expect(savedArticle).toBeDefined();
  });
});

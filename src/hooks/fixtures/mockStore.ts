import { RootState } from '../../store/RootState';

export const Article = {
  source: {
    id: 1,
    name: 'string',
  },
  author: 'string',
  title: 'string',
  description: 'string',
  url: 'string',
  urlToImage: 'string',
  publishedAt: 'string',
  content: 'string',
};

export const SavedArticle = {
  _id: 'string',
  keyword: 'string',
  title: 'string',
  text: 'string',
  date: 'string',
  source: 'string',
  link: 'string',
  image: 'string',
  __v: 1,
};

export const mockState: RootState = {
  user: {
    currentUser: {},
    searchKeyword: '',
    searchKeywordsList: [],
  },
  article: {
    articles: [Article, Article],
    isSavedArticle: false,
    showArticles: false,
    allArticles: [],
    nextThreeArticles: 0,
    savedArticles: [],
    temporarySavedArticle: {},
  },
  toggles: {
    isSigninPopupOpen: false,
    isSignupPopupOpen: false,
    isInfoTooltipOpen: false,
    isLoading: false,
    isLoadingText: false,
    isLoggedin: false,
    isBlackNavbar: false,
    isMobileNavbar: false,
    popupRedirectText: '',
  },
  errors: {
    formValidity: false,
    errorMessage: {},
    genericServerError: false,
    popupServerErrorMessage: '',
  },
};

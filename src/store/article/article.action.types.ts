export enum ARTICLE_ACTION_TYPES {
  FETCH_ARTICLES = 'article/FETCH_ARTICLES',
  SET_SHOW_MORE_ARTICLES = 'article/SET_SHOW_MORE_ARTICLES',
}

export enum ALL_ARTICLES_ACTION_TYPES {
  FETCH_ALL_ARTICLES = 'article/FETCH_ALL_ARTICLES',
}

export enum ISSAVED_ARTICLE_ACTION_TYPES {
  SET_ISSAVED_ARTICLE_TRUE = 'article/SET_ISSAVED_ARTICLE_TRUE',
  SET_ISSAVED_ARTICLE_FALSE = 'article/SET_ISSAVED_ARTICLE_FALSE',
}

export enum SHOW_ARTICLE_ACTION_TYPES {
  SET_SHOW_ARTICLE_TRUE = 'article/SET_SHOW_ARTICLE_TRUE',
  SET_SHOW_ARTICLE_FALSE = 'article/SET_SHOW_ARTICLE_FALSE',
}

export enum NEXT_THREE_ARTICLES_ACTION_TYPES {
  SET_NEXT_THREE_ARTICLES_TO_THREE = 'article/SET_NEXT_THREE_ARTICLES_TO_THREE',
  SET_NEXT_THREE_ARTICLES_TO_PAYLOAD = 'article/SET_NEXT_THREE_ARTICLES_TO_PAYLOAD',
}

export enum SAVED_ARTICLES_ACTION_TYPES {
  SET_SAVED_ARTICLES = 'article/SET_SAVED_ARTICLES',
  REMOVE_SAVED_ARTICLES = 'article/REMOVE_SAVED_ARTICLES',
}

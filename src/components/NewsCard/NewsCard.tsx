import React, { FC, useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { usePopup } from '../../hooks/usePopup';
import { useHandleBookmarkClick } from '../../hooks/useHandleBookmarkClick';
import { useArticleApi } from '../../hooks/useArticleApi';
import { setTemporarySavedArticleAction } from '../../store/article/article.actions';
import { Article } from '../../store/article/article.type';
import { SavedArticle } from '../../store/article/article.type';
import { useAppSelector } from '../../hooks/useAppSelector';
import alternativeBackground from '../../images/header_background.png';
import './NewsCard.css';

type NewsCardProps = {
  card: SavedArticle | Article;
};

const NewsCard: FC<NewsCardProps> = ({ card }) => {
  const [bookmarkStatus, setBookmarkStatus] = useState(false);

  const { handleSigninPopupClick } = usePopup();
  const { handleBookmarkClick } = useHandleBookmarkClick();
  const { handleDeleteArticles, checkSavedArticle } = useArticleApi();

  const isSavedArticle = useAppSelector(
    (state) => state.article.isSavedArticle
  );
  const loggedIn = useAppSelector((state) => state.toggles.isLoggedin);

  const dispatch = useDispatch();

  const saveCard = () => {
    if ('url' in card) handleBookmarkClick(card);
  };

  const deleteCard = () => {
    if ('_id' in card) handleDeleteArticles(card);
  };

  const handleCardSaveUnauthorizedUser = () => {
    if ('url' in card) dispatch(setTemporarySavedArticleAction([card]));
    handleSigninPopupClick();
  };

  const convertDate = (timeStr: string) => {
    var date = new Date(timeStr);
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;

    date.setMonth(month - 1);
    const monthName = date.toLocaleString('default', { month: 'long' });

    var dateStr = monthName + ' ' + day + ', ' + year;

    return dateStr;
  };

  const isUrlInCard = 'urlToImage' in card;
  const isPublishedDataInCard = 'publishedAt' in card;

  const data = useMemo(
    () =>
      convertDate(
        !isSavedArticle && isPublishedDataInCard
          ? card.publishedAt
          : (card as SavedArticle).date
      ),
    [isSavedArticle, isPublishedDataInCard, card]
  );

  const backgroundUrl = useMemo(
    () =>
      !isSavedArticle && isUrlInCard
        ? card.urlToImage
        : (card as SavedArticle).image,
    [isSavedArticle, isUrlInCard, card]
  );

  useEffect(() => {
    if ('url' in card && checkSavedArticle(card)) {
      setBookmarkStatus(true);
    } else {
      setBookmarkStatus(false);
    }
  }, [loggedIn, card, checkSavedArticle]);

  return (
    <li className="card">
      {isSavedArticle && (
        <>
          <div className="card__keyword">
            {'keyword' in card && card.keyword}
          </div>
          <button
            aria-label="Delete"
            type="button"
            className="card__delete"
            onClick={deleteCard}
          ></button>
          <dialog className="card__tooltip card__tooltip_type_delete">
            Remove from saved
          </dialog>
        </>
      )}
      {!isSavedArticle && (
        <>
          <button
            aria-label="Favourite"
            type="button"
            className={`card__favourite ${
              bookmarkStatus ? 'card__favourite_active' : ''
            }`}
            onClick={!loggedIn ? handleCardSaveUnauthorizedUser : saveCard}
          ></button>
          {!loggedIn && (
            <dialog className="card__tooltip">Sign in to save articles</dialog>
          )}
        </>
      )}
      <a
        href={
          !isSavedArticle && 'url' in card
            ? card.url
            : (card as SavedArticle).link
        }
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${
              backgroundUrl != null ? backgroundUrl : alternativeBackground
            })`,
          }}
          // @ts-ignore
          href={
            !isSavedArticle && 'url' in card
              ? card.url
              : (card as SavedArticle).link
          }
        ></div>
      </a>
      <div className="card__content">
        <time className="card__date">{data}</time>
        <a
          href={
            !isSavedArticle && 'url' in card
              ? card.url
              : (card as SavedArticle).link
          }
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <h3 className="card__title">{card.title}</h3>
        </a>
        <a
          href={
            !isSavedArticle && 'url' in card
              ? card.url
              : (card as SavedArticle).link
          }
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <p className="card__text">
            {!isSavedArticle && 'content' in card
              ? card.content
              : (card as SavedArticle).text}
          </p>
        </a>
        <a
          href={
            !isSavedArticle && 'url' in card
              ? card.url
              : (card as SavedArticle).link
          }
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <p className="card__source">
            {!isSavedArticle && typeof card.source !== 'string'
              ? card.source.name
              : card.source.toString()}
          </p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;

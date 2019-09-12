import {
  SET_CURRENT_ITEM,
  SET_CURRENT_PAGE,
  REQUEST_ARTICLES,
  REQUEST_ARTICLE_BY_DATE,
  FILTER_SOURSE,
  RECEIVE_ARTICLES_SUCCESS,
  RECEIVE_ARTICLE_BY_DATE_SUCCESS,
  RECEIVE_ARTICLES_FAILURE,
  RECEIVE_ARTICLE_BY_DATE_FAILURE,
} from './actionTypes';
import { URL } from './APIconf';

export function setCurrentPage(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
}

export function setCurrentItem(currentItem) {
  return {
    type: SET_CURRENT_ITEM,
    currentItem,
  };
}

export function requestArticleByDate(date) {
  return {
    type: REQUEST_ARTICLE_BY_DATE,
    date,
  };
}

export function receiveArticleByDate(date, json) {
  return {
    type: RECEIVE_ARTICLE_BY_DATE_SUCCESS,
    date,
    currentItem: json.articles[0],
  };
}


export function requestArticles() {
  return {
    type: REQUEST_ARTICLES,
  };
}
export function receiveArticles(json) {
  return {
    type: RECEIVE_ARTICLES_SUCCESS,
    items: json.articles,
  };
}

export function receiveArticlesFailure(error) {
  return {
    type: RECEIVE_ARTICLES_FAILURE,
    error,
  };
}
export function receiveArticleByDateFailure(error) {
  return {
    type: RECEIVE_ARTICLE_BY_DATE_FAILURE,
    error,
  };
}
export function filterSource(showSources) {
  return {
    type: FILTER_SOURSE,
    filter: showSources,
  };
}

export function fetchArticlesByTitle(title = '') {
  const params = [
    'pageSize=100',
    `qInTitle=${title}`];
  const url = URL + params.join('&');
  return function doJson(dispatch) {
    dispatch(requestArticles());
    return fetch(url)
      .then((response) => response.json(), () => { throw new Error('Something went wrong'); })
      .then((json) => {
        if (json.status === 'ok') {
          dispatch(receiveArticles(json));
        } else {
          throw new Error(json.message);
        }
      })
      .catch((e) => receiveArticlesFailure(e));
  };
}
export function fetchArticleByDate(date) {
  const params = [
    'pageSize=1',
    `from=${date}`,
    `to=${date}`];
  const url = URL + params.join('&');
  return function doJsonByDate(dispatch) {
    dispatch(requestArticleByDate(date));
    return fetch(url)
      .then((response) => response.json(), () => { throw new Error('Something went wrong'); })
      .then((json) => {
        if (json.status === 'ok') {
          dispatch(receiveArticleByDate(date, json));
        } else {
          throw new Error(json.message);
        }
      })
      .catch((e) => receiveArticleByDateFailure(e));
  };
}

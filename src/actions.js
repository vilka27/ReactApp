import {
  SET_CURRENT_ITEM,
  SET_CURRENT_PAGE,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLE_BY_DATE,
  RECEIVE_ARTICLE_BY_DATE,
  FILTER_SOURSE,
} from './actionTypes';

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
    type: RECEIVE_ARTICLE_BY_DATE,
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
    type: RECEIVE_ARTICLES,
    items: json.articles,
  };
}

export function filterSource(showSources){	
	return{
		type: FILTER_SOURSE,
		filter: showSources,
	}
}

export function fetchArticlesByTitle(title="") {
	 const baseUrl = 'https://newsapi.org/v2/everything?';
	 const domains = [
    'fontanka.ru',
    'lenta.ru',
    'rt.com',
    'nplus1.ru',
    'www.rbc.ru'];
	 const params = ['language=ru',
    'apiKey=568e0f13627645c48300f3fd0bfc0ee0',
    `domains=${domains.join(',')}`,
    'page=1',
    'pageSize=100',
	`qInTitle=${title}`];

	const url = baseUrl + params.join('&');
	return function doJson(dispatch) {
    dispatch(requestArticles());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveArticles(json));
      });
  };
}
export function fetchArticleByDate(date) {
  const baseUrl = 'https://newsapi.org/v2/everything?';
  const domains = [
    'fontanka.ru',
    'lenta.ru',
    'rt.com',
    'nplus1.ru',
    'www.rbc.ru'];
  const params = ['language=ru',
    'apiKey=568e0f13627645c48300f3fd0bfc0ee0',
    `domains=${domains.join(',')}`,
    'page=1',
    'pageSize=1',
    `from=${date}`,
    `to=${date}`];
  const url = baseUrl + params.join('&');
  return function doJsonByDate(dispatch) {
    dispatch(requestArticleByDate(date));
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveArticleByDate(date, json));
      });
  };
}

import { combineReducers } from 'redux';
import { initialState } from './initialState';
import {
  SET_CURRENT_ITEM, SET_CURRENT_PAGE,
  REQUEST_ARTICLES,
  REQUEST_ARTICLE_BY_DATE,
  RECEIVE_ARTICLE_BY_DATE_SUCCESS,
  RECEIVE_ARTICLE_BY_DATE_FAILURE,
  FILTER_SOURSE,
  RECEIVE_ARTICLES_SUCCESS,
  RECEIVE_ARTICLES_FAILURE,
} from './actionTypes';

export function currentPage(state = initialState.currentPage, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.currentPage;
    case FILTER_SOURSE:
    case RECEIVE_ARTICLES_SUCCESS:
      return 1;
    default:
      return state;
  }
}

export function currentItem(state = initialState.currentItem, action) {
  switch (action.type) {
    case SET_CURRENT_ITEM:
      return action.currentItem;
    case RECEIVE_ARTICLE_BY_DATE_SUCCESS:
      return action.currentItem;
    case RECEIVE_ARTICLES_SUCCESS:
    case RECEIVE_ARTICLES_FAILURE:
      return null;
    default:
      return state;
  }
}
export function items(state = initialState.items, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES_SUCCESS:
      return action.items;
    default:
      return state;
  }
}
export function isFetching(state = initialState.isFetching, action) {
  switch (action.type) {
    case REQUEST_ARTICLE_BY_DATE:
    case REQUEST_ARTICLES:
      return true;
    case RECEIVE_ARTICLES_FAILURE:
    case RECEIVE_ARTICLES_SUCCESS:
    case RECEIVE_ARTICLE_BY_DATE_FAILURE:
    case RECEIVE_ARTICLE_BY_DATE_SUCCESS:
      return false;
    default:
      return state;
  }
}

export function pageSize(state = initialState.pageSize) {
  return state;
}

export function sourceFilter(state = initialState.sourceFilter, action) {
  switch (action.type) {
    case FILTER_SOURSE:
      return action.filter.slice();
    case RECEIVE_ARTICLES_SUCCESS:
      return initialState.sourceFilter.slice();
    default:
      return state;
  }
}

export function error(state = initialState.error, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES_FAILURE:
    case RECEIVE_ARTICLE_BY_DATE_FAILURE:
      return action.error;
    case RECEIVE_ARTICLE_BY_DATE_SUCCESS:
    case RECEIVE_ARTICLES_SUCCESS:
      return null;
    default:
      return state;
  }
}
export const reducer = combineReducers({
  currentItem,
  currentPage,
  items,
  isFetching,
  pageSize,
  sourceFilter,
  error,
});

export default reducer;

import { combineReducers } from 'redux';
import {
  SET_CURRENT_ITEM, SET_CURRENT_PAGE,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLE_BY_DATE,
  RECEIVE_ARTICLE_BY_DATE,
} from './actionTypes';

function currentPage(state = 1, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.currentPage;
    default:
      return state;
  }
}

function currentItem(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_ITEM:
      return action.currentItem;
    case RECEIVE_ARTICLE_BY_DATE:
      return action.currentItem;
    case RECEIVE_ARTICLES:
      return null;
    default:
      return state;
  }
}
function items(state = [], action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.items;
    default:
      return state;
  }
}
function isFetching(state = true, action) {
  switch (action.type) {
    case REQUEST_ARTICLE_BY_DATE:
    case REQUEST_ARTICLES:
      return true;
    case RECEIVE_ARTICLES:
    case RECEIVE_ARTICLE_BY_DATE:
      return false;
    default:
      return state;
  }
}

function pageSize(state = 6) {
  return state;
}

export const reducer = combineReducers({
  currentItem,
  currentPage,
  items,
  isFetching,
  pageSize,
});

export default reducer;

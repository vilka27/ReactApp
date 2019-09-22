import { testResponse } from './testResponse';
import { initialState } from './initialState';
import { reducer } from './reducers';
import {
  SET_CURRENT_ITEM,
  SET_CURRENT_PAGE,
  REQUEST_ARTICLES,
  REQUEST_ARTICLE_BY_DATE,
  RECEIVE_ARTICLE_BY_DATE_SUCCESS,
  RECEIVE_ARTICLE_BY_DATE_FAILURE,
  FILTER_SOURSE,
  RECEIVE_ARTICLES_SUCCESS,
  RECEIVE_ARTICLES_FAILURE,
} from './actionTypes';

describe('combined reducer', () => {
  const exampleItems = testResponse.articles;
  const initialSourceFilter = initialState.sourceFilter;
  const someState = {
    currentItem: null,
    currentPage: 2,
    items: exampleItems,
    isFetching: false,
    pageSize: 6,
    sourceFilter: initialSourceFilter.slice(0, 1),
    error: null,
  };
  const someError = new Error('something went wrong');
  const someFilter = initialState.sourceFilter.slice(0, 2);
  test('RECEIVE_ARTICLES_SUCCESS action', () => {
    const action = {
      type: RECEIVE_ARTICLES_SUCCESS,
      items: exampleItems,
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      currentPage: 1,
      items: exampleItems,
      isFetching: false,
      error: null,
      currentItem: null,
      sourceFilter: initialSourceFilter,
    });
  });
  test('RECEIVE_ARTICLES_FAILURE action', () => {
    const action = {
      type: RECEIVE_ARTICLES_FAILURE,
      error: someError,
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      error: someError,
      isFetching: false,
      currentItem: null,
    });
  });
  test('REQUEST_ARTICLES action', () => {
    const action = {
      type: REQUEST_ARTICLES,
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      isFetching: true,
      currentItem: null,
    });
  });
  test('REQUEST_ARTICLE_BY_DATE action', () => {
    const action = {
      type: REQUEST_ARTICLE_BY_DATE,
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      isFetching: true,
    });
  });
  test('RECEIVE_ARTICLE_BY_DATE_SUCCES action', () => {
    const action = {
      type: RECEIVE_ARTICLE_BY_DATE_SUCCESS,
      currentItem: exampleItems[0],
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      isFetching: false,
      currentItem: exampleItems[0],
      error: null,
    });
  });
  test('RECEIVE_ARTICLE_BY_DATE_FAILURE action', () => {
    const action = {
      type: RECEIVE_ARTICLE_BY_DATE_FAILURE,
      error: someError,
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      isFetching: false,
      error: someError,
    });
  });
  test('FILTER_SOURCE action', () => {
    const action = {
      type: FILTER_SOURSE,
      filter: someFilter,
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      sourceFilter: someFilter,
      currentPage: 1,
    });
  });
  test('SET_CURRENT_PAGE action', () => {
    const action = {
      type: SET_CURRENT_PAGE,
      currentPage: 3,
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      currentPage: 3,
    });
  });
  test('SET_CURRENT_ITEM action', () => {
    const action = {
      type: SET_CURRENT_ITEM,
      currentItem: exampleItems[0],
    };
    expect(reducer(someState, action)).toEqual({
      ...someState,
      currentItem: exampleItems[0],
    });
  });

});

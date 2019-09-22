import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { testResponse, testResponseError, testResponseByDate } from './testResponse';
import {
  fetchArticlesByTitle,
  requestArticles,
  receiveArticles,
  receiveArticlesFailure,
  fetchArticleByDate,
  requestArticleByDate,
  receiveArticleByDate,
  receiveArticleByDateFailure,
} from './actions';
import URL from './APIconf';

const middlewares = [thunkMiddleware];
const mockStoretest = configureStore(middlewares);

test('', () => {
  expect(true).toEqual(true);
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  describe('fetchArticles', () => {
    const title = '';
    const params = [
      'pageSize=100',
      `qInTitle=${title}`];
    const matcher = URL + params.join('&');
    test('success no arguments', () => {
      const responseOk = testResponse;
      fetchMock.mock(matcher, responseOk);
      const expectedActions = [requestArticles(), receiveArticles(responseOk)];
      const store = mockStoretest({});

      store.dispatch(fetchArticlesByTitle()).then(() => {
        expect(store.getActions).toEqual(expectedActions);
      });
    });
    test(' error no arguments', () => {
      const responseError = testResponseError;
      fetchMock.mock(matcher, responseError);
      const expectedActions = [requestArticles(),
        receiveArticlesFailure(new Error(responseError.message))];
      const store = mockStoretest({});
      store.dispatch(fetchArticlesByTitle()).then(() => {
        expect(store.getActions).toEqual(expectedActions);
      });
    });
  });
  describe('fetchArticleByDate', () => {
    const date = testResponseByDate.articles[0].publishedAt;
    const params = [
      'pageSize=1',
      `from=${date}`,
      `to=${date}`];
    const matcher = URL + params.join('&');
    test('sucess', () => {
      const responseOk = testResponseByDate;
      fetchMock.mock(matcher, responseOk);
      const expectedActions = [requestArticleByDate(date), receiveArticleByDate(date, responseOk)];
      const store = mockStoretest({});
      store.dispatch(fetchArticleByDate(date)).then(() => {
        expect(store.getActions).toEqual(expectedActions);
      });
    });
    test('error', () => {
      const responseError = testResponseError;
      fetchMock.mock(matcher, responseError);
      const expectedActions = [
        requestArticles(date),
        receiveArticleByDateFailure(new Error(responseError.message))];
      const store = mockStoretest({});
      store.dispatch(fetchArticleByDate(date)).then(() => {
        expect(store.getActions).toEqual(expectedActions);
      });
    });
  });
});

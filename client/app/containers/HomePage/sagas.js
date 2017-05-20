import { takeLatest, delay } from 'redux-saga';
import { fork, call, put, select } from 'redux-saga/effects';

import {
  SEARCH_UPDATE,
  RESULTS_FETCH,
} from './constants';
import { fetchResults, receiveResults } from './actions';
import { makeSelectQuery } from './selectors'
import { searchPostcode } from './services';

function* doUpdateSearch(action) {
  yield call(delay, 500)

  if (action.payload.query.length >= 3 && action.payload.query.length < 5) {
    yield put(fetchResults())
  }
}

function* doFetch() {
  const query = yield select(makeSelectQuery())
  const { response, error } = yield call(searchPostcode, query);

  if (response) {
    yield put(receiveResults(response));
  }
}

function* root() {
  yield fork(takeLatest, SEARCH_UPDATE, doUpdateSearch);
  yield fork(takeLatest, RESULTS_FETCH, doFetch);
}

export default [
  root,
];

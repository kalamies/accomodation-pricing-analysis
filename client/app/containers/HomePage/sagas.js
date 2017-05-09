import { takeLatest, delay } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import {
  SEARCH_UPDATE,
} from './constants';
import { receiveListings } from './actions';
import { getByPostCode } from './services';
import * as schemas from 'schema';

function* doUpdateSearch(action) {
  yield call(delay, 500)

  if (action.payload.query.length >= 5) {
    const { response, error } = yield call(getByPostCode, action.payload.query);

    if (response) {
      yield put(receiveListings(normalize(response, schemas.listings)));
    }
  }
}

function* root() {
  yield fork(takeLatest, SEARCH_UPDATE, doUpdateSearch);
}

export default [
  root,
];

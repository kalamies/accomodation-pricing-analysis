import { takeLatest } from 'redux-saga';
import { fork, call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr'

import {
  LISTINGS_FETCH,
} from './constants';
import * as schema from './schema'
import * as listingActions from './actions';
import { getListings } from './services';

function* doFetch(action) {
  const { response, error } = yield call(getListings, action.payload.postcode);

  if (response) {
    const { result, entities } = normalize(response, schema.listings)
    yield put(listingActions.receiveListings(entities, result));
  }
}

function* root() {
  yield fork(takeLatest, LISTINGS_FETCH, doFetch);
}

export default [
  root,
];

import { createAction } from 'redux-actions'

import {
  SEARCH_UPDATE,
  RESULTS_FETCH,
  RESULTS_RECEIVE,
} from './constants';

export const updateSearch = createAction(SEARCH_UPDATE, (query) => ({
  query,
}));

export const fetchResults = createAction(RESULTS_FETCH)

export const receiveResults = createAction(RESULTS_RECEIVE, (results) => ({
  results,
}));

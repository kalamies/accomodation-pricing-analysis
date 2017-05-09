import { createAction } from 'redux-actions'

import {
  SEARCH_UPDATE,
  LISTINGS_RECEIVE,
} from './constants';

export const updateSearch = createAction(SEARCH_UPDATE, (query) => ({
  query,
}));

export const receiveListings = createAction(LISTINGS_RECEIVE, (normalized) => ({
  ...normalized,
}));

import { createAction } from 'redux-actions'

import {
  LISTINGS_FETCH,
  LISTINGS_RECEIVE,
} from './constants';

export const fetchListings = createAction(LISTINGS_FETCH, (postcode) => ({
  postcode,
}))

export const receiveListings = createAction(LISTINGS_RECEIVE, (entities, result) => ({
  entities,
  result,
}))

import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'

import * as schema from './schema'

export const makeSelectListingsState = () => (state) => state.get('listings')

export const makeSelectFetching = () => createSelector(
  makeSelectListingsState(),
  (substate) => substate.get('fetching')
)

export const makeSelectResult = () => createSelector(
  makeSelectListingsState(),
  (substate) => substate.get('result')
)

export const makeSelectEntities = () => createSelector(
  makeSelectListingsState(),
  (substate) => substate.get('entities')
)

export const makeSelectListings = () => createSelector(
  makeSelectEntities(),
  makeSelectResult(),
  (entities, result) => denormalize(result, schema.listings, entities)
)

import { createSelector } from 'reselect';

export const makeSelectSearchData = () => (state) => state.get('search');

export const makeSelectQuery = () => createSelector(
  makeSelectSearchData(),
  (substate) => substate.get('query')
);

export const makeSelectFetching = () => createSelector(
  makeSelectSearchData(),
  (substate) => substate.get('fetching')
);

export const makeSelectResult = () => createSelector(
  makeSelectSearchData(),
  (substate) => substate.get('result')
);

export const makeSelectEntities = () => createSelector(
  makeSelectSearchData(),
  (substate) => substate.get('entities')
);

export const makeSelectListings = () => createSelector(
  makeSelectResult(),
  makeSelectEntities(),
  (results, entities) => results.map((id) => entities.listing[id])
);

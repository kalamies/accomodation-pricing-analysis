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

export const makeSelectResults = () => createSelector(
  makeSelectSearchData(),
  (substate) => substate.get('results')
);

import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SEARCH_UPDATE,
  RESULTS_FETCH,
  RESULTS_RECEIVE,
} from './constants';

const initialState = fromJS({
  query: '',
  fetching: false,
  results: [],
});

export const reducer = handleActions({
  [SEARCH_UPDATE]: (state, action) => (
    state
      .set('query', action.payload.query)
      .set('results', fromJS([]))
  ),

  [RESULTS_FETCH]: (state) => (
    state
      .set('fetching', true)
  ),

  [RESULTS_RECEIVE]: (state, action) => (
    state
      .set('fetching', false)
      .set('results', fromJS(action.payload.results))
  ),
}, initialState);

export default reducer;

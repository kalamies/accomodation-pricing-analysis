import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SEARCH_UPDATE,
  LISTINGS_RECEIVE,
} from './constants';

const initialState = fromJS({
  query: '',
  fetching: false,
  result: [],
  entities: {},
});

export const reducer = handleActions({
  [SEARCH_UPDATE]: (state, action) => (
    state
      .set('query', action.payload.query)
      .set('fetching', true)
  ),

  [LISTINGS_RECEIVE]: (state, action) => (
    state
      .set('fetching', false)
      .set('result', Object.keys(action.payload.result))
      .set('entities', action.payload.entities)
  ),
}, initialState);

export default reducer;

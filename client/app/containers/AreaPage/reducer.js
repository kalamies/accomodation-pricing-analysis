import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  LISTINGS_FETCH,
  LISTINGS_RECEIVE,
} from './constants';

const initialState = fromJS({
  fetching: false,
  entities: {},
  result: [],
});

export const reducer = handleActions({
  [LISTINGS_FETCH]: (state) => (
    state
      .set('fetching', true)
  ),

  [LISTINGS_RECEIVE]: (state, action) => (
    state
      .set('fetching', false)
      .set('entities', fromJS(action.payload.entities))
      .set('result', fromJS(action.payload.result))
  ),
}, initialState);

export default reducer;

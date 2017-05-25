import { getAsyncInjectors } from './utils/asyncInjectors';

import searchSaga from './containers/HomePage/sagas';
import listingSaga from './containers/AreaPage/sagas';

export function injectGlobalSagas(store) {
  const { injectSagas } = getAsyncInjectors(store);

  injectSagas(searchSaga);
  injectSagas(listingSaga);
}

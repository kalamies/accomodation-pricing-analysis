import { getAsyncInjectors } from './utils/asyncInjectors';

import searchSaga from './containers/HomePage/sagas';

export function injectGlobalSagas(store) {
  const { injectSagas } = getAsyncInjectors(store);

  injectSagas(searchSaga);
}

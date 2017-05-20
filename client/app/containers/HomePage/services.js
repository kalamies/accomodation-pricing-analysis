import { callApi } from 'utils/api';

export const searchPostcode = (query) => callApi(`/postcodes?q=${query}`);

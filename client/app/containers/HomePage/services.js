import { callApi } from 'utils/api';

export const getByPostCode = (code) => callApi(`/data/postcode/${code}`);

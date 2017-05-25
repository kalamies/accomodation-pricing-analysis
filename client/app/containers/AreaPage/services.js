import { callApi } from 'utils/api'

export const getListings = (postcode) => callApi(`/data/postcode/${postcode}`)

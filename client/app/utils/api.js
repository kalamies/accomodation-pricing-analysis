import fetch from 'isomorphic-fetch';

const API_ROOT = 'http://localhost:3000';

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  }

  return response.json().then((json) => (
    Promise.reject({
      response,
      json,
    })
  ));
}

function parseJSON(response) {
  return response.json();
}

/**
 * Fetches an API response and normalizes the result JSON according to schema.
 */
export function callApi(endpoint, options = {}) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(
      (response) => ({ response }),
      (error) => ({
        error: {
          error: 'fail!',
        },
      })
    );
}

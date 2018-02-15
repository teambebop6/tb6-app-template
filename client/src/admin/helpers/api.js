/**
 * Created by Henry Huang.
 */
export const callApi = (endpoint, data) => {

  // ALL are POST now
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response => (
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return Promise.resolve(json);
    })
  ))

};
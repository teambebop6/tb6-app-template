/**
 * Created by Henry Huang.
 */
export const post = (endpoint, data) => fetch(endpoint, {
  method: 'POST',
  body: JSON.stringify(data),
}).then(response => (
  response.json().then(json => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return Promise.resolve(json);
  })
));

export const get = (endpoint) => {
  console.log(endpoint);
  return fetch(endpoint).then(response => {
    console.log(response);
    return response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return Promise.resolve(json);
    })
  })
};
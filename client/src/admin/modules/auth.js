/**
 * Created by Henry Huang.
 */
import { callApi } from '../helpers/api';

export const AUTH_REQUESTED = 'auth/AUTH_REQUESTED';
export const AUTH_ALLOWED = 'auth/AUTH_ALLOWED';
export const AUTH_DECLINED = 'auth/AUTH_DECLINED';

const initialState = {
  isAuthenticating: false,
  authenticated: false,
};

export const authenticate = (username, password) => {
  return dispatch => {
    dispatch({
      type: AUTH_REQUESTED,
    });
    return callApi('/api/auth/login', {
      username,
      password,
    }).then((json) => {
      dispatch({
        type: AUTH_ALLOWED,
      });
      // TODO use token
      localStorage.setItem('admin', 'admin');
    }).catch((error) => {
      dispatch({
        type: AUTH_DECLINED,
      })
    })
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUESTED:
      return {
        ...state,
        isChecking: true,
      };
    case AUTH_ALLOWED:
      return {
        ...state,
        isChecking: false,
        authenticated: true,
      };
    case AUTH_DECLINED:
      return {
        ...state,
        isChecking: false,
        authenticated: false,
      };
    default:
      return state
  }
}
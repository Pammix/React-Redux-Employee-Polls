import { AUTHENTICATED_USER, LOGOUT_AUTH_USER } from '../actions/authUser';

export default function authUser(state = null, action) {
  switch (action.type) {
    case AUTHENTICATED_USER:
      return action.authUser;
    case LOGOUT_AUTH_USER:
      return null;
    default:
      return state;
  }
}

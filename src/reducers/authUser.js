import { AUTHENTICATED_USER } from '../actions/authUser';

export function authUser(state = null, action) {
  switch (action.type) {
    case AUTHENTICATED_USER:
      return action.authUser;
    default:
      return state;
  }
}

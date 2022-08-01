export const AUTHENTICATED_USER = 'AUTHENTICATED_USER';
export const LOGOUT_AUTH_USER = 'LOGOUT_AUTHED_USER';

export function authenticatedUser(authUser) {
  return {
    type: AUTHENTICATED_USER,
    authUser
  };
}

export function logoutAuthUser() {
  return {
    type: LOGOUT_AUTH_USER
  };
}

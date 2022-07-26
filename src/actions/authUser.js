export const AUTHENTICATED_USER = 'AUTHENTICATED_USER';

export function authenticatedUser(authUser) {
  return {
    type: AUTHENTICATED_USER,
    authUser
  };
}

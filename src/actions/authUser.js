const AUTHENTICATED_USER = 'AUTHENTICATED_USER';

export function authenticatedUser(user) {
  return {
    type: AUTHENTICATED_USER,
    user
  };
}

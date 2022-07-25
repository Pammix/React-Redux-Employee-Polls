import './Login.css';

export function Login() {
  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <select name='users' id='users'>
            <option value='select_user' disabled>
              Select user :
            </option>
          </select>
        </label>
        <label>
          <p>Password</p>
          <input type='password' />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

import { connect } from 'react-redux';
import './Leaderboard.css';
const Leaderboard = ({ users }) => {
  console.log(users);
  return (
    <div className='wrapper-container'>
      <h1 className='gradient-text'>Leaderboard</h1>
      <table className='table-board'>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th className=''>Created</th>
          </tr>
        </thead>
        <tbody className=''>
          {users.map((user) => (
            <tr key={user.id}>
              <td className=''>{user.id}</td>
              <td className=''>{Object.keys(user.answers).length}</td>
              <td className=''>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => (Object.keys(b.answers).length + Object.keys(b.questions).length) - (Object.keys(a.answers).length + Object.keys(a.questions).length)
  )
});

export default connect(mapStateToProps)(Leaderboard);

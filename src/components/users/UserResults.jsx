// import { useContext } from 'react';
// import Spinner from '../layout/Spinner';
// import UserItem from '../users/UserItem';
// import GithubContext from '../../context/github/GithubContext';

// function UserResults() {
//   const { users, loading } = useContext(GithubContext);

//   if (!loading) {
//     return (
//       <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
//         {users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   } else {
//     return <Spinner />;
//   }
// }

// export default UserResults;

// import { useContext } from 'react';
// import Spinner from '../layout/Spinner';
// import UserItem from '../users/UserItem';
// import GithubContext from '../../context/github/GithubContext';

// function UserResults() {
//   const { users, loading } = useContext(GithubContext);

//   if (!loading) {
//     return (
//       <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
//         {users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   } else {
//     return <Spinner />;
//   }
// }

// export default UserResults;

import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from '../users/UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  // Log the value of users to debug
  console.log('users:', users);

  // Check if users is an array
  if (!Array.isArray(users)) {
    console.error('Expected users to be an array, but got:', typeof users);
    return null; // Or handle the error as appropriate
  }

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

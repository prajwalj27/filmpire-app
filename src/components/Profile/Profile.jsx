import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
    </div>
  );
}

export default Profile;

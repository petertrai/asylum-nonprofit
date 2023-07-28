import { useAuth0 } from '@auth0/auth0-react';

import React from 'react';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <div
      style={{
        color: '#E2F0F7',
        backgroundColor: '#404C4A',
        cursor: 'pointer',
      }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </div>
  );
}

export default LogoutButton;

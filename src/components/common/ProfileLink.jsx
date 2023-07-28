import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import AuthButton from './AuthButton';

function ProfileLink() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
      }}
    >
      <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
        Profile Page
      </Link>
      <AuthButton />
    </div>
  );
}

export default ProfileLink;

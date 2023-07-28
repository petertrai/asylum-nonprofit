import AuthButton from './AuthButton';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileLink from './ProfileLink';

function AuthNav() {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <ProfileLink /> : <AuthButton />};</div>;
}

export default AuthNav;

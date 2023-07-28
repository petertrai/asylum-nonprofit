import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import React from 'react';
import LogoutButton from './LogoutButton';
import ProfileContainer from '../pages/Profile/ProfileContainer';

function AuthButton() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}

export default AuthButton;

import React from 'react';
import RenderProfilePage from './renderProfilePage.jsx';
import { useAuth0 } from '@auth0/auth0-react';

function ProfileContainer() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <div>You're not authorized...</div>;
  }
  return (
    <>
      <RenderProfilePage />
    </>
  );
}

export default ProfileContainer;

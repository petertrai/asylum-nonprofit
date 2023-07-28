import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Auth0ProviderWithNavigate = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
  const history = useHistory();
  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      cacheLocation={'localstorage'}
    >
      {children}
    </Auth0Provider>
  );
};

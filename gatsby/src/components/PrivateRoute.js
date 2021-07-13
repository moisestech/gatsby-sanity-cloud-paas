import React from 'react';

// ROUTING
import { navigate } from 'gatsby';

// AUTH
import { isLoggedIn } from '../utils/auth';

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate('/app/login');
    return null;
  }

  return <Component {...rest} />;
}

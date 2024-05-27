// resources/js/pages/Auth/Login.jsx

import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import GuestLayout from '@/Layouts/GuestLayout';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const handleGoogleSignIn = () => {
    Inertia.visit('/login/google');
  };

  return (
    <GuestLayout>
      <div className="login-container">
        <h2>Login with Google</h2>
        <button className="google-signin-button" onClick={handleGoogleSignIn}>
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
          Sign in with Google
        </button>
      </div>
    </GuestLayout>
  );
};

export default Login;

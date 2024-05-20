import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
// resources/js/pages/Auth/Login.jsx

import React from 'react';
import { Inertia } from '@inertiajs/inertia';
const Login = () => {
  const handleGoogleSignIn = () => {
    // Use Inertia.visit to redirect to the Google Sign-In route
    Inertia.visit('/login/google');
  };

  return (
    <GuestLayout>
    <div>
      <h2>Login with Google</h2>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
    </GuestLayout>
  );
};

export default Login;


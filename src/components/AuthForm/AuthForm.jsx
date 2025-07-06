import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './AuthForm.css';

export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(true);

  return isRegister ? (
    <RegisterForm onSwitch={() => setIsRegister(false)} />
  ) : (
    <LoginForm onSwitch={() => setIsRegister(true)} />
  );
}

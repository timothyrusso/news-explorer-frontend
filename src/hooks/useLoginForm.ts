import { useState } from 'react';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return { email, setEmail, password, setPassword, username, setUsername };
};

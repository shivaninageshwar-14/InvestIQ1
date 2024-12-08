import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the API request
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });

      // Extract token and userId from the response
      const { token, userId } = response.data;

      // Store userId and token in localStorage
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);

      alert('Login successful!');
      navigate('/dashboard'); // Navigate to the Dashboard after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

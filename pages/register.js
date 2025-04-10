import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', form);
      setMessage('✅ Registration successful! You can now log in.');
    } catch (err) {
      setMessage('❌ Registration failed. Try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          placeholder='Name'
          onChange={handleChange}
          required
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
          required
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChange}
          required
        />
        <select name='role' onChange={handleChange}>
          <option value='customer'>Customer</option>
          <option value='owner'>Owner</option>
        </select>
        <button type='submit'>Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

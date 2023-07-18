import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email,
      name,
      password,
      password2,
      contact_number: contactNumber,
    };

    fetch('http://194.163.40.231:8080/api/user/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Registration failed.');
        }
      })
      .then((data) => {
        console.log(data.message); // Registration success
        // Handle successful registration, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Registration failed. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;

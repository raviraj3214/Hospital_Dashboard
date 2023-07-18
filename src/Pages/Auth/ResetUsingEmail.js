import { useState, useEffect } from 'react';

const ResetUsingEmail = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const token = url.split('/').pop(); // Extract the token from the URL

    // You can perform any necessary token validation here
    // For simplicity, we'll just check if the token is present
    if (token) {
      setMessage('Valid token');
    } else {
      setMessage('Invalid token');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the password reset functionality here
    // Make an API call to update the user's password using the extracted token and new password
    // Display a success message or handle any errors accordingly
  };

  return (
    <div >
      <h1>Password Reset</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetUsingEmail;

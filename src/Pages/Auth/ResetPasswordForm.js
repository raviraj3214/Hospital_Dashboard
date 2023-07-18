import React, { useState } from 'react';
import axios from "axios";

const ResetPasswordForm = () => {
  const [old_password, setOldPassword] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('token'));

    if (new_password !== confirm_password) {
      setMessage("Passwords don't match");
      return;
    }

    try {
        const response = await axios.post(
          'http://194.163.40.231:8080/api/user/newchangepassword/',
          {
            old_password: old_password,
            new_password: new_password,
            confirm_password: confirm_password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
    
        if (response.data.message) {
          setMessage('Password reset successful!');
          // Additional logic or redirect after successful reset
        } else {
          setMessage(response.data.non_field_errors);
        }
      }  catch (error) {
      setMessage(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginTop: '0' }}>Reset Password</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="old_password">Old Password</label>
          <input
            type="password"
            id="old_password"
            value={old_password}
            onChange={(e) => setOldPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="new_Password">New Password</label>
          <input
            type="password"
            id="newpassword"
            value={new_password}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirm_Password">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', marginTop: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Reset Password
        </button>
      </form>
      {message && <p style={{ marginTop: '10px', color: '#f00' }}>{message}</p>}
    </div>
  );
};

export default ResetPasswordForm;

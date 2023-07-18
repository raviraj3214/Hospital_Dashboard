import { useState } from 'react';
//import { useNavigate } from "react-router-dom";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassAftrEmail = () => {
  const { userId, token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        `http://194.163.40.231:8080/api/user/reset-password/${userId}/${token}/`,
        {
          password: password,
          password2: confirmPassword
        }
      );

     
     if(response.data && response.data.message){ window.alert(response.data.message);
        
            navigate("/login");
          
     }
    } catch (error) {
      if (error.response.data.errors) {
        window.alert(error.response.data.errors.non_field_errors);
      } else {
        window.alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="center-container">
      <style>{`
        body {
          background-color: #07003D;
        }
        
        .center-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        
        .reset-container {
          width: 40vh;
          height: 40vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background-color: #FFFFFF;
          border-radius: 35px;
        }

        .title {
          text-align: center;
        }

        .form-group {
          margin-bottom: 10px;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        .forgot-password-btn {
          background: none;
          margin: 5px;
          border: none;
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }

        .login-btn {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 25px;
          cursor: pointer;
        }

        .login-btn:hover {
          background-color: #0056b3;
        }

        /* Additional Styles */

        .form-label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .form-input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        .form-button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          margin-top: 10px;
        }

        .form-button:hover {
          background-color: #0056b3;
        }
      `}</style>
      <div className="reset-container">
        <h1 className="title">Password Reset</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">New Password:</label>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password:</label>
            <input
              className="form-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="form-button" type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassAftrEmail;

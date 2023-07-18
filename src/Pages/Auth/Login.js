import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://194.163.40.231:8080/api/user/login/", {
        email,
        password,
      });
      if (res && res.data.message) {
        localStorage.setItem("token", JSON.stringify(res.data.token.access));
        window.alert(res.data.message);
        navigate("/dashboard");
      } 
    } catch (error) {
      
    
      if(error.response.data.error_message.password){
        window.alert(error.response.data.error_message.password);
      }
      if(error.response.data.error_message.email){
        window.alert(error.response.data.error_message.email);
      }
      
    }
  };

  return (
    <div className="center-container">
      <style>{`
        body {
          background-color: #ffffff;
        }
        
        .center-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        
        .login-container {
          width: 40vh;
          height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background-color: #E6EDEDC7;
          box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.8);
          

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
        /* Media queries for smaller screens */
        @media (max-width: 576px) {
          .login-container {
            width: 80vw;
            height:50vh;
            display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          }
          .login-btn{
            width:30vw;
            height:6vh;
            margin-left:6vh;
            margin-top:2vh;
            border-radius:25px;

          }
        }
      `}</style>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
        
          <h2 className="title">Login</h2>
          <div className="form-group">
            <Input
              
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email-input"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password-input"
              placeholder="Enter Your Password"
              required
              bordered={false}
            />
          </div>
          <div className="forgot-password">
            <button
              type="button"
              className="forgot-password-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
            <button
              type="button"
              className="forgot-password-btn"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign-up
            </button>
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

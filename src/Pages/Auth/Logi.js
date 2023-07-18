import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, ChevronRightOutlined } from "@ant-design/icons";




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
        @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;	
            font-family: Raleway, sans-serif;
        }
        
        body {
            background: linear-gradient(90deg, #C7C5F4, #776BCC);		
        }
        
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        
        .screen {		
            background: linear-gradient(90deg, #5D54A4, #7C78B8);		
            position: relative;	
            height: 600px;
            width: 360px;	
            box-shadow: 0px 0px 24px #5C5696;
        }
        
        .screen__content {
            z-index: 1;
            position: relative;	
            height: 100%;
        }
        
        .screen__background {		
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            -webkit-clip-path: inset(0 0 0 0);
            clip-path: inset(0 0 0 0);	
        }
        
        .screen__background__shape {
            transform: rotate(45deg);
            position: absolute;
        }
        
        .screen__background__shape1 {
            height: 520px;
            width: 520px;
            background: #FFF;	
            top: -50px;
            right: 120px;	
            border-radius: 0 72px 0 0;
        }
        
        .screen__background__shape2 {
            height: 220px;
            width: 220px;
            background: #6C63AC;	
            top: -172px;
            right: 0;	
            border-radius: 32px;
        }
        
        .screen__background__shape3 {
            height: 540px;
            width: 190px;
            background: linear-gradient(270deg, #5D54A4, #6A679E);
            top: -24px;
            right: 0;	
            border-radius: 32px;
        }
        
        .screen__background__shape4 {
            height: 400px;
            width: 200px;
            background: #7E7BB9;	
            top: 420px;
            right: 50px;	
            border-radius: 60px;
        }
        
        .login {
            width: 320px;
            padding: 30px;
            padding-top: 156px;
        }
        
        .login__field {
            padding: 20px 0px;	
            position: relative;	
        }
        
        .login__icon {
            position: absolute;
            top: 30px;
            color: #7875B5;
        }
        
        .login__input {
            border: none;
            border-bottom: 2px solid #D1D1D4;
            background: none;
            padding: 10px;
            padding-left: 24px;
            font-weight: 700;
            width: 75%;
            transition: .2s;
        }
        
        .login__input:active,
        .login__input:focus,
        .login__input:hover {
            outline: none;
            border-bottom-color: #6A679E;
        }
        
        .login__submit {
            background: #fff;
            font-size: 14px;
            margin-top: 30px;
            padding: 16px 20px;
            border-radius: 26px;
            border: 1px solid #D4D3E8;
            text-transform: uppercase;
            font-weight: 700;
            display: flex;
            align-items: center;
            width: 100%;
            color: #4C489D;
            box-shadow: 0px 2px 2px #5C5696;
            cursor: pointer;
            transition: .2s;
        }
        
        .login__submit:active,
        .login__submit:focus,
        .login__submit:hover {
            border-color: #6A679E;
            outline: none;
        }
        
        .button__icon {
            font-size: 24px;
            margin-left: auto;
            color: #7875B5;
        }
        
        .social-login {	
            position: absolute;
            height: 140px;
            width: 160px;
            text-align: center;
            bottom: 0px;
            right: 0px;
            color: #fff;
        }
        
        .social-icons {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .social-login__icon {
            padding: 20px 10px;
            color: #fff;
            text-decoration: none;	
            text-shadow: 0px 0px 8px #7875B5;
        }
        
        .social-login__icon:hover {
            transform: scale(1.5);	
        }
        
      `}</style>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
        
          <h2 className="title">Login</h2>
          <div className="form-group">
            <Input
              prefix={<UserOutlined />}
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

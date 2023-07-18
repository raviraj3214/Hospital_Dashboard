import React, { useState } from "react";
//import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import toast from "react-hot-toast";
//import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
 // const [newPassword, setNewPassword] = useState("");
 // const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/user/send-reset-password-email/", {
        email
      });
      if (res.data && res.data.message) {
        //toast.success(res.data && res.data.message);
        window.alert(res.data.message);
        navigate("/login");
      } else {
       // toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      //toast.error("Something went wrong");
      window.alert(error.data);

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
        
        .form-container {
          width: 40vh;
          height: 30vh;
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

      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          {/*<div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your favorite Sport Name "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
  </div>*/}

          <button type="submit" className="login-btn">
            SUBMIT
          </button>
        </form>
      </div>
      </div>
    
  );
};

export default ForgotPasssword;

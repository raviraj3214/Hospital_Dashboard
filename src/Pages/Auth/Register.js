import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";




const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");
  const [contactNumber, setPhone] = useState("");
  //const [error, setError] = useState("");
  const navigate = useNavigate();

  

/*const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://194.163.40.231:8080/api/user/register/", {
      email,
      name,
      password,
      password2,
      contact_number: contactNumber,
    });

    if (res.data.message) {
      window.alert(res.data.message);
     // navigate("/login");
    } // if (res.data.errors) {
     // const errors = res.data.errors;
      //console.log(errors);
      //window.alert(res.data.errors);
    //}
  }  catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      const errors = error;
  
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const errorMessage = errors[key];
          console.log(`Key: ${key}, Value: ${errorMessage}`);
          window.alert(`Key: ${key}, Value: ${errorMessage}`);
          // Do something with the key and error message
        }
      }
      //window.alert);
    } else {
      window.alert(error);
    }
  }
};*/


  
    // Check if user with the given email already exists
    //const checkUserRes = await axios.get(
    //  `http://127.0.0.1:8000/api/user/register/${email}`
   // );

   // if (checkUserRes.data.exists) {
     // window.alert("User with this email already exists.");
      //return;
    //}

    // If the user doesn't exist, proceed with registration
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {const Res = await axios.post(
        "http://194.163.40.231:8080/api/user/register/",
        {
          email,
          name,
          password,
          password2,
          contact_number: contactNumber,
        }
      );
    
    if (Res.data.message && Res.data.success) {
      window.alert(Res.data.message);
      navigate("/");
    }
    else if(Res.data.success!==true && Res.data.email && Res.data.contact_number){
      window.alert("User with this email id and contact number already exists.");
    }
    else if(Res.data.success!==true && Res.data.email ){
      window.alert(Res.data.email);
    }
    else if(Res.data.success!==true && Res.data.contact_number ){
      window.alert(Res.data.contact_number);
    }
    
  } catch (error) {
    
      window.alert(error);
    
  }
};
   








  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={password2}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            id="phone"
            value={contactNumber}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your Phone Number"
            required
          />
        </div>
        
        <button type="submit" className="login">
          REGISTER
        </button>
        
        
        <Link to="/">
        <button className="login">Login</button>
        </Link>
        

        

      </form>

      <style jsx>{`
        body{
          background-color: #07003D;  
          display: flex; 
          flex-direction: column;
          align-items: center;   
          justify-content: center;

        }
        .form-container {
          min-height: 90vh;
          width:50vh;
          margin-top:5vh;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 35px;
          background-color: #FFFFFF;        

        }
        .login{
            margin-left:4px;

        }

        .title {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        label {
          font-weight: bold;
          margin-bottom: 5px;
        }

        input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error-message {
            color: red;
            margin-top: 10px;
          }

        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
        }
      `}</style>
    </div>
  
    );
};

export default Register;

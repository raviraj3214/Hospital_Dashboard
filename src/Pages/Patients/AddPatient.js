import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AddPatient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const Res = await axios.post("http://194.163.40.231:8080/api/patient/register/", {
          name,
          email,
          phone,
          age,
          dob,
          gender,
          address,
        });
  
        if (Res.data.message && Res.data.success) {
          window.alert(Res.data.message);
        } 
       
      } catch (error) {
        if(error.response.data.message)
       { window.alert(error.response.data.message);}
       if(error.response.data.email)
       {
        window.alert(error.response.data.email);
       }
       else{
        window.alert("Something went wrong");
       }
      }
    };
  
  return (
    <div>
    
      <style> {`.container
{
    display: flex;
    flex-direction: column;
    
    width: 200vw;
    height:85vh;
    margin-left:0;
    margin-right:20%;
  
    background-blend-mode:overlay;

    border-radius: 5px;
    
}
input[type=text],select{
  width:100%;
  padding:12px 20px;
  margin: 8px 0;
  display: inline-block;
  border:1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}


.name
{
  display:flex;
  justify-content:space-between;
  column-gap: 40px;
}
.name input{
  border-radius:25px;
}
 



input[type=file]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #084cdf;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color.2s ease-in-out;
}

input[type=file]::file-selector-button:hover {
  background: #0d45a5;
}
.drop-container {
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background.2s ease-in-out, border .2s ease-in-out;
}

.drop-container:hover {
  background: #eee;
  border-color: #111;
}

.drop-container:hover .drop-title {
  color: #222;
}

.drop-title {
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color .2s ease-in-out;
}
.button {
  margin-left:45%; 
  width:10vw;
  height:5vh;
  margin-top: 20px;
  border: none;
  background: #084cdf;
  padding: 5px 5px;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  transition: background .2s ease-in-out;

}
.header{
    text-align: center;
  width:100%;
  margin-bottom: 5%;
  margin-top:5%; 
}
.button:hover {
  background: #0d45a5;
}`}</style>
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h2 className=''>Patient Registration </h2>
      </div>
      <div className='name'>
        <input type='text'  value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' id='name' required  />
        <input type='text'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' id='email' required />
      </div>
      <div className='name'>
        <input type='text'  value={phone} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone No.' id='phone_number'  />
        <input type='text'  value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' id='age' required />
      </div>
      <div className='name'>
        <input type='text' id="dob" value={dob} onChange={(e) => setDateOfBirth(e.target.value)} placeholder='YYYY-MM-DD'  required/>

        <select   value={gender} onChange={(e) => setGender(e.target.value)} id='gender' style={{width:"10vw",borderRadius:"25px"}}  required>
         <option value="">Select Gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="other">Other</option>
        </select>
        <input  type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' id='address' required />


      </div>
      
      
      <div>
        <button type="submit" className='button'>Submit</button>
      </div>
    </form>
    </div>
  );
}

export default AddPatient;
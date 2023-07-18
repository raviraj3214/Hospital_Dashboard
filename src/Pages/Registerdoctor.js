import React, { useState } from 'react';
import axios from 'axios';

const Registerdoctor = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [file, setFile] = useState(null); // Use null as initial state for image

  /*const handleSubmit = async (e) => {
    e.preventDefault();
  
      try {
      const Res = await axios.post('http://194.163.40.231:8080/api/doctor/register/', {
        first_name,
        last_name,
        email,
        phone_number,
        specialty,
        qualifications,
        address,
        gender,
        date_of_birth,
        image,
      });

      if (Res.data.message && Res.data.success) {
        window.alert(Res.data.message);
      } else if (Res.data.success != true && Res.data.email && Res.data.phone_number) {
        window.alert("User with this email id and contact number already exists.");
      } else if (Res.data.success != true && Res.data.email) {
        window.alert(Res.data.email);
      } else if (Res.data.success != true && Res.data.phone_number) {
        window.alert(Res.data.phone_number);
      }
    } catch (error) {
      window.alert(error);
    }
  };*/

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone_number', phone_number);
    formData.append('specialty', specialty);
    formData.append('qualifications', qualifications);
    formData.append('address', address);
    formData.append('gender', gender);
    formData.append('date_of_birth', date_of_birth);
    formData.append('file', file);
  
    try {
      const Res = await axios.post("http://194.163.40.231:8080/api/doctor/register/", formData);
  
      if (Res.data.message && Res.data.success) {
        window.alert(Res.data.message);
      }  //else if (Res.data.success !== true && Res.data.email) {
        //window.alert(Res.data.email);
     // } else if (Res.data.success !== true && Res.data.phone_number) {
      //  window.alert(Res.data.phone_number);
     // }
    } catch (error) {
      //console.log(error);
      //console.log("Inside catch");
      window.alert(error.response.data.message);
       


       // window.alert(Res.data.message);
      }
      
    
  };
  
  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h4>Registration Form</h4>
      </div>
      <div className='name'>
        <input type='text' id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' required  />
        <input type='text' id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' required />
      </div>
      <div className='name'>
        <input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail'  required />
        <input type='text' id="phone_number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone No.' required />
      </div>
      <div className='name'>
        <input type='text' id="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder='Specialty'  required />
        <input type='text' id="qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} placeholder='Qualifications'  required />
      </div>
      <div className='name'>
        <input type='text' id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'  required />
      </div>
      <div className='name'>
        <input type='text' id="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder='Gender'  required />
        <input type='text' id="date_of_birth" value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder='Date Of Birth'  required/>

      </div>
      <div>
         <label htmlFor="image" className='drop-container'>
          <span className='drop-title'>Drop Files Here</span>
          OR
          <input type='file' id="image" onChange={handleImageChange}  />
        </label>
      </div>
      <div>
        <button type="submit" className='button'>Submit</button>
      </div>
      {/* <Link to="/login">
        <button className="login">Login</button>
        </Link> */}
    </form>
  );
}

export default Registerdoctor;
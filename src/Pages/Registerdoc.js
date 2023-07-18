import React, { useState } from 'react';
import axios from 'axios';

const Registerdoc = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [image, setImage] = useState(null); // Use null as initial state for image

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateParts = date_of_birth.split('-'); // Assuming date_of_birth is in "day-month-year" format
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const formattedDateOfBirth = `${year}-${month}-${day}`;
  window.alert(formattedDateOfBirth);
    try {
      const formData = new FormData();
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('email', email);
      formData.append('phone_number', phone_number);
      formData.append('specialty', specialty);
      formData.append('qualifications', qualifications);
      formData.append('address', address);
      formData.append('gender', gender);
      formData.append('date_of_birth', formattedDateOfBirth);

      formData.append('image', image); // Append the image to the FormData

      const Res = await axios.post("​http://194.163.40.231:8080/api/doctor/register/", formData);

      if (Res.data.message && Res.data.success) {
        window.alert(Res.data.message);
      } else if (Res.data.success !== true && Res.data.email && Res.data.phone_number) {
        window.alert("User with this email id and contact number already exists.");
      } else if (Res.data.success !== true && Res.data.email) {
        window.alert(Res.data.email);
      } else if (Res.data.success !== true && Res.data.phone_number) {
        window.alert(Res.data.phone_number);
      }
    } catch (error) {
      window.alert(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };  
  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h4>Registration Form</h4>
      </div>
      <div className='name'>
        <input type='text' onChange={(e) => setFirstName(e.target.value)}placeholder='First Name' name='first_name' required  />
        <input type='text' onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' name='last_name' required />
      </div>
      <div className='name'>
        <input type='text' onChange={(e) => setEmail(e.target.value)}placeholder='E-mail' name='email' required />
        <input type='text' onChange={(e) => setPhoneNumber(e.target.value)}placeholder='Phone No.' name='phone_number' required />
      </div>
      <div className='name'>
        <input type='text' onChange={(e) => setSpecialty(e.target.value)}placeholder='Specialty' name='specialty' required />
        <input type='text' onChange={(e) => setQualifications(e.target.value)}placeholder='Qualifications' name='qualifications' required />
      </div>
      <div className='name'>
        <input type='text' onChange={(e) => setAddress(e.target.value)}placeholder='Address' name='address' required />
      </div>
      <div className='name'>
        <input type='text' onChange={(e) => setGender(e.target.value)} placeholder='Gender' name='gender' required />
        <input type='text' onChange={(e) => setDateOfBirth(e.target.value)} placeholder='Date Of Birth' name='date_of_birth' required/>

      </div>
      <div>
         <label htmlFor="image" className='drop-container'>
          <span className='drop-title'>Drop Files Here</span>
          OR
          <input type='file' id="image" onChange={handleImageChange} name='image' />
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

export default Registerdoc;
import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const EditDoctorById = () => {
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
  const { doctor_id } = useParams();
  const navigate = useNavigate();

 
  useEffect(() => {
    const first_nam = JSON.parse(localStorage.getItem('first_name'));
    const last_nam = JSON.parse(localStorage.getItem('last_name'));
    const phone_numbr = JSON.parse(localStorage.getItem('phone_number'));
    const speciality = JSON.parse(localStorage.getItem('specialty'));
    const qualification = JSON.parse(localStorage.getItem('qualifications'));
    const addresss = JSON.parse(localStorage.getItem('address'));
    const gendr = JSON.parse(localStorage.getItem('gender'));
    const dateofbirth = JSON.parse(localStorage.getItem('date_of_birth'));
    const emal = JSON.parse(localStorage.getItem('email'));

    setPhoneNumber(phone_numbr);
    setSpecialty(speciality);
    setQualifications(qualification);
    setAddress(addresss);
    setGender(gendr);
    setDateOfBirth(dateofbirth);
    setFirstName(first_nam);
    setLastName(last_nam);
    setEmail(emal);
  }, []);


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
      const Res = await axios.put(`http://194.163.40.231:8080/api/doctor/doctorUpdate/${doctor_id}/`, formData);

      if (Res.data.message && Res.data.success) {
        window.alert(Res.data.message);
        localStorage.removeItem('first_name');
        localStorage.removeItem('last_name');
        localStorage.removeItem('email');
        localStorage.removeItem('phone_number');
        localStorage.removeItem('specialty');
        localStorage.removeItem('qualifications');
        localStorage.removeItem('address');
        localStorage.removeItem('gender');
        localStorage.removeItem('date_of_birth');
        
        navigate("/dashboard/doctors");
      } 
    }
      catch (error) {
      window.alert(error.response.data.message);
    }
  };

  return (
    <div>
    
      <style> {`.container {
  display: flex;
  flex-direction: column;
  width: 250vw;
  height:85vh;
  margin-left:0%;
  margn-right:2%;


  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
}

.header {
  text-align: center;
  width:100%;
  margin-bottom: 20px;
  margin-top:2%;
}

.name {
  display: flex;
  margin-bottom: 15px;
}

.name input {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.drop-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 15px;
}

.drop-title {
  margin-bottom: 10px;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Responsive design */
@media (max-width: 768px) {
  .name {
    flex-direction: column;
  }

  .name input {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
`}</style>
   <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h4>Doctor Profile Update</h4>
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
      <select value={gender} onChange={(e) => setGender(e.target.value)} id='gender' required>
         <option value="">Select Gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="other">Other</option>
        </select>
        <input type='text' id="date_of_birth" value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder='YYYY-MM-DD'  required/>

      </div>
      <div>
         <label htmlFor="image" className='drop-container'>
          <span className='drop-title'>Drop Files Here</span>
          OR
          <input type='file' id="image" onChange={handleImageChange}  />
        </label>
      </div>
      <div className='button-box'>
      <div>
        <button type="submit" className='button'>Submit</button>
      </div>
      <div>
        <button type="button" className='button'style={{marginLeft:"1rem"}} onClick={(e) =>navigate("/dashboard/doctors")}>Cancel</button>
      </div>
      </div>
      {/* <Link to="/login">
        <button className="login">Login</button>
        </Link> */}
    </form>
    </div>
  );
}

export default EditDoctorById;
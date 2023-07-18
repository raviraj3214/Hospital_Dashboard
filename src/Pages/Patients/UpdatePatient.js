import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const UpdatePatient = () => {
  const [name, setName] = useState("");
  
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDateOfBirth] = useState("");
   // Use null as initial state for image
  const { patient_id } = useParams();
  const navigate = useNavigate();

 
  useEffect(() => {
    const nam = JSON.parse(localStorage.getItem('name'));
    const phone_numbr = JSON.parse(localStorage.getItem('phone'));
    const ages = JSON.parse(localStorage.getItem('age'));
    const addresss = JSON.parse(localStorage.getItem('address'));
    const gendr = JSON.parse(localStorage.getItem('gender'));
    const dateofbirth = JSON.parse(localStorage.getItem('dob'));
    const emal = JSON.parse(localStorage.getItem('email'));

    setPhoneNumber(phone_numbr);
    setAge(ages);
    setAddress(addresss);
    setGender(gendr);
    setDateOfBirth(dateofbirth);
    setName(nam);
    setEmail(emal);
  }, []);


   
  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const Res = await axios.put(`http://194.163.40.231:8080/api/patient/update/${patient_id}`, {
        name:name,
        email:email,
        phone:phone,
        age:age,
        dob:dob,
        gender:gender,
        address:address,
      });

      if (Res.data.message && Res.data.success) {
        window.alert(Res.data.message);
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('phone');
        localStorage.removeItem('age');
        localStorage.removeItem('address');
        localStorage.removeItem('gender');
        localStorage.removeItem('dob');
        
        navigate("/dashboard/patients_list");
      } 
      else{
        window.alert(Res.data.message);
      }
    }
      catch (error) {
      window.alert(error.response.message);
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
        <h4>Patient Profile Update</h4>
      </div>
      <div className='name'>
        <input type='text' id="first_name" value={name} onChange={(e) => setName(e.target.value)} placeholder='First Name' required  />
      </div>
      <div className='name'>
        <input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail'  required />
        <input type='text' id="phone_number" value={phone} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone No.' required />
      </div>
      <div className='name'>
        <input type='text' id="specialty" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Specialty'  required />
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
        <input type='text' id="date_of_birth" value={dob} onChange={(e) => setDateOfBirth(e.target.value)} placeholder='YYYY-MM-DD'  required/>

      </div >
      <div className='button-box'>
      <div>
        <button type="submit" className='button'>Submit</button>
      </div>
      <div>
        <button type="button" className='button'style={{marginLeft:"1rem"}} onClick={(e) =>navigate("/dashboard/patients_list") }>Cancel</button>
      </div>
      </div>
      {/* <Link to="/login">
        <button className="login">Login</button>
        </Link> */}
    </form>
    </div>
  );
}

export default UpdatePatient;
import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddDoctor = () => {
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }; 
 
  
  // Assuming you have a state variable called "date_of_birth" and a function called "setDateOfBirth" to update the state:
  
  // Update the state with the new formatted date
  
   
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
  margin-left:2%;

  
  border-radius: 5px;
  
  background-blend-mode:overlay;
}

.header {
  text-align: center;
  width:100%;
  margin-bottom: 20px;
  margin-top: 2%;
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
  border-radius: 15px;
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
        <select className="dropdown" style={{marginRight:"1%",borderRadius:"16px,"}} value={specialty} onChange={(e) => setSpecialty(e.target.value)} id='specialty' required>
         <option value="">Select Specialty</option>
         <option value="Cardiology">Cardiology</option>
         <option value="Dermatology">Dermatology</option>
         <option value="Neurology">Neurology</option>
         <option value="Orthopedics">Orthopedics</option>
         <option value="Pediatrics">Pediatrics</option>
         <option value="Gynecology">Gynecology</option>
         <option value="Urology">Urology</option>
         <option value="Oncology">Oncology</option>
         <option value="Psychiatry">Psychiatry</option>
         <option value="ENT">ENT</option>

        </select>
        <input type='text' id="qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} placeholder='Qualifications'  required />
      </div>
      <div className='name'>
        <input type='text' id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'  required />
      </div>
      <div className='name'>

      <select className="dropdown" value={gender} onChange={(e) => setGender(e.target.value)} id='gender'style={{marginRight:"1%",borderRadius:"16px"}} required>
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
      <div className="button-box">
        <button type="submit" className='button'style={{borderRadius:"16px"}}>Submit</button>
      </div>
      {/* <Link to="/login">
        <button className="login">Login</button>
        </Link> */}
    </form>
    </div>
  );
}

export default AddDoctor;
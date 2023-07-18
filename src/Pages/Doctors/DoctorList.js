import React, { useState, useEffect } from "react";
import EditDoctorById from "./EditDoctorById";
import { Link, useNavigate } from "react-router-dom";



//import AdminMenu from "../../components/Layout/AdminMenu";
//import Layout from "./../../components/Layout/Layout";
import axios from "axios";
//import toast from "react-hot-toast";
const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();


  //getall products
  const getAllDoctors = async () => {
    try {
      const res = await axios.get("http://194.163.40.231:8080/api/doctor/doctors/46/");
      setDoctors(res.data.data);
      window.alert(doctors.first_name);
    } catch (error) {
      console.log(error);
      //toast.error("Someething Went Wrong");
      //window.alert(error.response);
    }
  };
  useEffect(() => {
    getAllDoctors();
  }, []);
 
  return (
   <div className="card-container">
    
    <div className="card">
    <div className="card-header">
      <h2>{doctors.first_name} {doctors.last_name}</h2>
    </div>
    <div className="card-body">
      <div className="image-container">
        <img src={`http://194.163.40.231:8080/media/image/Passport_size_.jpg`} alt="Null" ></img>
        <img src={`http://194.163.40.231:8080${doctors.image}`} alt="Null" ></img>
        <img src={`${doctors.image}`} alt="Null" ></img>

        
      </div>
      <div className="user-details">
        <p className="text-auto-setter">Email: {doctors.email}</p>
        <p>Phone: {doctors.phone_number}</p>
        <p>Specialty: {doctors.specialty}</p>
        <p>Qualifications: {doctors.qualifications}</p>
        <p>Address: {doctors.address}</p>
        <p>Gender: {doctors.gender}</p>
        <p>Date of Birth: {doctors.date_of_birth}</p>
        
           
            
      </div>
      
    </div>
  </div>
  </div>
  );
};

export default DoctorList;

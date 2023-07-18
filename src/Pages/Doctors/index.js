import React, { useState, useEffect } from "react";
import EditDoctorById from "./EditDoctorById";
import { Link, useNavigate } from "react-router-dom";



//import AdminMenu from "../../components/Layout/AdminMenu";
//import Layout from "./../../components/Layout/Layout";
import axios from "axios";
//import toast from "react-hot-toast";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();


  //getall products
  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get("http://194.163.40.231:8080/api/doctor/list/");
      setDoctors(data);
    } catch (error) {
      console.log(error);
      //toast.error("Someething Went Wrong");
      window.alert(error.response.errros);
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllDoctors();
  }, []);
  const handleDeleteDoctor = async (doctor_id) => {
   
  
  axios
  .delete(`http://194.163.40.231:8080/api/doctor/delete/${doctor_id}/`, {
   
  })
  .then(() => {
    // Clear the token from local storage
    getAllDoctors();
    window.alert("Deleted successfully");
    
    // Redirect or perform any other necessary actions
  })
  .catch((error) => {
    console.error('Deletion failed:', error);
    window.alert('Deletion failed:', error);
    // Handle the error or display an error message
  });
};
  return (
   <div className="card-container">
    {doctors?.map((p) => (
    <div className="card">
    <div className="card-header">
      <h2>{p.first_name} {p.last_name}</h2>
    </div>
    <div className="card-body">
      <div className="image-container">
        <img src={`{p.image}`} alt="Null" ></img>
  
        
      </div>
      <div className="user-details">
        <p className="text-auto-setter">Email: {p.email}</p>
        <p>Phone: {p.phone_number}</p>
        <p>Specialty: {p.specialty}</p>
        <p>Qualifications: {p.qualifications}</p>
        <p>Address: {p.address}</p>
        <p>Gender: {p.gender}</p>
        <p>Date of Birth: {p.date_of_birth}</p>
        <button
              type="button"
              className="forgot-password-btn"
              style={{width:"6vw"}}
              onClick={() => {
                localStorage.setItem("doctor_id", JSON.stringify(p.doctor_id));
                localStorage.setItem("email", JSON.stringify(p.email));
                localStorage.setItem("first_name", JSON.stringify(p.first_name));
                localStorage.setItem("last_name", JSON.stringify(p.last_name));
                localStorage.setItem("phone_number", JSON.stringify(p.phone_number));
                localStorage.setItem("specialty", JSON.stringify(p.specialty));
                localStorage.setItem("qualifications", JSON.stringify(p.qualifications));
                localStorage.setItem("address", JSON.stringify(p.address));
                localStorage.setItem("gender", JSON.stringify(p.gender));
                localStorage.setItem("date_of_birth", JSON.stringify(p.date_of_birth));


                navigate(`/dashboard/edit_doctor_by_id/${p.doctor_id}`);
              }}
            >
              Edit
            </button>
            <button
                type="button"
                className="delete-btn"
                style={{ width: "6vw" }}
                onClick={() => handleDeleteDoctor(p.doctor_id)}
              >
                Delete
              </button>
      </div>
      
    </div>
  </div>))}
  </div>
  );
};

export default Doctors;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Patients = () => {
  const [patient, setPatients] = useState([]); // Initialize patients as an empty array
  const navigate = useNavigate();

  // Get all patients
  const getAllPatients = async () => {
    try {
      const { data } = await axios.get("http://194.163.40.231:8080/api/patient/list/");
      setPatients(data);
    } catch (error) {
      console.log(error);
      window.alert(error.response.errros);
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <div className="card-container">
      {patient?.map((p) => (
        <div className="card">
          <div className="card-header">
            <h2>{p.name}</h2>
          </div>
          <div className="card-body">
            <div className="image-container">
              <img src={`http://194.163.40.231:8080${p.image}`} alt="Null" />
            </div>
            <div className="user-details">
              <p className="text-auto-setter">Email: {p.email}</p>
              <p>Phone: {p.phone}</p>
              <p>Age: {p.age}</p>
              <p>Address: {p.address}</p>
              <p>Gender: {p.gender}</p>
              <p>Date of Birth: {p.dob}</p>
              <button
                type="button"
                className="forgot-password-btn"
                style={{ width: "6vw" }}
                onClick={() => {
                  localStorage.setItem("patient_id", JSON.stringify(p.patient_id));
                  localStorage.setItem("email", JSON.stringify(p.email));
                  localStorage.setItem("name", JSON.stringify(p.name));
                  localStorage.setItem("phone", JSON.stringify(p.phone));
                  localStorage.setItem("age", JSON.stringify(p.age));
                  localStorage.setItem("address", JSON.stringify(p.address));
                  localStorage.setItem("gender", JSON.stringify(p.gender));
                  localStorage.setItem("date_of_birth", JSON.stringify(p.dob));

                  navigate(`/dashboard/edit_patient/${p.patient_id}`);
                }}
              >
                Edit
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Patients;

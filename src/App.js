import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import Customers from "./Pages/Customers";
import Dashboard from "./Pages/Dashboard";
import Doctors from "./Pages/Doctors";
import AddDoctor from "./Pages/Doctors/AddDoctor";
import DoctorProfile from "./Pages/Doctors/DoctorProfile";
import EditDoctor from "./Pages/Doctors/EditDoctor";
import Orders from "./Pages/Orders";
import ResetPassword from "./Pages/Auth/Resetpassword";
import ResetPasswordForm from "./Pages/Auth/ResetPasswordForm";
import ResetPassAftrEmail from "./Pages/Auth/ResetPassAftrEmail";
import Registerdoctor from "./Pages/Registerdoctor";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Dash from "./Pages/Dash";
import ResetUsingEmail from "./Pages/Auth/ResetUsingEmail";
import EditDoctorById from "./Pages/Doctors/EditDoctorById";
import AddPatient from "./Pages/Patients/AddPatient";
import "./App.css";
import SideBar from "./Pages/SideBar";
import UpdatePatient from "./Pages/Patients/UpdatePatient";
import Patients from "./Pages/Patients/Patients";
import Patient_lists from "./Pages/Patients/Patient_lists";
import DoctorList from "./Pages/Doctors/DoctorList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dash />}>
          <Route path="dash_board" element={<Dashboard />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctorlist" element={<DoctorList />} />

          <Route path="add_doctor" element={<AddDoctor />} />
          <Route path="edit_doctor" element={<EditDoctor />} />
          <Route path="doctor_profile" element={<DoctorProfile />} />
          <Route path="edit_doctor_by_id/:doctor_id/" element={<EditDoctorById />} />
          <Route path="add_patient" element={<AddPatient />} />
          <Route path="update_patient" element={<UpdatePatient />} />
          <Route path="patients_list" element={<Patient_lists />} />
          <Route path="update_patient/:patient_id/" element={<UpdatePatient />} />

          
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          </Route>

        <Route path="/registerdoctor" element={<Registerdoctor />} />
        <Route path="/resetpassword" element={<ResetPasswordForm />} />
        <Route path="/resetusingemail" element={<ResetUsingEmail />} />
        <Route path="/api/user/reset/:userId/:token" element={<ResetPassAftrEmail />}/>
        <Route path="/accordian" element={<SideBar />}/>
        

      </Routes>
    </>
  );
}

export default App;

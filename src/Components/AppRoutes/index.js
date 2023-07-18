import { Route, Routes} from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashboard";
import Doctors from "../../Pages/Doctors";
import Orders from "../../Pages/Orders";
import AddDoctor from "../../Pages/Doctors/AddDoctor";
import EditDoctor from "../../Pages/Doctors/EditDoctor";
import DoctorProfile from "../../Pages/Doctors/DoctorProfile";
import EditDoctorById from "../../Pages/Doctors/EditDoctorById";
import AddPatient from "../../Pages/Patients/AddPatient";
//import Patients from "../../Pages/Patients/Patients";
import Patient_lists from "../../Pages/Patients/Patient_lists";
import UpdatePatient from "../../Pages/Patients/UpdatePatient";
{/*function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/dash_board" element={<Dashboard />} />
      <Route path="/dashboard/doctors" element={<Doctors />} />
      <Route path="/dashboard/doctors/add_doctor" element={<AddDoctor />} />
      <Route path="/dashboard/doctors/edit_doctor" element={<EditDoctor />} />
      <Route path="/dashboard/doctors/doctor_profile" element={<DoctorProfile />} />
      <Route path="/dashboard/orders" element={<Orders />} />
      <Route path="/dashboard/customers" element={<Customers />} />
    </Routes>
  );
}*/}
function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/dash_board" element={<Dashboard />} />
      <Route path="/dashboard/doctors" element={<Doctors />} />
      <Route path="dashboard/add_doctor" element={<AddDoctor />} />
      <Route path="dashboard/edit_doctor" element={<EditDoctor />} />
      <Route path="dashboard/doctor_profile" element={<DoctorProfile />} />
      <Route path="dashboard/edit_doctor_by_id/:doctor_id/" element={<EditDoctorById />} />
      <Route path="dashboard/add_patient" element={<AddPatient />} />
      <Route path="dashboard/patients_list" element={<Patient_lists />} />
      <Route path="dashboard/update_patient/:patient_id/" element={<UpdatePatient />} />

 
    
      <Route path="/dashboard/orders" element={<Orders />} />
      <Route path="/dashboard/customers" element={<Customers />} />
    </Routes>
    
  );
}

export default AppRoutes;

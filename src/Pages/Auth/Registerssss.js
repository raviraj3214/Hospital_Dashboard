import React from "react";
import axios from "axios";

const Register = () => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://194.163.40.231:8080/api/user/register/', {
        email: 'iiik@gmail.com',
        name: 'vivek',
        password: 'vivek-jha',
        password2: 'vivek-jha',
        contact_number: '123457890'
      });

      //console.log(JSON.stringify(response.data));
      window.alert(response.data.message);

    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  return (
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
      REGISTER
    </button>
  );
};

export default Register;

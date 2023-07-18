import React from 'react';
import axios from 'axios';

const LogoutPage = () => {
  const handleLogout = () => {
    // Fetch the token from local storage
   // const token = localStorage.getItem('auth');
    const token = JSON.parse(localStorage.getItem('token'));
    //window.alert(token);


    // Make the DELETE request to logout
    axios
      .delete('http://194.163.40.231:8080/api/user/logout/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // Clear the token from local storage
        localStorage.removeItem('token');
        window.alert("Logout successful")
        // Redirect or perform any other necessary actions
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        // Handle the error or display an error message
      });
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;

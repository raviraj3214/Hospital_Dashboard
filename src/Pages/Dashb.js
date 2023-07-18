import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import AppFooter from "../Components/AppFooter/index";
import AppHeader from "../Components/AppHeader/index";
import PageContent from "../Components/PageContent/index";
import SideMenu from "../Components/SideMenu/index";
import Customers from "./Customers";
import Dashboard from "./Dashbaord";
import Doctors from "./Doctors";
import Orders from "./Orders";

function Dash() {
  const navigate = useNavigate();

  // Navigate to the default route on component mount
  useEffect(() => {
    navigate("/dashboard/dash_board");
  }, []); // Empty array as dependency to run only once

  return (
   
   <div className="App">
     <style>{`
    .bod {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    
    .SideMenuAndPageContent {
      display: flex;
      flex: 1;
    }
    
    .SideMenu {
      flex: 1;
    }
    
    .Page {
      flex: 3;
    }
    
    /* Additional styles to fill up the remaining height */
    .AppHeader,
    .AppFooter {
      flex: 0 0 auto;
    }
    
    .PageContent,
    .Outlet {
      height: 100%;
    }
    
`}</style>
     <AppHeader />
      <div className="SideMenuAndPageContent">
        <div className="SideMenu">
          <SideMenu></SideMenu>
        </div>
        <div className="Page">
          <PageContent></PageContent>
          <Outlet />
        </div>
      </div>
      <AppFooter />
</div>
  );
}

export default Dash;

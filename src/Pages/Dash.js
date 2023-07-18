import { Outlet, Route, Routes, useNavigate,NavLink } from "react-router-dom";
import React, { useEffect,useState } from "react";

import AppFooter from "../Components/AppFooter/index";
import AppHeader from "../Components/AppHeader/index";
import PageContent from "../Components/PageContent/index";
import SideMenu from "../Components/SideMenu/index";

import Customers from "./Customers";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import Orders from "./Orders";
import AddDoctor from "./Doctors/AddDoctor";
import EditDoctor from "./Doctors/EditDoctor";
import DoctorProfile from "./Doctors/DoctorProfile";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/dashboard/dash_board",
    name: "Dashboard",
    icon: <FaHome />,
  },
 
  {
    
    name: "Doctors",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/dashboard/doctors",
        name: "Doctors ",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/add_doctor",
        name: "Add Doctor ",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/edit_doctor",
        name: "Edit Doctor",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/doctor_profile",
        name: "Doctor Profile",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    name: "Patient",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Patient ",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/patients_list",
        name: "Patient List",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/add_patient",
        name: "Add Patient",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Update Patient",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

function Dash() {
  const navigate = useNavigate();

  // Navigate to the default route on component mount
 /* useEffect(() => {
    navigate("/dashboard/dash_board");
  }, []); // Empty array as dependency to run only once*/
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // New state variable for animation
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.2,
      },
    },
  };
  // Add an effect to set isAnimating to true during the animation and false after the animation is complete
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsAnimating(false), 400); // Set the duration based on the actual animation duration
    setIsAnimating(true);
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return (
   
   <div className="App">
      <div className="sidebar1" >
       
        <motion.div
          animate={{
            width: isOpen ? "14vw" : "4vw",
             
            transition: {
              duration: 0.4,
              
              damping: 100,
            },
          }}
          className={`sidebar
          
          `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Logo
                </motion.h1>
              )}
            </AnimatePresence>

           
            <div style={{marginLeft: isOpen ? "10.5vw" : "4vw",marginBottom: isOpen ? "2vw" : "0vw"}} className="bars">
                       <FaBars onClick={toggle} />
                   </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{}</main>
      </div>
    
        
         
    
        <div className="SideMenuAndPageContent" style={{marginLeft: isOpen ? "10vw" : "0vw",}}>
           <div className="AppHeader" style={{ position:"fixed"}}>
               <AppHeader />
            </div>
           <div className="Page" style={{marginTop:"9vh"}}>
             <PageContent />
             
           </div>
           <div className="footer" style={{marginLeft: isOpen ? "2vw" : "1vw"}}>
             <AppFooter />
             </div>
             
        </div>
           
</div>
  );
}

export default Dash;

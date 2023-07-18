import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  
  FaBars,FaHome, FaLock, FaMoneyBill, FaUser
  
}from "react-icons/fa";

//import { Menu } from "antd";
import { useState } from "react";
import { NavLink} from "react-router-dom";

const SideMenu=()=> {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  //const navigate = useNavigate();
  const menuItem=[
    {
        path:"/dashboard/dash_board",
        name:"Dashboard",
        icon:<AppstoreOutlined/>
    },
    {
        path:"/dashboard/doctors",
        name:"Doctors",
        icon:<UserOutlined/>,
        subRoutes: [
          {
            path: "/add_doctor",
            name: "Add Doctor ",
            icon: <FaUser />,
          },
          {
            path: "/edit_doctor",
            name: "Edit Doctor",
            icon: <FaLock />,
          },
          {
            path: "/doctor_profile",
            name: "Doctor Profile",
            icon: <FaMoneyBill />,
          },
        ],
    },
    {
        path:"/dashboard/orders",
        name:"orders",
        icon:<ShoppingCartOutlined/>
    },
    {
        path:"/dashboard/customers",
        name:"customers",
        icon:<UserOutlined/>
    }
]
  return (
    <div className="containers">
      <div style={{width: isOpen ? "16vw" : "4vw"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="Logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "10.5vw" : "4vw",marginBottom: isOpen ? "2vw" : "0vw"}} className="bars">
                       <FaBars onClick={toggle} />
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon" style={{ fontSize: isOpen ? "1rem" : "1.6rem" }}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           
    </div>
  );
}
export default SideMenu;
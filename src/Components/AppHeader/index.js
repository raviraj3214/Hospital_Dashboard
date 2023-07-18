import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Image, List, Menu, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  
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
        //localStorage.removeItem('token');
        window.alert("Logout successful")
        navigate("/");
        // Redirect or perform any other necessary actions
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        // Handle the error or display an error message
      });
  };
  const handleMenuClick = ({ key }) => {
    if (key === "profile") {
      // Handle profile page navigation
    } else if (key === "logout") {
      // Handle logout action
      handleLogout();
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="AppHeader">
      <Typography.Title style={{ color: "white" }}>
        Admin Dashboard
      </Typography.Title>
      <div style={{ marginLeft: "2%" }}>
        <Space>
          <Badge count={comments.length} dot>
            <MailOutlined
              style={{ fontSize: "40px", color: "white" }}
              onClick={() => {
                setCommentsOpen(true);
              }}
            />
          </Badge>
          <Badge count={orders.length}>
            <BellFilled
              style={{ fontSize: "35px", color: "white", marginLeft: "2rem" }}
              onClick={() => {
                setNotificationsOpen(true);
              }}
            />
          </Badge>
          <Dropdown overlay={menu} placement="bottomRight">
            <UserOutlined
              style={{ fontSize: "40px", color: "white", marginLeft: "2rem" }}
            />
          </Dropdown>
        </Space>
      </div>
      {/* Rest of the code */}
    </div>
  );
}

export default AppHeader;

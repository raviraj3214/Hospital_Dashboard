import React, { useState, useEffect } from "react";
//import AdminMenu from "../../components/Layout/AdminMenu";
//import Layout from "./../../components/Layout/Layout";
import axios from "axios";
//import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const DoctorProfile = () => {
  const [doctors, setDoctors] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setDoctors(data);
    } catch (error) {
      console.log(error);
      //toast.error("Someething Went Wrong");
      window.alert(error.response.errros);
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    
      <div className="row dashboard">
        <div className="col-md-3">
          
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {doctors?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`p.image`}
                    className="card-img-top" style={{width:"18rem",height:"18rem"}}
                    alt={p.name}
                  />
                  <div className="card-body" style={{ width: "16rem", height: "14rem" }}>
                    <h5 className="card-title">{p.name.substring(0,15)}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default DoctorProfile;

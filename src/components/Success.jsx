import React from "react";
import { useLocation } from "react-router-dom";
import "./Success.css";
const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="success-container">
      <h2>Form Submission Successful</h2>
      <div>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>
          Phone Number: +{formData.countryCode} {formData.phoneNumber}
        </p>
        <p>Country: {formData.country}</p>
        <p>City: {formData.city}</p>
        <p>PAN No.: {formData.panNo}</p>
        <p>Aadhar No.: {formData.aadharNo}</p>
      </div>
    </div>
  );
};

export default Success;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    countryCode: "",
    phoneNumber: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    validate();
  }, [formData]);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.countryCode)
      newErrors.countryCode = "Country Code is required";
    else if (!/^\d{1,4}$/.test(formData.countryCode))
      newErrors.countryCode = "Country Code must be 1 to 4 digits";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.panNo) newErrors.panNo = "PAN No. is required";
    if (!formData.aadharNo) newErrors.aadharNo = "Aadhar No. is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      navigate("/success", { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type={formData.showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="showPassword"
          checked={formData.showPassword}
          onChange={handleChange}
        />{" "}
        Show Password
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>Phone Number:</label>
        <div className="phone-number">
          <input
            type="tel"
            name="countryCode"
            placeholder="Country Code"
            value={formData.countryCode}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {errors.countryCode && <span>{errors.countryCode}</span>}
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>

      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>

      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>

      <div>
        <label>PAN No.:</label>
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>

      <div>
        <label>Aadhar No.:</label>
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

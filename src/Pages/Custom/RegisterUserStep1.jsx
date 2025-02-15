import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "swiper/css";
import { Button, Stack, TextField } from "@mui/material";

const RegisterUserStep1 = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/register-user-step-private-information");
  };

  return (
    <div className="registerSection">
      <h2>Register User Step 1 - General Information</h2>
      <h3>List Component: Input, Native Input, Button, Native Radio Button</h3>
      <Stack spacing={2} direction="column" sx={{ marginTop: '2rem' }}>
        <label htmlFor="name">Name</label>
        <TextField id="name" name="name" label="Name" variant="outlined" size="small" sx={{ width: "30rem" }} />
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="First name" style={{ height: "2rem" }} placeholder="Enter your first name" />
        <label htmlFor="lastName">Last Name</label>
        <TextField id="lastName" name="lastName" label="Last Name" variant="outlined" size="small" sx={{ width: "30rem" }} />
        <label>Gender</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label style={{ marginLeft: '2rem' }} htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label style={{ marginLeft: '2rem' }} htmlFor="female">Female</label>
        </div>
        <Button type="primary" variant="contained" sx={{ width: "10rem" }} onClick={handleNextStep}>Next Step</Button>
      </Stack>
    </div>
  );
};

export default RegisterUserStep1;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "swiper/css";
import { Button, Stack, TextField } from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login Successfully");
    navigate("/custom-login-otp");
  };

  return (
    <div className="registerSection">
      <h2>Login Form</h2>
      <h3>List Component: </h3>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column" sx={{ marginTop: '2rem' }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            size="small" sx={{ width: "30rem" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small" sx={{ width: "30rem" }}
          />
          <Button type="submit" variant="contained" sx={{ width: "10rem" }}>Next Step</Button>
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
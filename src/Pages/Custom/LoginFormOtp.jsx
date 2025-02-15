import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "swiper/css";
import { Button, Stack, TextField } from "@mui/material";

const LoginFormOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp === "123456") { // Replace with actual OTP validation logic
      alert("Login Successfully");
      navigate("/custom");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="registerSection">
      <h2>Login Form</h2>
      <h3>List Component: </h3>
      <h3>OTP: 123456</h3>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column" sx={{ marginTop: '2rem' }}>
          <TextField
            label="OTP"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ width: "30rem" }}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button type="submit" variant="contained" sx={{ width: "10rem" }}>Next Step</Button>
        </Stack>
      </form>
    </div>
  );
};

export default LoginFormOTP;
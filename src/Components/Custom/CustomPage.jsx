import React from "react";
import "./CustomPage.css";
import "swiper/css";
import {Button, Stack} from "@mui/material";

const CustomPage = () => {
  return (
    <>
      <div className="customSection">
        <h2>Custom Page Follow</h2>
        <Stack direction="column" sx={{ marginTop: '50px' }} spacing={2}>
          <Button
            sx={{ width: '200px' }}
            variant="contained"
            color="primary"
            href="/register-user-step-1"
          >
            Follow Register User
          </Button>
          <Button
            sx={{ width: '200px' }}
            variant="contained"
            color="primary"
            href="/custom-login"
          >
            Follow Login Form
          </Button>
          <Button sx={{ width: '200px' }} variant="contained" color="primary" disabled>Follow </Button>
          <Button sx={{ width: '200px' }} variant="contained" color="primary" disabled>Follow </Button>
        </Stack>
      </div>
    </>
  );
};

export default CustomPage;

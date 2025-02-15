import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "swiper/css";
import { Button, Stack, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const RegisterUserStep2 = () => {
  const navigate = useNavigate();
  const [houses, setHouses] = React.useState('');

  const handleNextStep = () => {
    navigate("/register-user-step-custom-information");
  };

  const handleHousesChange = (event) => {
    setHouses(event.target.value);
  };

  return (
    <div className="registerSection">
      <h2>Register User Step 2 - Private Information</h2>
      <h3>List Component: Single Native Select, CheckBox, MUI Select, Native textarea</h3>
      <Stack spacing={2} direction="column" sx={{marginTop: '2rem'}}>
        <label htmlFor="maritalStatus">Marital Status</label>
        <select id="maritalStatus" name="maritalStatus" style={{height: "2rem", width: "30rem"}}>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        <FormControlLabel
          control={<Checkbox name="haveChildren"/>}
          label="Have Children"
        />
        <FormControl sx={{width: "30rem"}}>
          <InputLabel id="houses-label">How many houses do you have?</InputLabel>
          <Select
            labelId="houses-label"
            id="houses"
            value={houses}
            label="How many houses do you have?"
            onChange={handleHousesChange}
            size="small"
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
        <label htmlFor="introHouse">Intro House</label>
        <textarea id="introHouse" name="introHouse" rows="4" cols="50" placeholder="Describe your house"
                  style={{width: "30rem"}}></textarea>
        <Button type="primary" variant="contained" sx={{width: "10rem"}} onClick={handleNextStep}>Next Step</Button>
      </Stack>
    </div>
  );
};

export default RegisterUserStep2;
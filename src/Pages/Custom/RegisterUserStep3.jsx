import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "swiper/css";
import { Button, Stack, Autocomplete, TextField, Slider, Typography, TextareaAutosize } from "@mui/material";

const RegisterUserStep3 = () => {
  const navigate = useNavigate();
  const [houses, setHouses] = React.useState('');
  const [years, setYears] = React.useState(0);
  const [money, setMoney] = React.useState(0);

  const handleNextStep = () => {
    navigate("/custom");
  };

  const handleHousesChange = (event) => {
    setHouses(event.target.value);
  };

  const handleYearsChange = (event, newValue) => {
    setYears(newValue);
  };

  const handleMoneyChange = (event) => {
    setMoney(event.target.value);
  };

  return (
    <div className="registerSection">
      <h2>Register User Step 3 - Custom Information</h2>
      <h3>List Component:</h3>
      <Stack spacing={2} direction="column" sx={{marginTop: '2rem'}}>
        <label htmlFor="interests">Interests</label>
        <select id="interests" name="interests" multiple style={{height: "6rem", width: "30rem"}}>
          <option value="sports">Sports</option>
          <option value="music">Music</option>
          <option value="travel">Travel</option>
          <option value="reading">Reading</option>
          <option value="cooking">Cooking</option>
        </select>
        <Autocomplete
          id="likeLifeInCity"
          options={["Yes", "No"]}
          renderInput={(params) => <TextField size="small" {...params} label="Do you like life in the city?" variant="outlined" />}
          sx={{ width: "30rem" }}
          size="small"
        />
        <Typography gutterBottom>Number of years in hometown</Typography>
        <Slider
          value={years}
          onChange={handleYearsChange}
          aria-labelledby="years-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={100}
          sx={{ width: "30rem" }}
        />
        <label htmlFor="introHomeTown">Intro Home Town</label>
        <TextareaAutosize
          id="introHomeTown"
          minRows={4}
          placeholder="Describe your home town"
          style={{ width: "30rem" }}
        />
        <label htmlFor="sooMoneyNow">Soo Money Now</label>
        <input
          type="range"
          id="sooMoneyNow"
          name="sooMoneyNow"
          min="0"
          max="100000"
          value={money}
          onChange={handleMoneyChange}
          style={{ width: "30rem" }}
        />
        <Typography gutterBottom>{`$${money}`}</Typography>
        <Button type="primary" variant="contained" sx={{width: "10rem"}} onClick={handleNextStep}>End Register</Button>
      </Stack>
    </div>
  );
};

export default RegisterUserStep3;
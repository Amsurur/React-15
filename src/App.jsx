import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
const App = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const { t, i18n } = useTranslation();

  const active = localStorage.getItem("i18nextLng");
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"ru"}>Russian</MenuItem>
            <MenuItem value={"tj"}>Tajik</MenuItem>
          </Select>
        </FormControl>
        <Box>{t("text1")}</Box>
        <p>{t("nav.home")}</p>
      </Box>
    </div>
  );
};

export default App;

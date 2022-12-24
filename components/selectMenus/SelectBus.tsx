import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import React from "react";

const SelectBus = ({
  bus,
  setBus,
}: {
  bus: string;
  setBus: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Otobüs Seç</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={bus}
        label="Otobüs Seç"
        onChange={(e) => setBus(e.target.value)}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectBus;

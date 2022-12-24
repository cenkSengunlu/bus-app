import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React from "react";

const AmountInput = ({
  title,
  value,
  setValue,
}: {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="outlined-adornment-amount">{title}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">₺</InputAdornment>}
        label={title}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormControl>
  );
};

export default AmountInput;

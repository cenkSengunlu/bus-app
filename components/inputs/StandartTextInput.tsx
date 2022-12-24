import { TextField } from "@mui/material";
import React from "react";

const StandartTextInput = ({
  title,
  value,
  setValue,
}: {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={title}
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default StandartTextInput;

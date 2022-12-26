import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React, { useEffect } from "react";

const DatePicker = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Tarih"
        inputFormat="DD/MM/YYYY" //depends on date lib
        value={value}
        onChange={setValue}
        renderInput={(params: TextFieldProps) => {
          return <TextField {...params} />;
        }}
        views={["year", "month", "day"]}
        showDaysOutsideCurrentMonth //very useful
      />
    </LocalizationProvider>
  );
};

export default DatePicker;

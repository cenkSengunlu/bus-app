import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { tr } from "date-fns/locale";

export default function BasicDateTimePicker() {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale={tr}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Tarih ve Saat"
        inputFormat="DD/MM/YYYY HH:mm" //depends on date lib
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}

import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function CustomPicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Tarih ve Saat"
            value={value}
            onChange={handleChange}
            components={{
              OpenPickerIcon: CalendarMonthIcon,
              LeftArrowIcon: ArrowLeftIcon,
              RightArrowIcon: ArrowRightIcon,
            }}
            renderInput={(params: TextFieldProps) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
}

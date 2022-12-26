import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import React from "react";
import { BusFeaturesType } from "../../app/typings";

const SelectMenu = ({
  menuId,
  title,
  options,
  disableOption,
  value,
  setValue,
}: {
  menuId: string;
  title: string;
  options: any;
  disableOption?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={menuId}>{title}</InputLabel>
      <Select
        labelId={menuId}
        id={menuId}
        value={value}
        label={title}
        disabled={options?.length === 0}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option: BusFeaturesType, index: number) => {
          return (
            <MenuItem
              key={index}
              value={option.id}
              disabled={disableOption === option.id}
            >
              {option.name ? option.name : option.plate_number}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectMenu;

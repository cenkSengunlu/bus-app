import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteMenu({
  title,
  menuId,
  options,
  value,
  setValue,
}: any) {
  const cityOptions = options.map((option: any) => {
    return {
      id: option.id,
      label: option.name,
    };
  });
  return (
    <Autocomplete
      disablePortal
      id={menuId}
      options={cityOptions}
      value={value}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
}

import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BusFeaturesType } from "../../app/typings";

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectMenu({
  title,
  menuId,
  properties,
  multipleVal,
  setMultipleVal,
}: {
  title: string;
  menuId: string;
  properties: BusFeaturesType[];
  multipleVal: string[];
  setMultipleVal: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const theme = useTheme();
  // const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof multipleVal>) => {
    const {
      target: { value },
    } = event;
    setMultipleVal(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl>
      <InputLabel id={`${menuId}-label`}>{title}</InputLabel>
      <Select
        labelId={menuId}
        id={menuId}
        multiple
        value={multipleVal}
        onChange={handleChange}
        input={<OutlinedInput label={title} />}
      >
        {properties &&
          properties.map((prop) => (
            <MenuItem
              key={prop.id}
              value={prop.id}
              style={getStyles(prop.id, multipleVal, theme)}
            >
              {prop.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

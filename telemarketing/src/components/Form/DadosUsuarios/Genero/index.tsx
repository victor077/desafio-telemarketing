import React from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormikContext } from "formik";
import { Empr├ęstimoConsignadoValues } from "../../Types";

const Genero = () => {
  const { setFieldValue, getFieldProps } =
    useFormikContext<Empr├ęstimoConsignadoValues>();

  const handleChangeSexo = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("sexo", value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Sexo</InputLabel>
      <Select
        {...getFieldProps("sexo")}
        label="Sexo"
        onChange={handleChangeSexo}
      >
        <MenuItem value={"FEMININO"}>Feminino</MenuItem>
        <MenuItem value={"MASCULINO"}>Masculino</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Genero;

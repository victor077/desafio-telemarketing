import React, { useState } from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFormikContext } from "formik";
import { Empr├ęstimoConsignadoValues } from "../../Types";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const SituacaoBeneficio = () => {
  const { setFieldValue, getFieldProps } =
    useFormikContext<Empr├ęstimoConsignadoValues>();

  const handleChangeSituacao = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFieldValue("situacaoBeneficio", value);
  };

  return (
    <FormControl fullWidth >
      <InputLabel>Situacao Beneficio</InputLabel>
      <Select
        {...getFieldProps("situacaoBeneficio")}
        label="Situacao Beneficio"
        onChange={handleChangeSituacao}
      >
        <MenuItem value={"ATIVO"}>Ativo</MenuItem>
        <MenuItem value={"DESATIVO"}>Desativo</MenuItem>
      </Select>
    </FormControl >
  );
};

export default SituacaoBeneficio;

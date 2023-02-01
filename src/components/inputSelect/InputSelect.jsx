import React from "react";
import { Grid, Typography, Select, Option } from "@mui/joy";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export function InputSelect({ title, selectOption }) {
  return (
    <Grid container  padding="10px">
      <Grid xs={12} sm={12}>
        <Typography component="p" textAlign="start">
          {title}
        </Typography>
      </Grid>
      <Grid xs={12}  sm={12}>
        <Select
          placeholder={selectOption[0]}
          indicator={<KeyboardArrowDown />}
          sx={{
            border: "none",
          }}
        >
          {selectOption.map((value, index) => (
            <Option
              value={value}
              key={index}
              sx={{ backgroundColor: "#EFEDEE !important" }}
            >
              {value}
            </Option>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}
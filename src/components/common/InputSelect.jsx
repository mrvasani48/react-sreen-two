import React from "react";
import { Grid, Typography, Select, Option, Box } from "@mui/joy";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  app: {
    padding: "7px",
    "& > div": {
      padding: "10px",
    },
  },
});
function InputSelect({ title, selectOption }) {
  const classes = useStyle();
  return (
    <Box className={classes.app}>
      <Grid container>
        <Grid xs={4} sm={4} md={4} lg={4}>
          <Typography component="p" textAlign="end">
            {title}:
          </Typography>
        </Grid>
        <Grid xs={8} sm={7} md={7} lg={7}>
          <Select
            placeholder={selectOption[0]}
            sx={{
              "--Select-minHeight": "40px",
              "--Select-radius": "24px",
              backgroundColor: "#EFEDEE !important",
              border: "none",
              "--Select-paddingInline": "26px",
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
    </Box>
  );
}

export default InputSelect;

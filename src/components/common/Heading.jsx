import React from "react";
import { Grid, Typography } from "@mui/joy";

function Heading({ title }) {
  return (
    <Grid xs={12} sm={12} md={12}>
      <Typography
        variant="p"
        component="p"
        fontSize="30px"
        sx={{ color: "black", fontWeight: "700" }}
      >
        {title}
      </Typography>
    </Grid>
  );
}

export default Heading;
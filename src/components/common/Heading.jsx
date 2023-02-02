import React from "react";
import { Grid, Typography } from "@mui/joy";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  app: {
    fontSize: "30px",
    color: "black",
    fontWeight: "700",
  },
});
function Heading({ title }) {
  const classes = useStyle();
  return (
    <Grid xs={12} sm={12} md={12}>
      <Typography variant="p" component="p" className={classes.app}>
        {title}
      </Typography>
    </Grid>
  );
}

export default Heading;

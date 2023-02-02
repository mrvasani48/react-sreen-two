import { Input, Typography, Textarea, Grid, Box } from "@mui/joy";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  app: {
    "& > div": {
      padding: "10px",
    },
  },
});
function EditText(props) {
  const classes = useStyle();
  return (
    <Box className={classes.app}>
      <Grid container spacing={2}>
        {props.label && (
          <Grid xs={4} sm={4} md={4} lg={4}>
            <Typography
              component="p"
              textAlign="end"
              paddingTop={1}
            >
              {props.label && props.label}
            </Typography>
          </Grid>
        )}
        <Grid xs={props.label ? 8 : 12}>
          {props?.isTextArea ? (
            <Textarea
              sx={{
                "--Select-minHeight": "40px",
                "--Select-radius": "24px",
                backgroundColor: "#EFEDEE",
                border: "none",
                "--Select-paddingInline": "26px",
              }}
              minRows={4}
            ></Textarea>
          ) : (
            <Input
              placeholder={props.placeholder}
              sx={{
                "--Input-minHeight": "40px",
                "--Input-radius": "24px",
                backgroundColor: "#EFEDEE",
                border: "none",
                "--Input-paddingInline": "26px",
              }}
              type={props.type}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditText;

import React, { useRef, useState } from "react";
import { Button, Typography, Stack, Grid, Box } from "@mui/joy";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  app: {
    border: "2px solid gray",
    borderRadius: "30px",
  },
  inner: {
    "& > div": {
      padding: 0,
      "& > div ,div:nth-child(1)": {
        padding: 7,
      },
    },
  },
  viewImg: {
    className: "view-img",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: "20px",
  },
}));

export function DocumentUpload(props) {
  const classes = useStyle();
  const [uploadedImg, setUploadedImg] = useState();
  const [isView, setIsView] = useState(false);
  const fileRef = useRef();
  const imageReg = /[.](jpg|jpeg|png)$/i;

  const handleClick = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.files[0].name.search(imageReg) > 0) {
      if (event.target.files[0].size / 1048576 < 50) {
        setUploadedImg(event.target.files[0]);
      } else {
        alert("your image size too big!");
      }
    } else {
      alert("please select image");
    }
  };
  const handleUploadFile = (event) => {
    event.preventDefault();
    if (uploadedImg) {
      console.log("details ==> ", uploadedImg);
    }
  };
  return (
    <Box className={classes.app}>
      <Grid container>
        <Grid xs={12} sm={12}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "400", fontSize: 20 }}
            htmlFor="upload-file text-dark"
          >
            {props.title}
          </Typography>
        </Grid>
        <Grid xs={12} sm={12}>
          <form>
            <Stack className={classes.inner}>
              <Grid container>
                <Grid sm={9}>
                  <Stack backgroundColor="#c6d9ec" borderRadius="60px">
                    <Stack
                      display="flex"
                      alignItems="center"
                      justifyContent="start"
                      direction="row"
                      spacing={2}
                    >
                      <Button
                        sx={{
                          backgroundColor: "#2d3878 !important",
                          color: "white",
                          borderRadius: "60px",
                        }}
                        onClick={handleClick}
                      >
                        Choose image
                      </Button>
                      <Button
                        sx={{
                          color: "#2d3878",
                          background: "transparent  !important",
                        }}
                        onClick={handleUploadFile}
                      >
                        Upload File
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid sm={3}>
                  <Button
                    sx={{
                      background: "none !important",
                      color: "#2d3878",
                      marginTop: "10px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsView(!isView);
                    }}
                  >
                    {isView && uploadedImg?.name ? "close" : "View "}
                  </Button>
                </Grid>
              </Grid>
              <input
                type="file"
                ref={fileRef}
                onChange={handleChange}
                accept="image/png, image/jpeg , image/jpg"
                style={{ display: "none" }}
              />
            </Stack>
            <Typography fontWeight="200" fontSize="20px" marginTop="30px">
              {uploadedImg ? uploadedImg?.name : ""}
            </Typography>
          </form>
        </Grid>
      </Grid>
      <Box className={classes.viewImg}>
        {isView && uploadedImg && (
          <img
            src={URL.createObjectURL(uploadedImg)}
            alt="uploaded img"
            style={{ maxWidth: "550px", maxHeight: "280px" }}
          />
        )}
      </Box>
    </Box>
  );
}

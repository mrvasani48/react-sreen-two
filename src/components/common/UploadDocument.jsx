import React, { useRef, useState } from "react";
import { Button, Typography, Stack } from "@mui/joy";

function UploadDocument(props) {
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
    <Stack>
      <Stack>
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop="20px"
          border="2px solid gray"
          padding="25px"
          borderRadius="30px"
          minWidth="390px"
        >
          <form className="form">
            <Typography
              variant="h5"
              sx={{ fontWeight: "400", fontSize: 28 }}
              htmlFor="upload-file text-dark"
            >
              {props.title}
            </Typography>
            <Stack className="form-btn-main" margin="15px 0px">
              <input
                type="file"
                ref={fileRef}
                onChange={handleChange}
                accept="image/png, image/jpeg , image/jpg"
                style={{ display: "none" }}
              />
              <Stack
                marginRight="30px"
                gap="60px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                direction="row"
              >
                <Stack backgroundColor="#ecefff" borderRadius="60px">
                  <Stack
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    padding="0px !important"
                    gap="20px"
                    direction="row"
                    spacing={2}
                    margin="20px"
                  >
                    <Button
                      sx={{
                        backgroundColor: "#2d3878 !important",
                        color: "white",
                        borderRadius: "60px",
                        padding: "10px !important",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                      onClick={handleClick}
                    >
                      Choose image
                    </Button>
                    <Button
                      sx={{
                        color: "#2d3878",
                        fontWeight: "400",
                        fontSize: "15px",
                        textTransform: "capitalize",
                        marginLeft: "0px !important",
                      }}
                      onClick={handleUploadFile}
                    >
                      Upload File
                    </Button>
                  </Stack>
                </Stack>
                <Stack>
                  <Button
                    sx={{
                      color: "#2d3878",
                      textTransform: "capitalize",
                      fontSize: "20px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsView(!isView);
                    }}
                  >
                    {isView && uploadedImg?.name ? "close" : "View "}
                  </Button>
                </Stack>
              </Stack>
            </Stack>

            <Typography fontWeight="200" fontSize="20px" marginLeft="30px">
              {uploadedImg ? uploadedImg?.name : ""}
            </Typography>
          </form>
        </Stack>
      </Stack>

      <Stack
        className="view-img"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: "30px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        {isView && uploadedImg && (
          <img
            src={URL.createObjectURL(uploadedImg)}
            alt="uploaded img"
            style={{ maxWidth: "550px", maxHeight: "280px" }}
          />
        )}
      </Stack>
    </Stack>
  );
}

export default UploadDocument;
import React, { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
// import profileImg from "../assets/image/profile.png";
import { Avatar, Typography, Stack, Button } from "@mui/joy";

export function PhotoUpload() {
  const [uploadedImg, setUploadedImg] = useState();
  const fileRef = useRef();
  const imageReg = /[.](jpg|jpeg|png)$/i;

  const handleClick = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.files[0].name.search(imageReg) > 0) {
      if (event.target.files[0].size / 1048576 < 5) {
        setUploadedImg(event.target.files[0]);
      } else {
        alert("your image size too big!");
      }
    } else {
      alert("please select image");
    }
  };
  return (
    <Stack
      sx={{
        border: "2px solid #3e445f",
        borderRadius: "30px",
        maxWidth: "480px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
          position: "relative",
        }}
      >
        <input
          type="file"
          ref={fileRef}
          onChange={handleChange}
          accept="image/png, image/jpeg , image/jpg"
          style={{ display: "none" }}
        />
        <Avatar
          sx={{
            width: 250,
            height: 250,
            borderRadius: "50%",
          }}
          src={
            uploadedImg
              ? URL.createObjectURL(uploadedImg)
              : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          }
          alt="profile-img"
        />
        <Button
          sx={{
            position: "absolute",
            bottom: "-25px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#ecefff !important",
            border: "none",
            color: "#3c467f",
            fontSize: "46px",
          }}
          onClick={handleClick}
        >
          <AddIcon />
        </Button>
      </Stack>
      <Typography
        sx={{
          marginTop: "55px",
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "300",
        }}
      >
        Upload photo
      </Typography>
    </Stack>
  );
}

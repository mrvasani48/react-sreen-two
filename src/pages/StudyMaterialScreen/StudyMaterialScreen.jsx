import { Grid, Box, Typography, Stack, Avatar, Button } from "@mui/joy";

import { makeStyles } from "@mui/styles";

import { UploadedDocument, NavLink, InputSelect } from "components";

import SearchIcon from "@mui/icons-material/Search";

const useStyle = makeStyles(() => ({
  root: {
    padding: 20,
  },
  app: {
    margin: 0,
    marginTop: "-30px",
    zIndex: 2,
    padding: 20,
    "& > div": {
      padding: 30,
      backgroundColor: "#ECEFFF",
      borderRadius: "0 15px 15px 15px ",
    },
  },
}));

export default function InquiryScreen() {
  const classes = useStyle();

  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography
              level={"h5"}
              component={"strong"}
              letterSpacing={2}
              textColor={"navy"}
            >
              Study Material
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack
              direction={"row"}
              justifyContent={"start"}
              gap="12px"
              sx={{ padding: "0px 15px 0px 18px" }}
            >
              <NavLink label="Syllabus" />
              <NavLink label="PPTs & Notes" active={true} />
              <NavLink label="Project Of senior" />
              <NavLink label="Paper" />
            </Stack>
          </Grid>

          <Grid item xs={12} md={12}>
            <Box className={classes.app}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                  <InputSelect
                    title="Year"
                    selectOption={["2021-22", "2022-23"]}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <InputSelect
                    title="Semster"
                    selectOption={["1-sem", "2-sem", "3-sem", "4-sem"]}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <InputSelect title="Material" selectOption={["PPT", "LC"]} />
                </Grid>
                <Grid item xs={6} md={3}>
                  <Stack
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection="row"
                    marginTop={6}
                  >
                    <Avatar
                      color="primary"
                      variant="solid"
                      sx={{ background: "#002e64" }}
                    >
                      <SearchIcon sx={{ fontSize: "25px" }} />
                    </Avatar>
                    <Button
                      color="primary"
                      size="md"
                      variant="solid"
                      sx={{ background: "#002e64" }}
                    >
                      See ALL
                    </Button>
                  </Stack>
                </Grid>
                {Array(12)
                  .fill(null)
                  .map((i) => (
                    <Grid item xs={12} md={3} key={i}>
                      <UploadedDocument />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

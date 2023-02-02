import { Grid, Typography, Stack, Box } from "@mui/joy";

import { makeStyles } from "@mui/styles";

import { PhotoUpload, DocumentUpload } from "components";
import EditText from "../../components/common/EditText";
import InputSelect from "../../components/common/InputSelect";

import SaveAsIcon from "@mui/icons-material/SaveAs";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { DUButton } from "../../components/common/Button";
import Heading from "../../components/common/Heading";

const useStyle = makeStyles(() => ({
  root: {
    margin: "30px",
    spacing: "40px",
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
  bankDetail: {
    margin: "50px 50px 0px 50px",
    padding: "20px",
    "& > div ": {
      padding: "32px 0",
    },
  },
  emergencyDetail:{
    border:" 2px solid #ff704d",
    marginTop: "40px",
    paddingTop: "20px",
    paddingBottom: "25px",
    borderRadius: "30px"
  }
}));

export default function InquiryScreen() {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Grid container={true} spacing={5}>
        <Heading title=" HR > Staff > View & Edit" />
        <Grid xs={12} sm={12} md={6} lg={4}>
          <EditText label="Name :" placeholder="vijaybhai joshi" type="text" />
          <EditText label="call" placeholder="9909678900" type="number" />
          <EditText
            label="Email ID :"
            placeholder="abcde@gmail.com"
            type="email"
          />
          <EditText label="Employee" placeholder="123456" type="text" />
          <EditText
            label="Email Id :"
            placeholder="abced12@gmail.com"
            type="email"
          />
          <InputSelect title="Designation :" selectOption={["admin"]} />
          <InputSelect title="teaching :" selectOption={["teaching"]} />
          <EditText label="Permanent Add :" isTextArea={true} />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4}>
          <EditText
            label="Adhar card no :"
            placeholder="1111 2222 3333"
            type="number"
          />
          <EditText label="Pan card no :" placeholder="11aa 222a" type="text" />
          <Box className={classes.bankDetail}>
            <Box border="2px solid #3e445f" borderRadius="30px">
              <Typography component={"p"} paddingLeft={2}>
                Bank Name
              </Typography>

              <EditText placeholder="HDFC" type="text" />
              <Typography component={"p"} paddingLeft={2}>
                Account No.
              </Typography>
              <EditText placeholder="9099 0099 099990" type="text" />
              <Typography component={"p"} paddingLeft={2}>
                IFSC code.
              </Typography>
              <EditText placeholder="hdfc033" type="text" />
              <Typography component={"p"} paddingLeft={2}>
                Branch Name
              </Typography>
              <EditText placeholder="mavdi" type="text" />
            </Box>
          </Box>
        </Grid>
        <Grid xs={10} sm={10} md={4} lg={3}>
          <PhotoUpload />
          <Box className={classes.emergencyDetail}>
            <EditText
              label="Emergency Name"
              placeholder="Prem Joshi"
              type="text"
            />
            <EditText
              label="Emergency Contact"
              placeholder="9099009909"
              type="number"
            />
            <EditText label="Blood Group." placeholder="A+" type="text" />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={12}>
          <hr />
        </Grid>
        <Grid xs={12} sm={12} md={12}>
          <Typography
            variant="p"
            component="p"
            fontSize="30px"
            sx={{ color: "black", fontWeight: "700" }}
          >
            {" "}
            <SaveAsIcon sx={{ fontSize: "30px" }} /> Document Attach
          </Typography>
          <Typography
            variant="p"
            component="p"
            fontSize="20px"
            sx={{ color: "#ff7d59", fontWeight: "700" }}
          >
            {" "}
            File Type For Uploding Documents Must Be in &#40;.Jpeg/.Jpg/.Png
            &#41; Format Maximum Size = 5 Mb
          </Typography>
        </Grid>

        {Array(9)
          .fill(null)
          .map((v, i) => (
            <Grid xs={12} sm={12} md={6} lg={4} key={i}>
              <DocumentUpload title={`Document ${i + 1}`} />
            </Grid>
          ))}

        <Grid xs={12} sm={12} md={12}>
          <Stack
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <DUButton
              sx={{
                backgroundColor: "#fff !important",
                color: "#2d3878 !important",
                border: "1px solid #2d3878",
              }}
              onClick={() => console.log("add new document")}
            >
              Add New Document <ArrowCircleRightIcon color="gray" />
            </DUButton>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row !important",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <DUButton
                sx={{ backgroundColor: "#2d3878 !important" }}
                onClick={() => console.log("add new document")}
              >
                <CloseIcon /> Cancel
              </DUButton>
              <DUButton
                sx={{ backgroundColor: "#2d3878 !important" }}
                onClick={() => console.log("add new document")}
              >
                <SaveIcon /> Save
              </DUButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

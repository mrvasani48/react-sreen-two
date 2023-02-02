import { Grid, Typography, Stack} from "@mui/joy";

import { makeStyles } from "@mui/styles";

import { InputSelect, PhotoUpload, EditText,DocumentUpload } from "components";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { DUButton } from "../../components/common/Button";
import Heading from "../../components/common/Heading";

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
      <Grid container={true} margin="30px" spacing="40px">
        <Heading title=" HR > Staff > View & Edit" />
        <Grid xs={12} sm={12} md={6} lg={4}>
          <EditText
            label="Name :"
            placeholder="Student &#40; As Per HSC &#41;"
            type="text"
          />
          <EditText placeholder="Mother Name " type="text" />
          <EditText label="Date of Birth :" placeholder="" type="date" />
          <InputSelect title="Gender" selectOption={["male", "female"]} />
          <EditText
            label="Aadhar Card No :"
            placeholder="2222 1111 2222"
            type="text"
          />
          <EditText
            label="Email Id :"
            placeholder="abced12@gmail.com"
            type="email"
          />
          <EditText label="Contact No :" placeholder="student" type="number" />
          <EditText label="" placeholder="parent" type="number" />
          <EditText label="" placeholder="guardian" type="number" />
          <EditText label="Permanent Add :" isTextArea={true} />
          <EditText label="City :" placeholder="Rajkot" type="text" />
          <EditText label="District :" placeholder="Rajkot" type="text" />
          <EditText label="Pincode :" placeholder="304045" type="number" />
          <InputSelect
            title="Cetegory"
            selectOption={["GENERAL", "SEBC", "SC", "ST"]}
          />
          <EditText label="Blood Group :" placeholder="A+" type="text" />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          border="2px solid #3e445f"
          borderRadius="30px"
        >
          <EditText label="Graduation :" placeholder="Marvadi" type="text" />
          <EditText
            label="Graduation per :"
            placeholder="Gujrat board"
            type="text"
          />
          <EditText
            label="Graduation institute Name :"
            placeholder="Marvadi"
            type="text"
          />
          <EditText
            label="Graduation University Name :"
            placeholder="Marvadi"
            type="text"
          />
          <EditText label="Seat No :" placeholder="1234" type="text" />
          <EditText label="Year of Passing" placeholder="2021" type="number" />
          <EditText label="Grades :" placeholder="B+" type="text" />
          <EditText
            label="CAT/MAT/CAMT/ATMS Roll NO :"
            placeholder="2300"
            type="number"
          />
          <EditText
            label="CAT/MAT/CAMT/ATMS Marks :"
            placeholder="720"
            type="number"
          />
          <InputSelect
            title="Admission Quota"
            selectOption={["MANAGEMENT", "ENGINEERING", "MEDICAL"]}
          />
          <EditText
            label="ACPC Marit No &#40; If Applicable &#41; :"
            placeholder="B.VOC"
            type="text"
          />

          <InputSelect
            title="Student Of Online Admission ACPC "
            selectOption={["yes", "no"]}
          />

          <EditText
            label="Name Of Institude ACPC :"
            placeholder="B.VOC"
            type="text"
          />

          <InputSelect
            title=" HSC Complete from Gujrat  "
            selectOption={["yes", "no"]}
          />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4}>
          <PhotoUpload />
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

        {Array(12)
          .fill(null)
          .map((v, i) => (
            <Grid xs={12} sm={12} md={6} lg={4} key={i}>
              <DocumentUpload title={`Document ${i+1}`} />
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
              sx={{ backgroundColor: "#fff !important", color: "#2d3878 !important",border:"1px solid #2d3878" }}
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
                sx={{ backgroundColor: "#2d3878 !important"}}
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
    </>
  );
}

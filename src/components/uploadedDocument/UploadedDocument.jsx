import { Stack,Typography } from "@mui/joy";


export function UploadedDocument(props) {

    return (

        <Stack
            sx={{
                backgroundColor: 'white',
                borderRadius: 25,
                height:150,
                position:"relative",
                '& > p': {
                    position: "absolute",
                    bottom:10,
                    left:14,
                    color:"#002e64",
                },
            }}
            fullWidth
        >
            <Typography  >
                XYZ Name
            </Typography>
        </Stack>

    )
}


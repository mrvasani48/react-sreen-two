import {
    Grid,
    Stack,    
    Box,
    Typography,
} from '@mui/joy'

import { makeStyles } from "@mui/styles";
import { EditText } from "components";

import { Person, Email, Phone, LocationCity } from "@mui/icons-material";

import draftImage from 'static/inboxIcon.jpg'
import backgroundImage from 'static/backgroundImage.jpg'
import logo from 'static/logo.jpg'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TransgenderIcon from '@mui/icons-material/Transgender';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CheckIcon from '@mui/icons-material/Check';
import SchoolIcon from '@mui/icons-material/School';
import SettingsAccessibility from '@mui/icons-material/SettingsAccessibility';
import GradeIcon from '@mui/icons-material/Grade';

import { SGIButton } from "components";
import { GenderAutoComplate } from 'components/autocomplate/GenderAutoComplate';
import { CourseAutoComplate } from 'components/autocomplate/CourseAutoComplate';

const useStyle = makeStyles(() => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        margin: 0,
        height: '95vh',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& > div': {
            padding: 30,
            backgroundColor: '#ECEFFF',
            borderRadius: '15px',
            boxShadow: '0px 0px 100px 0px grey',
        },
    },

    appBar: {
        top: 0,
        // position: 'fixed',
        bottom: 0,
        backgroundColor: '#2C3878',
        width: '100vw',
        minHeight: 300,
    },

    bottomBar: {
        top: 'auto',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'black',
        width: '100vw',
        height: 50,

        '& div': {
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
}));


export default function InquiryScreen() {


    const classes = useStyle();

    return (
        <>
            <Box
                className={classes.root}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        maxWidth: {
                            xl: '60%',
                            md: '70%',
                            sm: '60%'
                        }
                    }}
                >
                    <Grid item xs={12} md={12}>
                        <Typography
                            level={'h5'}
                            component={'strong'}
                            letterSpacing={2}
                            textColor={'navy'}
                        >Admission Inquiry</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <EditText
                            placeholder='Full name'
                            startDecorator={<Person />}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <EditText
                            placeholder='Email'
                            startDecorator={
                                <Email />
                            }
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <EditText
                            placeholder='Contact'
                            startDecorator={
                                <Phone />
                            }
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <GenderAutoComplate
                            placeholder="Gender"
                            startDecorator={<TransgenderIcon />}
                        />
                    </Grid>


                    <Grid item xs={12} md={4}>
                        <EditText
                            placeholder='City'
                            startDecorator={
                                <LocationCity />
                            }
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <CourseAutoComplate
                            placeholder="Intrested"
                            startDecorator={<PlaylistAddCheckIcon />}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <CourseAutoComplate
                            placeholder="Completed Course"
                            startDecorator={<CheckIcon />}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <EditText
                            placeholder="Pr. / Grade"
                            startDecorator={<GradeIcon />}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <EditText
                            placeholder="Previous Institude"
                            startDecorator={<SchoolIcon />}
                        />                        
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <EditText
                            placeholder="Referenced By"
                            startDecorator={<SettingsAccessibility />}
                        />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Stack direction={'row'} justifyContent={'end'}>
                            <SGIButton>Submit</SGIButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>


    );

}
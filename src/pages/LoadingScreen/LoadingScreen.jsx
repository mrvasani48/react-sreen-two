import { Box, LinearProgress } from "@mui/joy";
import { makeStyles } from "@mui/styles";
import { APP_BAR_HEIGHT } from "config/constant";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  fullScreen: {
    height: '100vh',
  },
}))

export default function LoadingScreen({ isFullScreen = false }) {

  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root, {
        [classes.fullScreen]: isFullScreen,
      }
      )}
    >
      <Box maxWidth={400} width="90%">
        <LinearProgress />
      </Box>
    </div>
  )
}
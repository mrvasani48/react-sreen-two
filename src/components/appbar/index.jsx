import { useState, Fragment } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Menu,
    Container,
    Avatar,
    Tooltip,
    MenuItem,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    Link,
    Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function SGIAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <Link
                                href="/"
                                style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                            >
                                <img
                                    alt=""
                                //   src="/Images/dashboard.png"
                                //   width="40"
                                //   height="40"
                                //   className="d-inline-block align-center"
                                />
                                &nbsp; &nbsp;
                                <b>Dashboard</b>
                            </Link>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <Link
                                href="/fees"
                                style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                            >
                                <img
                                    alt=""
                                //   src="/Images/warehouse.png"
                                //   width="40"
                                //   height="40"
                                //   className="d-inline-block align-center"
                                />
                                &nbsp; &nbsp;
                                <b>Fees</b>
                            </Link>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <Link
                                href="/admission/imba"
                                style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                            >
                                <img
                                    alt=""
                                //   src="/Images/warehouse.png"
                                //   width="40"
                                //   height="40"
                                //   className="d-inline-block align-center"
                                />
                                &nbsp; &nbsp;
                                <b>IMBA Admission</b>
                            </Link>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <Link
                                href="/admission/mba"
                                style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                            >
                                <img
                                    alt=""
                                //   src="/Images/warehouse.png"
                                //   width="40"
                                //   height="40"
                                //   className="d-inline-block align-center"
                                />
                                &nbsp; &nbsp;
                                <b>MBA Admission</b>
                            </Link>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <Link
                                href="/inquiry"
                                style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                            >
                                <img
                                    alt=""
                                //   src="/Images/warehouse.png"
                                //   width="40"
                                //   height="40"
                                //   className="d-inline-block align-center"
                                />
                                &nbsp; &nbsp;
                                <b>Inquiry</b>
                            </Link>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    height: "80px",
                    paddingTop: "8px",
                    background: "white",
                    marginBottom: "15px",
                }}
            >
                <Container style={{ maxWidth: "100%" }}>
                    <Toolbar disableGutters variant="dense" style={{ width: "100%" }}>
                        {/* MOBILEVIEW */}

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <div>
                                {["left"].map((anchor) => (
                                    <Fragment key={anchor}>
                                        <IconButton
                                            onClick={toggleDrawer(anchor, true)}
                                            sx={{ color: "black" }}
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Drawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </Fragment>
                                ))}
                            </div>
                        </Box>

                        {/* DESKTOPVIEW */}
                        <Stack
                            direction="row"
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            style={{ width: "100%" }}
                        >
                            <Stack direction="row" style={{ width: "100%" }}>
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    style={{ width: "100%" }}
                                    sx={{ justifyContent: { xs: "center" } }}
                                >
                                    {/* <img
                                        src="/Images/toplogo.png"
                                        height="65"
                                        width="110"
                                        alt=""
                                        sx={{
                                            display: { xs: "flex", md: "none" },
                                        }}
                                    /> */}
                                    <Stack
                                        direction={"row"}
                                        alignItems={"center"}
                                        sx={{
                                            flexGrow: 1,
                                            display: { xs: "none", md: "flex", lg: "flex" },
                                        }}
                                    >
                                        <Link
                                            href="/"
                                            style={{
                                                color: "rgba(0,0,0,.9)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <img
                                            // alt=""
                                            // src="/Images/dashboard.png"
                                            // width="40"
                                            // height="40"
                                            // className="d-inline-block align-center"
                                            />
                                            &nbsp;&nbsp;
                                            <b>Dashboard</b>
                                            &nbsp; &nbsp;
                                        </Link>
                                        <Link
                                            href="/fees"
                                            style={{
                                                color: "rgba(0,0,0,.9)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <img
                                            // alt=""
                                            // src="/Images/warehouse.png"
                                            // width="40"
                                            // height="40"
                                            // className="d-inline-block align-center"
                                            />
                                            &nbsp;&nbsp;
                                            <b>Fees</b>
                                            &nbsp; &nbsp;
                                        </Link>
                                        <Link
                                            href="/admission/imba"
                                            style={{
                                                color: "rgba(0,0,0,.9)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {/* <img
                                                alt=""
                                                src="/Images/crm.png"
                                                width="40"
                                                height="40"
                                            /> */}
                                            &nbsp; &nbsp;
                                            <b>IMBA Admission </b>
                                            &nbsp; &nbsp;
                                        </Link>
                                        <Link
                                            href="/admission/mba"
                                            style={{
                                                color: "rgba(0,0,0,.9)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {/* <img
                                                alt=""
                                                src="/Images/crm.png"
                                                width="40"
                                                height="40"
                                            /> */}
                                            &nbsp; &nbsp;
                                            <b>MBA Admission </b>
                                            &nbsp; &nbsp;
                                        </Link>
                                        <Link
                                            href="/inquiry"
                                            style={{
                                                color: "rgba(0,0,0,.9)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {/* <img
                                                alt=""
                                                src="/Images/inventory.png"
                                                width="40"
                                                height="40"
                                            /> */}
                                            &nbsp; &nbsp;
                                            <b>Inquiry</b>
                                            &nbsp; &nbsp;
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Stack>
                            {/* <Stack direction="row">
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Profiles">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/Images/profile.png" />
                                        </IconButton>
                                    </Tooltip>

                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <Link
                                            href="/login"
                                            style={{
                                                color: "rgba(0,0,0,.9)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <MenuItem
                                                // onClick={handleClose}
                                                onClick={() => {
                                                    localStorage.clear();
                                                    window.location.reload();
                                                }}
                                            >
                                                Logout
                                            </MenuItem>
                                        </Link>
                                    </Menu>
                                </Box>
                            </Stack> */}
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
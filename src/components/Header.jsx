import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DrawerComp from './Drawer/Drawer';
import LoginForm from './LoginForm';


const Navbar = () => {

    const [indicator, setIndicator] = React.useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <LocalLibraryIcon />
                    {
                        isMatch ? (
                            <>
                                <Typography variant="h5" component="div" sx={{ marginLeft: "10px", marginRight: "auto" }}>Trainer Panel</Typography>
                                <DrawerComp sx={{marginLeft:"auto"}}/>
                            </>
                        ) : (
                            <>
                                <Typography variant="h5" component="div" sx={{ marginLeft: "10px", marginRight: "auto" }}>Trainer Panel</Typography>
                                <Tabs textColor="white" indicatorColor="primary" value={indicator} onChange={(e, value) => setIndicator(value)}>

                                    <Tab label="Dashboard" />
                                    <Tab label="Courses" />
                                    <Tab label="Users" />
                                    <Tab label="Change-password" />
                                    <Tab label={<LoginForm />}/>
                                </Tabs>
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </>
    );
};
export default Navbar;

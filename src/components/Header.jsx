import { AppBar, Tab, Button, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DrawerComp from './drawer/Drawer';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

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
                                <DrawerComp sx={{ marginLeft: "auto" }} />
                            </>
                        ) : (
                            <>
                                <Typography variant="h5" component="div" sx={{ marginLeft: "10px", marginRight: "auto" }}>Trainer Panel</Typography>
                                <Tabs textColor="white" indicatorColor="primary" value={indicator} onChange={(e, value) => setIndicator(value)}>
                                    {/* <Link to="/" style={{color:"white",listStyle:"none",}}><Tab label="Dashboard"></Tab></Link>
                                    <Link to="/"><Tab label="Dashboard"></Tab></Link>
                                    <Link to="/"><Tab label="Dashboard"></Tab></Link>
                                    <Link to="/"><Tab label="Dashboard"></Tab></Link>
                                    <Link to="/"><Tab label={<LoginForm/>}></Tab></Link> */}
                                    <Tab label='Dashboard'  to='/' component={Link} />                                    
                                    <Tab label='Courses'  to='/courses' component={Link} />                                    
                                    <Tab label="Users"  to='/users' component={Link}/>
                                    <Tab label="Change-password"  to='/changepassword' component={Link}/>
                                    <Tab label={<LoginForm />} to='/' component={Link}/>
                                 

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

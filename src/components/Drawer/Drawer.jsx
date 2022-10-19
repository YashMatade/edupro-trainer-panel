import { Drawer, IconButton, List, ListItemButton, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LoginForm from '../LoginForm'
// const pages = ["Dashboard", "Courses", "Users", "Change-password", "Login"]

const DrawerComp = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>

                    {/* {
                    pages.map((page)=>{
                       return <ListItemButton onClick={()=>setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                {page}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    })
                } */}
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                Courses
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                Users
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                Change-password
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton >
                        <ListItemIcon>
                            <ListItemText>
                                <LoginForm />
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{ color: "white", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </div>
    )
}

export default DrawerComp;

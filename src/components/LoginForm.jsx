// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import { Tab } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// const BootstrapDialogTitle = (props) => {
//   const { children, onClose, ...other } = props;

//   return (

//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 1,
//             top: 1,
//             color: (theme) => theme.palette.grey[500],
//           }}


//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// };

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function LoginForm() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Tab label="Login" onClick={handleClickOpen}/>

//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle id="customized-dialog-title" sx={{margin:"auto",marginBottom:"20px"}}  onClose={handleClose}>
//           Trainer Login
//         </BootstrapDialogTitle>
//         <TextField id="outlined-basic" label="UserName" variant="outlined" sx={{marginRight:"50px",marginLeft:"50px",marginBottom:"20px"}}/>
//         <TextField id="outlined-basic" label="Password" variant="outlined" sx={{marginRight:"50px",marginLeft:"50px",marginBottom:"10px"}}/>
//         <DialogActions sx={{margin:"auto"}}>
//           <Button autoFocus onClick={handleClose}>
//           Login
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>

//     </div>
//   );
// }

import React, { useState } from 'react';
import { TextField, Typography, Box, Button, Dialog, useMediaQuery, useTheme } from '@mui/material';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
const LoginForm = () => {

  const [data,setData]=useState({
    name:"",
    password:""
  });

  const handleChange=()=>{

  }

  return (
    <>
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={8} >
          <Grid item xs={12} lg={6} sm={6} >
         
            <img style={{width:"500px",marginTop:"100px"}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
               alt="Sample image" />
      
          </Grid>
          <Grid item xs={12} lg={6} sm={6}>
            <form >
              <Box display="flex"
                flexDirection={"column"}
                maxWidth={400}
                alignItems="center"
                justifyContent={'center'}
                margin="auto"
                marginTop={10}
                padding={5}
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                  ":hover": {
                    boxShadow: '10px 10px 20px #ccc',
                  },
                }}
              >
                <Typography variant='h4' padding={3} textAlign="center">Trainer Login</Typography>
                <TextField name="username" margin="normal" type={'text'} varient='outlined' placeholder='Userame' />
                <TextField name="password" margin="normal" type={'password'} varient='outlined' placeholder='Password' />
                <Button sx={{ marginTop: 3, borderRadius: 3 }} varient='contained' color='warning'>Login</Button>
                <Button sx={{ marginTop: 3, borderRadius: 3 }} varient='contained' color='primary'>Forgot Password</Button>
              </Box>
            </form>
          </Grid>

        </Grid>
      </Container>
      </div>
    </>)
}
export default LoginForm;

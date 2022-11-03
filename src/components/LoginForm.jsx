import React, { useState } from 'react';
import { TextField, Typography, Box, Button, Dialog, useMediaQuery, useTheme } from '@mui/material';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import axios from 'axios';
import { useNavigate } from 'react-router';
const LoginForm = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  let loggedIn = false;

  let navigate = useNavigate();


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  function handleChange(e) {
    e.preventDefault();
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value)
    }
  }

  function submit(e) {
    e.preventDefault();
    let data = { email: email, password: password };
    console.log(data);
    axios.post("http://localhost:8081/trainer/authentication/login", data).then((result) => {
      console.log(result.data);
      if (result.data.status === "success") {
        localStorage.setItem("usertype", "trainer");
        localStorage.setItem("name", result.data.data.name);
        navigate("/dashboard");
      }
      else {
        alert("Invalid credentials");
        setEmail("");
        setPassword("");
      }
    })
  }

  return (
    <>
      <div>
        <Container maxWidth="lg">
          {
            isMatch ? (
              <>
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
                      <TextField name="email" id="email" value={email} onChange={(e) => { handleChange(e) }} margin="normal" type={'text'} varient='outlined' placeholder='Userame' />
                      <TextField name="password" id="password" value={password} onChange={(e) => { handleChange(e) }} margin="normal" type={'password'} varient='outlined' placeholder='Password' />
                      <Button sx={{ marginTop: 3, borderRadius: 3 }} varient='contained' color='warning' onClick={(e) => submit(e)}>Login</Button>
                      <Button sx={{ marginTop: 3, borderRadius: 3 }} varient='contained' color='primary'>Forgot Password</Button>
                    </Box>
                  </form>
                </Grid>

              </>
            ) : (
              <>
                <Grid container spacing={8} >
                  <Grid item xs={12} lg={6} sm={6} >

                    <img style={{ width: "500px", marginTop: "100px" }} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
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
                        <TextField name="email" id="email" value={email} onChange={(e) => { handleChange(e) }} margin="normal" type={'text'} varient='outlined' placeholder='Userame' />
                        <TextField name="password" id="password" value={password} onChange={(e) => { handleChange(e) }} margin="normal" type={'password'} varient='outlined' placeholder='Password' />
                        <Button sx={{ marginTop: 3, borderRadius: 3 }} varient='contained' color='warning' onClick={(e) => submit(e)}>Login</Button>
                        <Button sx={{ marginTop: 3, borderRadius: 3 }} varient='contained' color='primary'>Forgot Password</Button>
                      </Box>
                    </form>
                  </Grid>

                </Grid>
              </>
            )
          }

        </Container>
      </div>
    </>)
}
export default LoginForm;

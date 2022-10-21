import { Toolbar } from '@mui/material'
import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
const Footer = () => {
  return (
    <>

      <Box style={{ backgroundColor: "#063970", color: "white", bottom: 0,marginTop:'10vh', paddingBottom:"auto"}}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
              <Grid item xs={12} sm={1}>
                {/* <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link href='/'>contact</Link>
                </Box>
                <Box>
                  <Link href='/'>contact</Link>
                </Box> */}
              </Grid>
              <Grid item xs={12} sm={10}>
                <Box><h1>Trainer Name</h1></Box>
                <Box>
                   He is entrepreneur and trainer who trains students and professionals in area of website development, application development and data science & engineering.
                </Box>
              </Grid>
            <Grid item xs={12} sm={1}>
              {/* <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href='/'>Login</Link>
              </Box>
              <Box>
                <Link href='/'>Register</Link>
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  )
}

export default Footer;

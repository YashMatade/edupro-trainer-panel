import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';






export default function Cards() {
  return (
    <>
    <Container >
    <Grid container spacing={4}  >
        <Grid item lg={4} sm={6} xs={12}>
        <Card sx={{ minWidth: 100 }} >
      <CardContent >
        
        <Typography variant="h5" component="div"  >
          Courses
        </Typography>
       
        
      </CardContent>
      <CardActions>
        <Button size="small">500</Button>
      </CardActions>
    </Card>

        </Grid>

         <Grid item lg={4} sm={6} xs={12}>
         <Card sx={{ minWidth: 100 }}>
      <CardContent>
        
        <Typography variant="h5" component="div" >
          Users
        </Typography>
       
        
      </CardContent>
      <CardActions>
        <Button size="small">200</Button>
      </CardActions>
    </Card>

        </Grid>

        <Grid item lg={4} sm={6} xs={12}>
        <Card sx={{ minWidth: 100 }}>
      <CardContent>
       
        <Typography variant="h5" component="div">
          Sales
        </Typography>
        
        
      </CardContent>
      <CardActions>
        <Button size="small">300</Button>
      </CardActions>
    </Card>

        </Grid>


    </Grid>
</Container>

        </>
  );
}

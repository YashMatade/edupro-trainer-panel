import { AddCircleOutlineOutlined, Link } from "@mui/icons-material";
import { Breadcrumbs, Typography, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";

const Courses = () => {
    return (
        <>
            <div style={{ marginTop: "100px" }}>
                    <Grid container>
                        <Grid lg={6} sm={6} xs={6}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Typography color="primary">Trainer Panel</Typography>
                                <Typography color="primary">Courses</Typography>
                            </Breadcrumbs>
                        </Grid>
                        <Grid lg={6} sm={6} xs={6} align="right">
                            <Button variant='contained'>Add Course{""}  </Button>
                        </Grid>

                    </Grid>





            </div>
        </>
    )
}
export default Courses;
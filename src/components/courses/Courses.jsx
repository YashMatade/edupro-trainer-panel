import { Link } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";

const Courses = () => {
    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="primary">Trainer Panel</Typography>
                    <Typography color="primary">Courses</Typography>
                </Breadcrumbs>
                
            </div>
        </>
    )
}
export default Courses;
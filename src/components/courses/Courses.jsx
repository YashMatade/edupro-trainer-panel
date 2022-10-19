import { Link } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";

const Courses = () => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="primary" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="primary"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="primary">Breadcrumbs</Typography>
            </Breadcrumbs>
        </>
    )
}
export default Courses;
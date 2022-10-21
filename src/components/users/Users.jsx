import { Link } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";

const Users = () => {
    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="primary">Trainer Panel</Typography>
                    <Typography color="primary">Users</Typography>
                </Breadcrumbs>
                
            </div>
        </>
    )
}
export default Users;
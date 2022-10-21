import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react'
import Barchart from './Barchart';
import Cards from './Cards'

const Dashboard = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="primary"
                    href="/material-ui/getting-started/installation/"
                >
                    Trainer Panel
                </Link>
                <Typography color="primary">Dashboard</Typography>
            </Breadcrumbs>
            {/* components */}
            <Cards />
            <Barchart/>
        </div>
    )
}

export default Dashboard;

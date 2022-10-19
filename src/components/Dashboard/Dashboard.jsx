import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react'
import Barchart from './Barchart';
import Cards from './Cards'

const Dashboard = () => {
    return (
        <div style={{marginTop:"100px"}}>
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
            <Cards />
            <Barchart/>
        </div>
    )
}

export default Dashboard;

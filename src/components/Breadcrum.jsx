import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick} style={{marginTop:"90px",marginBottom:"10px"}}>
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
    </div>
  );
}

// import { AddCircleOutlineOutlined, Link } from "@mui/icons-material";
// import { Breadcrumbs, Typography, Button, Grid } from "@mui/material";
// import { Container } from "@mui/system";

// const Courses = () => {
//     return (
//         <>
//             <div style={{ marginTop: "100px" }}>
//                     <Grid container>
//                         <Grid lg={6} sm={6} xs={6}>
//                             <Breadcrumbs aria-label="breadcrumb">
//                                 <Typography color="primary">Trainer Panel</Typography>
//                                 <Typography color="primary">Courses</Typography>
//                             </Breadcrumbs>
//                         </Grid>
//                         <Grid lg={6} sm={6} xs={6} align="right">
//                             <Button variant='contained'>Add Course{""}  </Button>
//                         </Grid>

//                     </Grid>





//             </div>
//         </>
//     )
// }
// export default Courses;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, IconButton, Link, Pagination, Typography, Button } from '@mui/material';
import { Breadcrumbs } from "@mui/material";
import { Container } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function createData(Action, name, calories, fat, carbs, protein) {
    return { Action, name, calories, fat, carbs, protein };
}

const rows = [
    createData("", "MERN STACK", 245, 8.0, 24, 4.0),
    createData("", 'MEAN STACK', 237, 9.0, 37, 4.3),
    createData("", 'REACT.JS', 262, 16.0, 24, 6.0),
    createData("", 'ANGULAR.JS', 305, 3.7, 67, 4.3),
    createData("", 'PYTHON', 356, 16.0, 49, 3.9),
];

export default function Courses() {
    return (
        <>
            <Container>
                <Grid container style={{ marginTop: "100px", marginBottom: "20px" }}>
                    <Grid lg={6} sm={6} xs={6}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography color="primary">Trainer Panel</Typography>
                            <Typography color="primary">Courses</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid lg={6} sm={6} xs={6} align="right">
                        <Button variant='contained'>Add Course{""} </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} lg={12} sm={12} align="right">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow xs display="flex" justifyContent="center" alignItems="center">
                                        <StyledTableCell align="center" colSpan={2}>Action</StyledTableCell>
                                        <StyledTableCell align="center">name</StyledTableCell>
                                        <StyledTableCell align="center">calories</StyledTableCell>
                                        <StyledTableCell align="center">Fat&nbsp;(g)</StyledTableCell>
                                        <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
                                        <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.Action}>
                                            <StyledTableCell component="th" scope="row">
                                                <Link to="/editFields">
                                                    <IconButton component={Link} aria-label="edit">
                                                        <EditIcon />
                                                    </IconButton>
                                                </Link>
                                            </StyledTableCell>
                                            <StyledTableCell component="th" scope="row">
                                                <IconButton aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>

                            </Table>

                            <Typography align="right">
                                <Pagination count={5} color="primary" />
                            </Typography>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
}

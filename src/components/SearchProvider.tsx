import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Doctor } from "./types";

function createData(doctor: Doctor): { name: string; doctorData: Doctor } {
  return {
    name: doctor.doctor_name,
    doctorData: doctor,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const acceptingPatientsValue = row.doctorData.accepting_patients
    ? "Yes"
    : "No";

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="medium"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: '1.3rem'}}>
          {row.name }
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="doctor-details">
                <TableBody>
                  <TableRow>
                    <TableCell>Specialization</TableCell>
                    <TableCell>{row.doctorData.specialization}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{row.doctorData.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>{row.doctorData.phone_number}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Accepting Patients</TableCell>
                    <TableCell>{acceptingPatientsValue}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function DoctorTable() {
  const [doctorData, setDoctorData] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/doctor");
        if (response.ok) {
          const data: Doctor[] = await response.json();
          setDoctorData(data);
        } else {
          console.error("Failed to fetch doctor data");
        }
      } catch (error) {
        console.error("Error while fetching doctor data: ", error);
      }
    };

    fetchData();
  }, []);

  const rows = doctorData.map((doctor ) => createData(doctor));

  return (
    <TableContainer className="doctor-table" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: 'bold', fontSize: '2rem' }}>Find A Provider</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

 
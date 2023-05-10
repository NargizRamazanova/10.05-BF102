import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Index() {

  const [passengers, setPassengers] = useState({})
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(6)

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => setPassengers(data))
  }, [page, size])

  const handlePrev = () => {
    if (page != 0) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (passengers.totalPages != page) {
      setPage(page + 1)
    }
  }

  const handleEdit = (id)=> {
    navigate(`/admin/${id}/edit`)
  }

  return (
    <Container maxWidth="xl">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Trips</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passengers.data?.map((elem) => (

              <TableRow
                key={elem._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{elem._id}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Link to={`/employees/${elem._id}`}>
                    {elem.name}
                  </Link>
                </TableCell>
                <TableCell align="center">{elem.trips}</TableCell>
                <TableCell align="center"><Button onClick={()=>handleEdit(elem._id)} variant="contained">Edit</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handlePrev} variant="text">Prev</Button>
      <Button onClick={handleNext} variant="text">Next</Button>
    </Container>
  )
}

export default Index
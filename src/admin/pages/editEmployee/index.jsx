import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Index() {

  const [name, setName] = useState("")
  const [trips, setTrips] = useState(0)

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger/${id}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name);
        setTrips(data.trips)
      })
  }, [id])

  const handleEdit = () => {
    fetch(`https://api.instantwebtools.net/v1/passenger/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        trips: trips,
        airline: 2,
      }),
    })
      .then(res => console.log(res))
  }


  return (
    <>
      <Container maxWidth="xl">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Trips"
          type='number'
          variant="standard"
          value={trips}
          onChange={(e) => setTrips(e.target.value)}
        />
        <Button onClick={handleEdit} variant="text">Save</Button>

      </Container>
    </>
  )
}

export default Index
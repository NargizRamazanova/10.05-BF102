import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';

function Index() {
  let { id } = useParams();

  const [passenger, setPassenger] = useState({})

  useEffect(()=> {
    fetch(`https://api.instantwebtools.net/v1/passenger/${id}`)
      .then(res=> res.json())
      .then(data => setPassenger(data))
  }, [id])

  return (
    <>
      <h1>{passenger.name}</h1>
      <h3>{passenger.trips}</h3>
      {
        passenger.airline?.map((elem)=> (
          <p>{elem.name}</p>
        ))
      }
    </>
  )
}

export default Index
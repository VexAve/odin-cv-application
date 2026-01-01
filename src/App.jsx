// import { useState } from 'react'
import './App.css'
import Information from '../components/Information'

const info = [
  {
    name: "Name",
    type: "text",
    value: "Dylan",
  },
  {
    name: "Email",
    type: "email",
    value: "designdyle@gmail.com",
  },
  {
    name: "Phone Number",
    type: "tel",
    value: "1234567890",
  },
];

function App() {
  return (
    <>
      <h1>General Information</h1>
      <Information info={info} />
      <hr />
    </>
  );
}

export default App

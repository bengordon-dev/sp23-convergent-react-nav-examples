import './App.css';
// necessary import (2 things)
import Home from './pages/Home';
import Bills from './pages/Bills';
import { bills } from './Database';
import BillPage from './pages/BillPage';
import { useState } from "react";

export default function App() {
  const [onDesk, setOnDesk] = useState(bills)
  const [signed, setSigned] = useState([])
  const [vetoed, setVetoed] = useState([])
  
  const getPath = (bill) => bill.title.split(" ").map(e => e[0]).join("")

  // call a certain function
  // route for home page
  // route for Bills.js (pass in each state variable + mutator)
  // route for each bill 

  return (
    <Home/>
  )
}
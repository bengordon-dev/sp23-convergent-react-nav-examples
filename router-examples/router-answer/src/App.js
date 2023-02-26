import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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

  const router = createBrowserRouter([
    ...[
      {path: "/", element: <Home/>},
      {path: "/bills", element: <Bills 
        onDesk={onDesk} setOnDesk={setOnDesk}
        signed={signed} setSigned={setSigned}
        vetoed={vetoed} setVetoed={setVetoed}
      />},
    ], 
    ...bills.map(bill => ({
      path: getPath(bill), 
      element: <BillPage data={bill}/>
    }))
  ]);
  return (
    <RouterProvider router={router} />
  )
}
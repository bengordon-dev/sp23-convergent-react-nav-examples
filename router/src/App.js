import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Bills from './pages/Bills';
import { bills } from './Database';
import BillPage from './pages/BillPage';

const router = createBrowserRouter([...[
  {path: "/", element: <Home />},
  {path: "/bills", element: <Bills />},
], ...bills.map(bill => ({path: bill.title.split(" ").map(e => e[0]).join(""), element: <BillPage data={bill}/>}))
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
import { bills } from "../Database"
import { useNavigate } from "react-router-dom";


export default function Bills(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>bills</h1>
      {bills.map(bill => <div>
        <button onClick={() => navigate("/" + bill.title.split(" ").map(e => e[0]).join(""))}>{bill.title}</button>
      </div>)}
    </div>
  )
}
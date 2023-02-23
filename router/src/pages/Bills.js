import { bills } from "../Database"
import { useNavigate } from "react-router-dom";
import "../App.css"
import { useState } from "react";

export default function Bills(props) {
  const navigate = useNavigate();
  const [onDesk, setOnDesk] = useState(bills)
  return (
    <div className="page flexCenter">
      <h1>On Desk</h1>
      <div className="onDesk flexCenter">
        {onDesk.map(bill => <div className="billInfo flexCenter">
          <h2>{bill.title}</h2>
          <button onClick={() => navigate("/" + bill.title.split(" ").map(e => e[0]).join(""))}>More info</button>
        </div>)}
        <button className="nav" onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  )
}
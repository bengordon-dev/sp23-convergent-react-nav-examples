import { bills } from "../Database"
import { useNavigate } from "react-router-dom";
import "../App.css"
import { useState } from "react";

function BillInfo(props) {
  const path = "/" + props.bill.title.split(" ").map(e => e[0]).join("")
  return (
    <div className="billInfo flexCenter">
      {props.sign && props.veto ? 
        <h2>{props.bill.title}</h2> :
        <h3>{props.bill.title}</h3>
      }
      {props.navigate && <button onClick={() => props.navigate(path)}>More info</button>}
      {props.sign && props.veto && <div className="flexRow billActions">
        <button onClick={props.sign} style={{backgroundColor: "#9f9"}}>Sign</button>
        <button onClick={props.veto} style={{backgroundColor: "#f99"}}>Veto</button>
      </div>}
    </div>
  )
}


export default function Bills(props) {
  const navigate = useNavigate();
  const [onDesk, setOnDesk] = useState(bills)
  const [signed, setSigned] = useState([])
  const [vetoed, setVetoed] = useState([])

  function signBill(bill) {
    setSigned([...signed, bill])
    setOnDesk([...onDesk.filter(b => b.title !== bill.title)])
  }

  function vetoBill(bill) {
    setVetoed([...vetoed, bill])
    setOnDesk([...onDesk.filter(b => b.title !== bill.title)])
  }

  return (
    <div className="page flexCenter">
      <h1>On Desk</h1>
      <div className="onDesk flexCenter">
        {onDesk && onDesk.map(bill => <BillInfo 
          bill={bill} 
          navigate={navigate}
          sign={() => signBill(bill)}
          veto={() => vetoBill(bill)}
        />)}
        <button className="nav" onClick={() => navigate("/")}>Go Home</button>
      </div>
      <div className="flexRow">
        <div className="flexCenter column">
          <h1>Signed</h1>
          {signed && signed.map(bill => <BillInfo bill={bill} />)}
        </div>
        <div className="flexCenter column">
          <h1>Vetoed</h1>
          {vetoed && vetoed.map(bill => <BillInfo bill={bill} />)}
        </div>
      </div>
    </div>
  )
}
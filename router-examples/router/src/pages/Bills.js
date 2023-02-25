import { useNavigate } from "react-router-dom";
import "../App.css"
import BillInfo from "../components/BillInfo";

export default function Bills(props) {
  const navigate = useNavigate();

  function signBill(bill) {
    props.setSigned([...props.signed, bill])
    props.setOnDesk([...props.onDesk.filter(b => b.title !== bill.title)])
  }

  function vetoBill(bill) {
    props.setVetoed([...props.vetoed, bill])
    props.setOnDesk([...props.onDesk.filter(b => b.title !== bill.title)])
  }

  return (
    <div className="page flexCenter">
      <h1>On Desk</h1>
      <div className="onDesk flexCenter">
        {props.onDesk && props.onDesk.map(bill => <BillInfo 
          bill={bill} 
          navigate={navigate}
          sign={() => signBill(bill)}
          veto={() => vetoBill(bill)}
        />)}
      </div>
      <button className="nav" style={{marginTop: 20}} onClick={() => navigate("/")}>Go Home</button>
      <div className="flexRow">
        <div className="flexCenter column">
          <h1>Signed</h1>
          {props.signed && props.signed.map(bill => <BillInfo bill={bill} />)}
        </div>
        <div className="flexCenter column">
          <h1>Vetoed</h1>
          {props.vetoed && props.vetoed.map(bill => <BillInfo bill={bill} />)}
        </div>
      </div>
    </div>
  )
}
// necessary import 
import "../App.css"
import BillInfo from "../components/BillInfo";

export default function Bills(props) {
  // necessary declaration

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
        {props.onDesk && props.onDesk.map((bill, i) => <BillInfo 
          bill={bill} 
          navigate={null /* implement this */}
          sign={() => signBill(bill)}
          veto={() => vetoBill(bill)}
          key={i}
        />)}
      </div>
      <button className="nav" style={{marginTop: 20}} onClick={() => alert("Implement me")}>Go Home</button>
      <div className="flexRow">
        <div className="flexCenter column">
          <h1>Signed</h1>
          {props.signed && props.signed.map((bill, i) => <BillInfo bill={bill} key={i} />)}
        </div>
        <div className="flexCenter column">
          <h1>Vetoed</h1>
          {props.vetoed && props.vetoed.map((bill, i) => <BillInfo bill={bill} key={i} />)}
        </div>
      </div>
    </div>
  )
}
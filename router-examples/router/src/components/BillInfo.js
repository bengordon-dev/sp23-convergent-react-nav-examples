export default function BillInfo(props) {
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
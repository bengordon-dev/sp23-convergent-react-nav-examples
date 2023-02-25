export default function BillInfo(props) {
  const path = "/" + props.bill.title.split(" ").map(e => e[0]).join("")
  return (
    <div className="billInfo flexCenter">
      {props.sign && props.veto ? 
        <h2>{props.bill.title}</h2> :
        <h3>{props.bill.title}</h3>
      }
      <p>House Vote</p>
      {props.bill.houseVote && <div className="voteTotal flexRow">
        <div style={{width: props.bill.houseVote[0], backgroundColor: "#8f8"}}>
          {props.bill.houseVote[0]}
        </div>
        <div style={{width: props.bill.houseVote[1], backgroundColor: "#f88"}}>
          {props.bill.houseVote[1]}
        </div>
      </div>}
      <p>Senate Vote</p>
      {props.bill.senateVote && <div className="voteTotal flexRow">
        <div style={{width: props.bill.senateVote[0]*4.35, backgroundColor: "#8f8"}}>
          {props.bill.senateVote[0]}
        </div>
        <div style={{width: props.bill.senateVote[1]*4.35, backgroundColor: "#f88"}}>
          {props.bill.senateVote[1]}
        </div>
      </div>}
      {props.navigate && <button onClick={() => props.navigate(path)}>More info</button>}
      {props.sign && props.veto && <div className="flexRow billActions">
        <button onClick={props.sign} style={{backgroundColor: "#9f9"}}>Sign</button>
        <button onClick={props.veto} style={{backgroundColor: "#f99"}}>Veto</button>
      </div>}
    </div>
  )
}
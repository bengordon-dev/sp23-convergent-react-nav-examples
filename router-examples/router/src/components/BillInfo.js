// necessary import (new component)

export default function BillInfo(props) {
  const path = "/" + props.bill.title.split(" ").map(e => e[0]).join("")
  const underConsideration = props.sign && props.veto
  return (
    <div className="billInfo flexCenter">
      {underConsideration ? 
        <h2>{props.bill.title}</h2> :
        <h3>{props.bill.title}</h3>
      }
      {underConsideration && props.bill.houseVote && <div className="voteTotal flexRow">
        <p>House&nbsp;</p>
        <div style={{width: props.bill.houseVote[0], backgroundColor: "#8f8", marginLeft: "auto"}}>
          {props.bill.houseVote[0]}
        </div>
        <div style={{width: props.bill.houseVote[1], backgroundColor: "#f88", marginRight: 50}}>
          {props.bill.houseVote[1]}
        </div>
      </div>}
      {underConsideration && props.bill.senateVote && <div className="voteTotal flexRow">
        <p>Senate</p>
        <div style={{width: props.bill.senateVote[0]*4.35, backgroundColor: "#8f8", marginLeft: "auto"}}>
          {props.bill.senateVote[0]}
        </div>
        <div style={{width: props.bill.senateVote[1]*4.35, backgroundColor: "#f88", marginRight: 50}}>
          {props.bill.senateVote[1]}
        </div>
      </div>}
      {/* imported component */}
      {props.sign && props.veto && <div className="flexRow billActions">
        <button onClick={props.sign} style={{backgroundColor: "#9f9"}}>Sign</button>
        <button onClick={props.veto} style={{backgroundColor: "#f99"}}>Veto</button>
      </div>}
    </div>
  )
}
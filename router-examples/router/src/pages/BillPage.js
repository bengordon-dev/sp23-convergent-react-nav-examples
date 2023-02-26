// necessary import 

export default function BillPage(props) {
  // necessary declarations
  return (
    <div className="page flexCenter">
      <h1>{props.data.title}</h1>
      <button className="nav" onClick={() => alert("Implement me")}>Go Back</button>
    </div>
  )
}
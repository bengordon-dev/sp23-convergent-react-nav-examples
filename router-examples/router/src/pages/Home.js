import "../App.css"
// necessary import

export default function Home(props) {
  // necessary declaration
  return (
    <div className="page flexCenter">
      <h1>Oval Office Desk</h1>
      <img className="pic" src={require("../assets/signing_bill.jpeg")}/>
      <button className="nav" onClick={() => alert("implement me")}>See Bills to Sign</button>
    </div>
  )
}
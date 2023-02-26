import "../App.css"
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();
  return (
    <div className="page flexCenter">
      <h1>Oval Office Desk</h1>
      <img className="pic" src={require("../assets/signing_bill.jpeg")}/>
      <button className="nav" onClick={() => navigate("/bills")}>See Bills to Sign</button>
    </div>
  )
}
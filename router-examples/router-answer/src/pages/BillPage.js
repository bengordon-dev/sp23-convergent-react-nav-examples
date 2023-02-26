import { useNavigate } from "react-router-dom";

export default function BillPage(props) {
  const navigate = useNavigate()
  return (
    <div className="page flexCenter">
      <h1>{props.data.title}</h1>
      <button className="nav" onClick={() => navigate("/bills")}>Go Back</button>
    </div>
  )
}
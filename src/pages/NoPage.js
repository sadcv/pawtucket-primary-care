import './NoPage.css';
import {Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="NoPage" style={{height: "40rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <p style={{fontSize: "48px"}}>We're sorry, this page was not found.</p>
      <Link style={{fontSize: "48px"}} to="/" >Back To Home</Link>
    </div>
  );
}

export default NoPage;

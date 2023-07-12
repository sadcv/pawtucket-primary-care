import './NoPage.css';
import Helmet from "react-helmet";
import logo from "../media/logo_with_circle.png"
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="NoPage" style={{ height: "40rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found - Pawtucket Primary Care</title>
        <meta name="description" content="We're sorry, the sub-page you are looking for does not seem to exist. Type pawtucketprimarycare.com into your browser to go to our home page." />
      </Helmet>
      <p style={{ fontSize: "32px", marginBottom: "1rem", textAlign: "center" }}>Welcome to the website of</p>
      <img style={{ width: "8rem", height: "8rem", border: "5px solid #2C7370", borderRadius: "8rem" }} src={logo} alt="Pawtucket Primary Care logo" />
      <p style={{ fontSize: "32px", fontWeight: "600", color: "#2C7370", marginBottom: "2rem" }}>Pawtucket Primary Care</p>
      {/* <p style={{fontSize: "32px"}}>your local primary care office.</p> */}
      <p style={{ fontSize: "24px", marginBottom: "1rem", textAlign: "center", padding: "0rem 1rem 0rem 1rem" }}>We're sorry, the sub-page you are looking for does not seem to exist.</p>
      <Link style={{ fontSize: "24px" }} to="/" >Back To Home</Link>
    </div>
  );
}

export default NoPage;

import './Layout.css';
import { Outlet, Link } from "react-router-dom";
import logo from "../media/logo_with_circle.png"

function Layout() {
  return (
    <div className="Layout">
      <nav style={{ color: "white", backgroundColor: "#2C7370", display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }} >
          <img style={{ width: "3rem", height: "3rem" }} src={logo} alt="Pawtucket Primary Care logo" />
          <h1>Pawtucket Primary Care</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link className='navLink' to="/">Home</Link>
          <Link className='navLink' to="/services">Services</Link>
          <Link className='navLink' to="/clinician">Our Clinician</Link>
          <Link className='navLink' to="/contact">Contact Us</Link>
          <Link className='navLink' to="/hours">Hours Of Operation</Link>
          <Link className='navLink' to="/insurance">Insurance</Link>
          <Link className='navLink' to="/appointment">Book An Appointment</Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;

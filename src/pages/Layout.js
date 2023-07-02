import './Layout.css';
import { Outlet, Link } from "react-router-dom";
import logo from "../media/logo_with_circle.png"

function Layout() {
  return (
    <div className="Layout">
      {/* Header */}
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

      {/* Footer */}
      <div style={{ color: "white", backgroundColor: "#2C7370", display: "flex" }}>
        <div>
          <h3>LINKS</h3>
          <div style={{ display: "flex" }} >
            <div style={{ display: "flex", flexDirection: "column" }} >
              <Link className='navLink' style={{padding: "1rem 0rem"}} to="/">Home</Link>
              <Link className='navLink' style={{padding: "1rem 0rem"}} to="/services">Services</Link>
              <Link className='navLink' style={{padding: "1rem 0rem"}} to="/clinician">Our Clinician</Link>
              <Link className='navLink' style={{padding: "1rem 0rem"}} to="/contact">Contact Us</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }} >
              <Link className='navLink' style={{padding: "1rem 0rem"}} to="/hours">Hours Of Operation</Link>
              <Link className='navLink' style={{padding: "1rem 0rem"}} to="/insurance">Insurance</Link>
              <Link className='navLink' style={{padding: "1rem 0rem"}} to="/appointment">Book An Appointment</Link>
            </div>
          </div>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <p>Phone: (401) 244-5900</p>
          <p>Fax: (401) 262-5501</p>
          <p>126 Prospect St, Suite 103, Pawtucket, RI 02860</p>
          <p>pawtucket.primary.care@gmail.com</p>
        </div>
        <img style={{ width: "3rem", height: "3rem" }} src={logo} alt="Pawtucket Primary Care logo" />
        <div>
          <h1>Pawtucket Primary Care</h1>
          <div style={{ display: "flex" }} >
            <div>
              <p>Monday:</p>
              <p>Tuesday:</p>
              <p>Wednesday:</p>
              <p>Thursday:</p>
              <p>Friday:</p>
            </div>
            <div>
              <p>8:00 am - 4:30 pm</p>
              <p>8:00 am - 4:30 pm</p>
              <p>8:00 am - 4:30 pm</p>
              <p>8:00 am - 4:30 pm</p>
              <p>8:00 am - 4:30 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

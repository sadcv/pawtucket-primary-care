import './Layout.css';
import { Outlet, Link } from "react-router-dom";
import logo from "../media/logo_with_circle.png"

function Layout() {
  return (
    <div className="Layout">
      {/* Header */}
      <nav style={{ height: "5rem", color: "white", backgroundColor: "#2C7370", display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", position: "absolute", left: "8%" }} >
          <img style={{ width: "50px", height: "50px" }} src={logo} alt="Pawtucket Primary Care logo" />
          <h1 style={{marginLeft: "1rem"}} >Pawtucket Primary Care</h1>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "55%", position: "absolute", right: "6%" }}>
          <Link className='navLink' to="/">Home</Link>
          <Link className='navLink' to="/services">Services</Link>
          <Link className='navLink' to="/clinician">Our Clinician</Link>
          <Link className='navLink' to="/contact">Contact Us</Link>
          <Link className='navLink' to="/hours">Hours Of Operation</Link>
          <Link className='navLink' to="/insurance">Insurance</Link>
          <Link className='navLink' style={{color: "#2C7370", backgroundColor: "white", padding: ".5rem 1rem", borderRadius: "10px", fontWeight: "400"}} to="/appointment">Book Appointment</Link>
        </div>
      </nav>

      <Outlet />

      {/* Footer */}
      <div style={{ color: "white", backgroundColor: "#2C7370", display: "flex", justifyContent: "space-between", padding:"2rem 8%" }}>
        <div>
          <h2 className='bottomPad'>LINKS</h2>
          <div style={{ display: "flex" }} >
            <div style={{ display: "flex", flexDirection: "column" }} >
              <Link className='navLink bottomPad' to="/">Home</Link>
              <Link className='navLink bottomPad' to="/services">Services</Link>
              <Link className='navLink bottomPad' to="/clinician">Our Clinician</Link>
              <Link className='navLink bottomPad' to="/contact">Contact Us</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }} >
              <Link className='navLink bottomPad' to="/hours">Hours Of Operation</Link>
              <Link className='navLink bottomPad' to="/insurance">Insurance</Link>
              <Link className='navLink bottomPad' to="/appointment">Book Appointment</Link>
              {/* <Link className='navLink bottomPad' to="/terms">TERMS OF SERVICE</Link> */}
            </div>
          </div>
        </div>
        <div>
          <h2 className='bottomPad'>CONTACT US</h2>
          <p className='bottomPad'>Phone: (401) 244-5900</p>
          <p className='bottomPad'>Fax: (401) 262-5501</p>
          <p className='bottomPad'>126 Prospect St, Suite 201, Pawtucket, RI 02860</p>
          <p className='bottomPad'>pawtucket.primary.care@gmail.com</p>
        </div>
        <img style={{ width: "100px", height: "100px" }} src={logo} alt="Pawtucket Primary Care logo" />
        <div>
          <h1 className='bottomPad'>Pawtucket Primary Care</h1>
          <div style={{ display: "flex" }} >
            <div>
              <p className='bottomPadSmall'>Monday:</p>
              <p className='bottomPadSmall'>Tuesday:</p>
              <p className='bottomPadSmall'>Wednesday:</p>
              <p className='bottomPadSmall'>Thursday:</p>
              <p className='bottomPadSmall'>Friday:</p>
            </div>
            <div style={{marginLeft: "1rem"}} >
              <p className='bottomPadSmall'>8:00 am - 4:30 pm</p>
              <p className='bottomPadSmall'>8:00 am - 4:30 pm</p>
              <p className='bottomPadSmall'>8:00 am - 4:30 pm</p>
              <p className='bottomPadSmall'>8:00 am - 4:30 pm</p>
              <p className='bottomPadSmall'>8:00 am - 4:30 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

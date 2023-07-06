import './Layout.css';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import logo from "../media/logo_with_circle.png"
import hamburger from "../media/hamburger_menu.png"

function Layout() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="Layout">
      {/* Header */}
      <nav className='navbar' style={{ color: "white", backgroundColor: "#2C7370", display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", position: "absolute", left: "8%" }} >
          <Link className='navLink' to="/"><img style={{ width: "50px", height: "50px" }} src={logo} alt="Pawtucket Primary Care logo" /></Link>
          <Link className='navLink' to="/"><h1 style={{ marginLeft: "1rem" }} >Pawtucket Primary Care</h1></Link>
        </div>
        <div className="link-holder">
          <img className='hamburger_button' src={hamburger} onClick={toggleHamburger} />
          <div className='links-big'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/services">Services</Link>
            <Link className='navLink' to="/clinician">Our Clinician</Link>
            <Link className='navLink' to="/contact">Contact Us</Link>
            <Link className='navLink' to="/hours">Hours Of Operation</Link>
            <Link className='navLink' to="/insurance">Insurance</Link>
            <Link className='navLink' style={{ color: "#2C7370", backgroundColor: "white", padding: ".5rem 1rem", borderRadius: "10px", fontWeight: "400" }} to="/appointment">Book Appointment</Link>
          </div>
        </div>
      </nav>

      <style jsx>{`

        .navbar {
          height: 5rem;
        }

        .hamburger_button {
          display: none;
          width: 2rem;
          height: 2rem;
        }

        .links-big {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .link-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 55%;
          position: absolute;
          right: 6%;
        }

        @media (max-width: 1250px) {
          .links-big {
            display: ${hamburgerOpen ? 'flex' : 'none'};
            flex-direction: column;
            // flex-wrap: wrap;
            // height: 5rem;
            width: 14rem;
          }

          .hamburger_button {
            display: flex;
            // width: ${hamburgerOpen ? '10rem' : '2rem'};
          }

          .link-holder {
            width: 10rem;
            position: absolute;
            right: 6%;
          }

          .navbar {
            height: ${hamburgerOpen ? '15rem' : '5rem'};
          }
        }

      `}</style>

      <Outlet />

      {/* Footer */}
      <div style={{ color: "white", backgroundColor: "#2C7370", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", padding: "2rem 8%" }}>
        <div className='footer_section'>
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
        <div className='footer_section'>
          <h2 className='bottomPad'>CONTACT US</h2>
          <p className='bottomPad'>Phone: (401) 244-5900</p>
          <p className='bottomPad'>Fax: (401) 262-5501</p>
          <p className='bottomPad'>126 Prospect St, Suite 201, Pawtucket, RI 02860</p>
          <p className='bottomPad'>pawtucket.primary.care@gmail.com</p>
        </div>
        <div className='footer_section' >
          <h2 className='bottomPad'>HOURS</h2>
          <div className='hours_list' >
            <p className='bottomPadSmall'>Monday:</p>
            <p className='bottomPadSmall spaceLeft'>8:00 am - 4:30 pm</p>
          </div>
          <div className='hours_list'>
            <p className='bottomPadSmall'>Tuesday:</p>
            <p className='bottomPadSmall spaceLeft'>8:00 am - 4:30 pm</p>
          </div>
          <div className='hours_list'>
            <p className='bottomPadSmall'>Wednesday:</p>
            <p className='bottomPadSmall spaceLeft'>8:00 am - 4:30 pm</p>
          </div>
          <div className='hours_list'>
            <p className='bottomPadSmall'>Thursday:</p>
            <p className='bottomPadSmall spaceLeft'>8:00 am - 4:30 pm</p>
          </div>
          <div className='hours_list'>
            <p className='bottomPadSmall'>Friday:</p>
            <p className='bottomPadSmall spaceLeft spaceLeft'>8:00 am - 4:30 pm</p>
          </div>
        </div>
        <div className='footer_section' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img style={{ width: "100px", height: "100px" }} src={logo} alt="Pawtucket Primary Care logo" />
          <h1 className='bottomPad'>Pawtucket Primary Care</h1>
        </div>
      </div>
    </div>
  );
}

export default Layout;

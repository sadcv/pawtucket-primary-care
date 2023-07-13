import './Layout.css';
import { Outlet } from "react-router-dom";
import { Suspense, useState } from 'react';
import logo from "../media/logo_with_circle.png"
import hamburger from "../media/hamburger_menu.png"

function Layout() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  const closeHamburger = () => {
    setHamburgerOpen(false)
  }

  return (
    <div className="Layout">
      {/* Header */}
      <nav className='navbar'>
        <div style={{ display: "flex", alignItems: "center", marginLeft: "4%" }} >
          <a className='navLink' href="/#/"><img style={{ width: "50px", height: "50px" }} src={logo} alt="Pawtucket Primary Care logo" /></a>
          <a className='navLink title' href="/#/"><h1 style={{ marginLeft: "1rem" }} >Pawtucket Primary Care</h1></a>
        </div>
        <div className="link-holder">
          <img className='hamburger_button' alt="link menu" src={hamburger} onClick={toggleHamburger} />
          <div className='links-big'>
            <a className='navLink topLink' onClick={closeHamburger} href="/#/">Home</a>
            <a className='navLink topLink' onClick={closeHamburger} href="/#/services">Services</a>
            <a className='navLink topLink' onClick={closeHamburger} href="/#/clinician">Our Clinician</a>
            <a className='navLink topLink' onClick={closeHamburger} href="/#/contact">Contact Us</a>
            <a className='navLink topLink' onClick={closeHamburger} href="/#/hours">Hours Of Operation</a>
            <a className='navLink topLink' onClick={closeHamburger} href="/#/insurance">Insurance</a>
            <a className='navLink topLink' onClick={closeHamburger} style={{ color: "#2C7370", backgroundColor: "white", padding: ".5rem 1rem", borderRadius: "10px", fontWeight: "400" }} href="/#/appointment">Book Appointment</a>
          </div>
        </div>
      </nav>

      <style jsx>{`

        .navbar {
          height: 5rem;
          align-items: center;
          color: white;
          background-color: #2C7370;
          display: flex;
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
          width: 60%;
          position: absolute;
          right: 4%;
        }

        @media (max-width: 1250px) {
          .links-big {
            display: ${hamburgerOpen ? 'flex' : 'none'};
            flex-direction: column;
            margin-top: 10px;
            width: auto;
            text-align: center;
          }

          .hamburger_button {
            display: flex;
          }

          .link-holder {
            width: 10rem;
            position: absolute;
            right: 6%;
          }

          .navbar {
            height: ${hamburgerOpen ? '20rem' : '3rem'};
            align-items: flex-start;
            padding: 2rem 0rem;
          }

          .title {
            width: 50%;
          }

          .topLink {
            margin-top: 10px;
          }
        }

      `}</style>

      <Suspense fallback={<h1>Loading the Pawtucket Primary Care website...</h1>}>
        <Outlet />
      </Suspense>

      {/* Footer */}
      <div style={{ color: "white", backgroundColor: "#2C7370", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", padding: "2rem 8%" }}>
        <div className='footer_section'>
          <h2 className='bottomPad'>LINKS</h2>
          <div style={{ display: "flex" }} >
            <div style={{ display: "flex", flexDirection: "column" }} >
              <a className='navLink bottomPad' href="/#/">Home</a>
              <a className='navLink bottomPad' href="/#/services">Services</a>
              <a className='navLink bottomPad' href="/#/clinician">Our Clinician</a>
              <a className='navLink bottomPad' href="/#/contact">Contact Us</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "2rem" }} >
              <a className='navLink bottomPad' href="/#/hours">Hours Of Operation</a>
              <a className='navLink bottomPad' href="/#/insurance">Insurance</a>
              <a className='navLink bottomPad' href="/#/appointment">Book Appointment</a>
              {/* <a className='navLink bottomPad' href="/#/terms">TERMS OF SERVICE</a> */}
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

import './Layout.css';
import { Outlet } from "react-router-dom";
import { Suspense, useState } from 'react';
import logo from "../media/logo_with_circle.png"
import new_logo from "../media/Social_Logos/New_PPC_Logo.png"
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
          {/* <a className='navLink title' href="/#/"><h1 style={{ marginLeft: "1rem" }} >Pawtucket Primary Care</h1></a> */}
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "10px"}}>
            <p style={{fontSize: "20px", fontWeight: 600, letterSpacing: "0.1em", lineHeight: "1em"}}>PAWTUCKET</p>
            <p style={{fontSize: "12px", letterSpacing: "0.36em"}}>PRIMARY CARE</p>
          </div>
        </div>
        <div className="link-holder">
          <div className='hamburger_button' style={{width: "8rem"}} onClick={toggleHamburger} >
            <img alt="link menu" style={{width: "2rem", height: "2rem"}} src={hamburger}/>
            <p style={{marginLeft: "10px", marginTop: "5px"}}>Menu</p>
          </div>
          
          <div className='links-big'>
            <a className='navLink topLink' onClick={closeHamburger} style={{fontSize: "14px"}} href="/#/">HOME</a>
            <a className='navLink topLink' onClick={closeHamburger} style={{fontSize: "14px"}} href="/#/services">SERVICES</a>
            <a className='navLink topLink' onClick={closeHamburger} style={{fontSize: "14px"}} href="/#/clinician">OUR CLINICIAN</a>
            <a className='navLink topLink' onClick={closeHamburger} style={{fontSize: "14px"}} href="/#/contact">CONTACT US</a>
            <a className='navLink topLink' onClick={closeHamburger} style={{fontSize: "14px"}} href="/#/hours">HOURS OF OPERATION</a>
            <a className='navLink topLink' onClick={closeHamburger} style={{fontSize: "14px"}} href="/#/insurance">INSURANCE</a>
            <a className='navLink topLink' onClick={closeHamburger} style={{fontSize: "14px"}} href="/#/esthetics">ESTHETICS</a>
            {/* <a className='navLink topLink' onClick={closeHamburger} style={{ color: "#2C7370", backgroundColor: "white", padding: ".5rem 1rem", borderRadius: "10px", fontWeight: "400" }} href="https://healow.com/apps/provider/anne-valez-3124588" target='_blank' rel="noreferrer">Book Appointment</a> */}
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
          justify-content: end;
          width: 100%;
          gap: 4rem;
          text-align: center;

        }

        .link-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 70%;
          position: absolute;
          right: 4%;
        }

        @media (max-width: 1300px) {
          .title {
            width: 50%;
          }

        }


        @media (max-width: 1200px) {
          .links-big {
            display: ${hamburgerOpen ? 'flex' : 'none'};
            flex-direction: column;
            margin-top: 10px;
            width: auto;
            gap: 12px;
          }

          .hamburger_button {
            display: flex;
            justify-content: flex-end;
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

          

          .topLink {
            margin-top: 10px;
          }
        }

      `}</style>

      <Suspense fallback={<h1>Loading the Pawtucket Primary Care website...</h1>}>
        <Outlet />
      </Suspense>

      {/* Footer */}
      <div style={{ color: "white", backgroundColor: "#2C7370", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", minHeight: "24vh", padding: "2rem", rowGap: "2rem", columnGap: "2rem"}}>
        <div style={{display: "flex", flexDirection: "column", width: "auto", gap: 4}}>
          <h2><b>LINKS</b></h2>
          <hr/>
          <div style={{display: "flex", gap: 16}}>
          <div style={{display: "flex", flexDirection: "column", gap: 4}}>
            <a className='navLink' href="/#/">HOME</a>
            <a className='navLink' href="/#/services">SERVICES</a>
            <a className='navLink' href="/#/insurance">INSURANCE</a>
            <a className='navLink' href="/#/clinician">OUR CLINICIAN</a>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: 4}}>
            <a className='navLink' href="/#/hours">HOURS OF OPERATION</a>
            <a className='navLink' href="/#/esthetics">ESTHETIC SERVICES</a>
            <a className='navLink' href="/#/contact">CONTACT US</a>
          </div>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "16rem", gap: 4}}>
          <h2><b>CONTACT</b></h2>
          <hr/>
          <p><b>126 PROSPECT ST, SUITE 201 <br/>
          PAWTUCKET, RI 02860</b></p>
          <p>pawtucketprimarycare @ gmail.com</p>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p>(401) 205-2149</p>
            <p>(401) 335-5014</p>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: 4}}>
          <h2><b>HOURS</b></h2>
          <hr/>
          <p>
            <b>MON - FRI</b>
            <br/>
            8 AM - 4:30 pm
            <br/>
            <b>SAT & SUN</b>
            <br/>
            Closed
          </p>
        </div>
        <img src={new_logo} alt='Pawtucket Primary Care logo' style={{height: "15vh"}}/>
      </div>
    </div>
  );
}

export default Layout;

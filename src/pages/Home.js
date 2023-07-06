import './Home.css';
import { Link } from "react-router-dom";
import main_pic from "../media/home_main_pic.jpg";
import second_pic from "../media/home_second_pic.jpg";

import solid_circle_top_left from "../media/solid_circle_top_left.png";
import circle_top_left from "../media/circle_top_left.png";
import circle_bottom_left from "../media/circle_bottom_left.png";
import circle_bottom_right from "../media/circle_bottom_right.png";

function Home() {
  return (
    <div className="Home">
      {/* Main Content */}
      <div className="layer1" style={{ position: "relative" }} >
        {/* Top Bar */}
        <div style={{ display: "flex", justifyContent: "space-around", padding: "4rem 8%" }} >
          <div style={{ width: "30rem", height: "17rem", display: "flex", flexDirection: "column", justifyContent: "space-around" }} >
            <h3>Pawtucket Primary Care</h3>
            <h4>At Pawtucket Primary Care, we give individualized, person centered care.</h4>
            <p>With personalized health care, patients can experience improved quality of life through preventative care,
              better management of chronic illnesses, and faster recovery from acute conditions. We work closely with each
              individual to plan their care and support and to meet their unique needs.</p>
          </div>
          <div style={{ position: "relative", width: "34rem", height: "17rem" }} >
            <img src={main_pic} alt="" className="layer2" style={{ width: "36rem", height: "18rem", position: "absolute" }} />
            <div style={{ backgroundColor: "#D7FCFB", width: "32rem", height: "18rem", position: "absolute", top: "2rem", left: "6rem" }} />
          </div>
        </div>
        {/* Bottom Bar */}
        <div style={{ display: "flex", justifyContent: "space-around", padding: "4rem" }} >
          <div style={{ position: "relative", width: "32rem", height: "22rem" }}>
            <img className="layer2" src={second_pic} alt="" style={{ width: "30rem", height: "20rem", position: "absolute", top: "2rem" }} />
            <div style={{ backgroundColor: "#D7FCFB", width: "30rem", height: "20rem", position: "absolute", left: "2rem" }} />
          </div>
          <div style={{ width: "34rem", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <p>Our primary care provider, Anne Valez FNP, has been treating patients in Rhode Island for over 8 years.
              She offers high quality, patient-focused care in a comfortable and friendly environment. Valez's patients
              can trust that she truly understands their needs and experiences. At Pawtucket Primary Care, your treatment
              is in good hands.</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="callButton" ><Link className="callButtonLink" to="/services">See our list of services</Link></div>
              <div className="callButton" ><Link className="callButtonLink" to="/contact">Contact Us</Link></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="callButton" ><Link className="callButtonLink" to="/clinician">Meet Our Provider</Link></div>
              <div className="callButton" ><Link className="callButtonLink" to="/appointment">Book an Appointment</Link></div>
            </div>
          </div>
        </div>
      </div>
      {/* Decoration */}
      <img className="layer0" src={solid_circle_top_left} alt="" style={{ position: "absolute", top: "6rem" }} />
      <img className="layer0" src={circle_top_left} alt="" style={{ position: "absolute", top: "5rem" }} />
      <img className="layer0" src={circle_bottom_left} alt="" style={{ position: "absolute", top: "51rem" }} />
      <img className="layer0" src={circle_bottom_right} alt="" style={{ position: "absolute", top: "42rem", right: 0 }} />
    </div>
  );
}

export default Home;

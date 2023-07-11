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
        <div className='top_bar' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }} >
          <div className='top_text layer1' style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }} >
            <h3>Pawtucket Primary Care</h3>
            <h4>At Pawtucket Primary Care, we give individualized, person centered care.</h4>
            <p>With personalized health care, patients can experience improved quality of life through preventative care,
              better management of chronic illnesses, and faster recovery from acute conditions. We work closely with each
              individual to plan their care and support and to meet their unique needs.</p>
          </div>
          <div className="main_img" style={{ position: "relative" }} >
            <img src={main_pic} alt="" className="layer2" style={{ width: "100%", height: "15rem", position: "absolute", objectFit: "cover" }} />
            <div className='layer0' style={{ backgroundColor: "#D7FCFB", width: "90%", height: "15rem", position: "absolute", top: "2rem", left: "4rem" }} />
          </div>
        </div>
        {/* Bottom Bar */}
        <div className='bottom_bar' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }} >
          <div className='second_img' style={{ position: "relative", height: "22rem" }}>
            <img className="layer2" src={second_pic} alt="" style={{ width: "100%", height: "20rem", position: "absolute", top: "1rem", objectFit: "cover" }} />
            <div style={{ backgroundColor: "#D7FCFB", width: "100%", height: "20rem", position: "absolute", left: "2rem" }} />
          </div>
          <div className="bottom_holder" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <p>Our primary care provider, Anne Valez FNP, has been treating patients in Rhode Island for over 8 years.
              She offers high quality, patient-focused care in a comfortable and friendly environment. Valez's patients
              can trust that she truly understands their needs and experiences. At Pawtucket Primary Care, your treatment
              is in good hands.</p>
            <div className='buttonHolder' >
              <div className="callButton layer1" ><Link className="callButtonLink" to="/services">See our list of services</Link></div>
              <div className="callButton layer1" ><Link className="callButtonLink" to="/contact">Contact Us</Link></div>
            </div>
            <div className='buttonHolder' >
              <div className="callButton layer1" ><Link className="callButtonLink" to="/clinician">Meet Our Provider</Link></div>
              <div className="callButton layer1" ><Link className="callButtonLink" to="/appointment">Book an Appointment</Link></div>
            </div>
          </div>
        </div>
        {/* Decoration */}
        <img className="layer0" src={solid_circle_top_left} alt="" style={{ position: "absolute", top: "0" }} />
        <img className="layer0" src={circle_top_left} alt="" style={{ position: "absolute", top: "0" }} />
        <img className="layer0 touch_floor" src={circle_bottom_left} alt="" style={{ position: "absolute"}} />
        <img className="layer0 touch_floor" src={circle_bottom_right} alt="" style={{ position: "absolute", right: 0 }} />
      </div>

      <style jsx>{`

        .main_img {
          width: 46%;
          height: 17rem;
        }

        .top_text {
          width: 30rem;
          height: 17rem;
        }

        .buttonHolder {
          display: flex;
          justify-content: space-between;
        }

        .second_img {
          width: 30rem;
        }

        .bottom_holder {
          width: 36rem;
        }

        .bottom_bar {
          padding: 3rem;
        }

        .top_bar {
          padding: 4rem 8%;
        }

        .touch_floor {
          bottom: 0;
        }

        @media (max-width: 1200px) {
          .main_img {
            min-width: 80%;
            height: 16rem;
          }

          .top_bar {
            flex-direction: column-reverse;
            align-items: center;
            padding: 4rem 0rem;
          }

          .bottom_bar {
            margin-top: 0rem;
            margin-bottom: 4rem;
            padding: 0;
            flex-direction: column;
            align-items: center;
          }

          .top_text {
            width: 80%;
            margin-top: 2rem;
            height: auto;
          }

          .callButton {
            margin-top: 2rem;
            width: 10rem;
            height: 5rem;
            text-align: center;
          }

          .buttonHolder {
            justify-content: space-around;
            margin-top: 2rem;
          }

          .second_img {
            width: 80%;
            margin-bottom: 2rem;
          }

          .bottom_holder {
            width: 80%;
            marginTop: 2rem;
          }

          .touch_floor {
            bottom: -4rem;
          }
        }

      `}</style>
    </div>
  );
}

export default Home;
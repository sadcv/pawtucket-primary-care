import './Home.css';
import Helmet from "react-helmet";
import main_pic from "../media/Decorative/home_main_pic.jpg";
import second_pic from "../media/Decorative/home_second_pic.jpg";

import solid_circle_top_left from "../media/Decorative/solid_circle_top_left.png";
import circle_top_left from "../media/Decorative/circle_top_left.png";
import circle_bottom_left from "../media/Decorative/circle_bottom_left.png";
import circle_bottom_right from "../media/Decorative/circle_bottom_right.png";

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pawtucket Primary Care - Get Personalized Healthcare Near You</title>
        <meta name="description" content="Pawtucket Primary Care is a newly founded local healthcare clinic where Anne Valez, NP, our primary care clinician on staff, will provide you with individualized, empathetic care. We open on August 1st, 2023." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/" />
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "MedicalClinic",
            "medicalSpecialty": "PrimaryCare",
            "openingHours": [
              "Mo-Fr 8:00-16:30",
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressLocality": "Pawtucket",
              "addressRegion": "RI",
              "postalCode": "02860",
              "streetAddress": "126 Prospect Street Suite 201"
            },
            "faxNumber": "(401)335-5014",
            "logo": "https://pawtucketprimarycare.com/logo.png",
            "slogan": "At Pawtucket Primary Care, we give individualized, person centered care.",
            "telephone": "(401) 244-5900",
            "isAcceptingNewPatients": "true",
            "email": "pawtucket.primary.care@gmail.com",
            "founder": {
              "@type": "Person",
              "givenName": "Anne",
              "familyName": "Valez",
              "gender": "Female",
              "jobTitle": "Nurse Practitioner",
              "memberOf": {
                "@type": "Organization",
                "name": "Pawtucket Primary Care",
                "url": "pawtucketprimarycare.com"
              }
            },
            "description": "Pawtucket Primary Care is a local, independently owned medical center that provides internal medicine and opioid treatment. Our licensed health professional, Anne Valez, maintains and restores our client's health and wellbeing through the practice of medicine. Our primary care clinician provides individualized, person-centered care to all of our clients.",
            "keywords": "anne, valez, nurse, practitioner, primary, care, clinic, local, pawtucket, vaccine, physical, healthcare, provider",
            "name": "Pawtucket Primary Care",
            "url": "pawtucketprimarycare.com"
          })}
        </script>
      </Helmet>
      {/* Main Content */}
      <div className="layer1" style={{ position: "relative" }} >
        {/* Banner Announcement */}
        <div className='layer1' style={{textAlign: "center", border: "5px double #2C7370", margin: "10px", padding: "10px", position:"relative"}}>
          <h1  className='layer1'>We are now accepting <b style={{color: "#2C7370"}}>SAME-DAY</b> appointments! Schedule an appoinment <a href='https://healow.com/apps/provider/anne-valez-3124588' target='_blank' rel="noreferrer" style={{color: "#2C7370"}}>here</a> today.</h1>
          < p  className='layer1' style={{color: "red"}}>Please note that Pawtucket Primary Care is <b>not</b> an urgent care.  If you are experiencing an emergency or life threatening illness, call 911 or go to your local ER.</p>
        </div>
        {/* Top Bar */}
        <div className='top_bar' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }} >
          <div className='top_text layer1' style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }} >
            <h1 className='home_title'>Pawtucket Primary Care</h1>
            <h2 className='home_tagline'>At Pawtucket Primary Care, we give individualized, person centered care.</h2>
            <p>Pawtucket Primary Care is a newly founded healthcare clinic based in Pawtucket, Rhode Island. With personalized health care, patients can experience improved quality of life through preventative care,
              better management of chronic illnesses, and faster recovery from acute conditions. We work closely with each
              individual to plan their care to meet their unique needs.</p>
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
              <div className="callButton layer1" ><a className="callButtonLink" href="/#/services">See our list of services</a></div>
              <div className="callButton layer1" ><a className="callButtonLink" href="/#/contact">Contact Us</a></div>
            </div>
            <div className='buttonHolder' >
              <div className="callButton layer1" ><a className="callButtonLink" href="/#/clinician">Meet Our Provider</a></div>
              <div className="callButton layer1" ><a className="callButtonLink" href="/#/appointment">Book an Appointment</a></div>
            </div>
          </div>
        </div>
        {/* Decoration */}
        <img className="layer0" src={solid_circle_top_left} alt="" style={{ position: "absolute", top: "0" }} />
        <img className="layer0" src={circle_top_left} alt="" style={{ position: "absolute", top: "0" }} />
        <img className="layer0 touch_floor" src={circle_bottom_left} alt="" style={{ position: "absolute" }} />
        <img className="layer0 touch_floor" src={circle_bottom_right} alt="" style={{ position: "absolute", right: 0 }} />
      </div>
    </div>
  );
}

export default Home;

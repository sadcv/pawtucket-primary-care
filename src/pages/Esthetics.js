import Helmet from "react-helmet";
import esthetics_logo from "../media/Social_Logos/full_esthetics_logo.png";
import office from "../media/esthetics/esthetics_office.png"
import lips from "../media/esthetics/lips_syringe.png"
import braids_woman from "../media/esthetics/braids_woman.png"
import ponytail_woman from "../media/esthetics/ponytail_woman.png"
import redhead_woman from "../media/esthetics/redhead_woman.png"
import woman_touching_face from "../media/esthetics/touch_face_woman.png"

function Esthetics() {
  return (
    <div className="Insurance" style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", color: "white" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Esthetic Services - Botox, Xeomin, Dermal Filler - Pawtucket Primary Care</title>
        <meta name="description" content="Pawtucket Primary Care is a Rhode Island clinic offering Botox, Xeomin, and Dermal Filler treatments for patients looking for a safe, comfortable
                environment for their cosmetic procedures." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/esthetics" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "MedicalClinic",
            "name": "Pawtucket Primary Care",
            "description": "Pawtucket Primary Care is an AAFE Certified, Rhode Island based Botox, Xeomin and dermal filler clinic offering safe and effective cosmetic treatments.",
            "sameAs": [
              "https://www.linkedin.com/company/pawtucket-primary-care/",
              "https://www.instagram.com/pawtucketprimarycare/#"
            ],
            "serviceArea": {
              "@type": "Place",
              "name": "Pawtucket",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pawtucket",
                "addressRegion": "Rhode Island",
                "addressCountry": "US"
              }
            },
            "medicalSpecialty": "Cosmetic Dermatology",
            "offers": [{
              "@type": "Offer",
              "name": "Botox Treatment",
              "priceCurrency": "USD",
              "eligibleRegion": "US",
            },
            {
              "@type": "Offer",
              "name": "Xeomin Treatment",
              "priceCurrency": "USD",
              "eligibleRegion": "US",
            }, {
              "@type": "Offer",
              "name": "Dermal Filler",
              "priceCurrency": "USD",
              "eligibleRegion": "US",
            }],
            "paymentAccepted": "Credit Card, Cash",
          })}
        </script>
      </Helmet>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Opening Banner */}
        <div className="esthetics_banner">
          {/* Top Layer Div */}
          <div className="esthetics_top_banner">
            <img className="esthetics_logo" src={esthetics_logo} alt="Pawtucket Primary Care Esthetics Logo" />
            <div style={{ display: "flex", height: "20%", width: "100%", gap: "4rem", justifyContent: "center", fontSize: "24px" }}>
              <button className="esthetics_button">
              <a href="https://pawtucketprimarycare.myaestheticrecord.com/online-booking/h/Ml8yNTY1MV9jbGluaWNz" style={{color: "white", textDecoration: "none"}}>
              BOOK APPOINTMENT</a></button>
              <button className="esthetics_button" style={{ border: "solid #2C7370 4px", backgroundColor: "white"}}>
              <a href="https://pawtucketprimarycare.myaestheticrecord.com/login"  style={{color: "#2C7370", textDecoration: "none"}}>
                EXISTING PATIENT PORTAL</a></button>
            </div>
          </div>
          {/* Bottom Layer Div */}
          <div style={{ height: "100%", display: "flex" }}>
            <div style={{ display: "flex", width: "100%", alignItems: "flex-end", justifyContent: "space-between" }}>
              <img src={woman_touching_face} alt="" style={{ maxWidth: "19vw", maxHeight: "100%" }} />
              <img src={redhead_woman} alt="" style={{ maxWidth: "19vw", maxHeight: "100%" }} />
              <div className="space_holder" style={{ width: "21vw" }} />
              <img src={ponytail_woman} alt="" style={{ maxWidth: "19vw", maxHeight: "100%" }} />
              <img src={braids_woman} alt="" style={{ maxWidth: "22vw", maxHeight: "100%" }} />
            </div>
          </div>
        </div>
        {/* Information Section */}
        <div className="esthetics_info_section" style={{ backgroundColor: "#2C7370", padding: "5vw", display: "flex", gap: "5vw" }}>
          <img className="esthetics_info_decor" src={office} alt="The esthetics office" />
          <div style={{ border: "3px solid white", outline: "6px solid white", outlineOffset: "5px", padding: "10px", textAlign: "center", display: "flex", alignItems: "center"}}>
            <p style={{ padding: "1vw", fontSize: "2vw", fontFamily: "serif", letterSpacing: 2, lineHeight: "150%" }}>Pawtucket Primary Care is an AAFE certified clinic now administering Botox and Dermal Filler. We are accepting new patients.</p>
          </div>
          <img className="esthetics_info_decor" src={lips} alt="" />
        </div>
        {/* Decorative banner */}
        <div style={{ backgroundColor: "#183231", height: "3vh" }} />
      </div>

      <style >{`

        .esthetics_logo {
          max-height: 58%;
        }

        .esthetics_banner {
          height: 53vh;
          position: relative;
        }
        
        .esthetics_top_banner {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          height: 100%;
          width: 100%;
          gap: 4px;
          padding-top: 1rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .esthetics_button {
          height: 70%;
          width: 18%;
          padding: 0px 0.8vw;
          border: none;
          background-color: #2C7370;
          color: white;
          font-weight: bold;
          font-size: 0.9vw;
          letter-spacing: 2px;
          text-align: center;
        }

        .esthetics_info_section {
          height: 45vh;
          flex-direction: row;
        }
        
        .esthetics_info_decor {
          width: 25%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1024px) {

          .space_holder {
            display: none;
          }

          .esthetics_logo {
            max-height: 45%;
          }

          .esthetics_banner {
            height: 78vh;
          }

          .esthetics_top_banner {
            gap: 10%;
            padding-top: 10%;
            justify-content: flex-start
          }

          .esthetics_button {
            height: 40%;
            width: 35%;
            font-size: 1.8vh;
          }
          
          .esthetics_info_section {
            flex-direction: column;
            justify-content: space-around;
            height: 50vh;
          }

          .esthetics_info_decor {
            height: 30%;
            width: 100%
          }

        }

        @media (max-width: 430px) {
          .esthetics_button {
              height: 50%;
              width: 35%;
              font-size: 1.2vh;
            }

          .esthetics_banner {
              height: 50vh;
            }

        }


      `}</style>
    </div>
  );
}

export default Esthetics;

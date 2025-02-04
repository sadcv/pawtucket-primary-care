import Helmet from "react-helmet";
import esthetics_logo from "../media/Social_Logos/esthetics_logo.png"
import esthetics_decoration from '../media/Decorative/esthetics_decoration.png'
import decor1 from '../media/Decorative/woman_touching_face.png'
import decor2 from '../media/Decorative/woman_braids.png'
import decor3 from '../media/Decorative/woman_red.png'
import decor4 from '../media/Decorative/lips_botox.png'
import decor5 from '../media/Decorative/eyes_botox.png'
import decor6 from '../media/Decorative/botox_extra.png'
import background from '../media/Decorative/redhead_transparent.png'

function Esthetics() {
  return (
    <div className="Insurance" style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#1C3635", color: "white" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Supported Insurance - Pawtucket Primary Care</title>
        <meta name="description" content="We take most forms of insurance at Pawtucket Primary Care. Check for yours on our website." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/insurance" />
      </Helmet>
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

      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%"
      }}>
        <div style={{ display: "flex", padding: "3rem" }}>
          <div style={{ width: "60%", height: "80vh"}}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(10%, 30%))",
                gridAutoRows: "43%",
                gap: "10px",
                overflowY: "auto",
              }}
            >
              <img src={decor2} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <img src={decor3} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <img src={decor1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <img src={decor4} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <img src={decor5} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <img src={decor6} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <img src={esthetics_logo} alt="Pawtucket Primary Care Estethics Logo" style={{ width: "100%" }} />
            <br />
            <br />
            <p>Pawtucket Primary Care is a Rhode Island clinic offering esthetic treatments for patients looking for a safe, comfortable
              environment for their cosmetic procedures.</p>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: "2rem", fontWeight: 600, marginRight: "1rem", letterSpacing: "2px" }}>AAFE CERTIFIED</p>
              <img src={esthetics_decoration} alt="" style={{ height: "100%", flexGrow: 1 }} />
            </div>
            <br />
            <h3 style={{ letterSpacing: "1px", fontSize: "16px", fontWeight: 400, fontFamily: "serif", marginBottom: "0.5rem" }}>WHY PURSUE ESTHETIC TREATMENT?</h3>
            <p style={{ color: "#2C7370", fontWeight: 200, lineHeight: "1.3rem", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "12px" }}><i>Esthetic treatments like Botox offer solutions to unwanted
              changes in the face over time. Esthetic treatments remain a popular option due to the relatively quick and noninvasive nature
              of the procedure when compared to cosmetic surgery.</i></p>
            <br />
            <h3 style={{ letterSpacing: "1px", fontSize: "16px", fontWeight: 400, fontFamily: "serif", marginBottom: "0.5rem" }}>OFFERINGS</h3>
            <p style={{ color: "#2C7370", fontWeight: 200, lineHeight: "1.3rem", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "12px" }}><i>Pawtucket Primary Care currently offers Botox and Xeomin
              injections and dermal filler. Our esthetic appointments last approximately 15 minutes and consist of minor injections to the
              face to administer treatment. Treatments last 3-5 months and can be refreshed with follow-up appointments.
              <br />
              <br />To schedule an appointment, contact our front desk or send us an email.</i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Esthetics;

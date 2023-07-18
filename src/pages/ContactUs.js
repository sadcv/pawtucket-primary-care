import Helmet from "react-helmet";
import maps from "../media/maps.png";
import lot from "../media/sign_w_lot.png";
import door from "../media/door.png";

function ContactUs() {

  return (
    <div className="ContactUs" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - Pawtucket Primary Care</title>
        <meta name="description" content="Get in contact with us at Pawtucket Primary Care through email, phone, fax, or in-person. Our delightful staff is always happy to hear from you." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "MedicalClinic",
            "name": "Pawtucket Primary Care",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressLocality": "Pawtucket",
              "addressRegion": "RI",
              "postalCode": "02860",
              "streetAddress": "126 Prospect Street Suite 201"
            },
            "faxNumber": "(401) 262-5501",
            "logo": "https://pawtucketprimarycare.com/logo.png",
            "telephone": "(401) 244-5900",
            "email": "pawtucket.primary.care@gmail.com",
            "url": "pawtucketprimarycare.com"
          })}
        </script>
      </Helmet>
      <div style={{ position: "relative" }}>
        <img src={maps} alt="" className='page_header_img' />
        <h1 className='page_header' >Contact Us</h1>
      </div>
      <div style={{ margin: "4rem 0rem" }} >
        <div style={{ marginBottom: "2rem" }}>
          <p className='spaceBottom contactTitle' >Email</p>
          <p className='spaceBottom contactText' >pawtucket.primary.care@gmail.com</p>
        </div>
        <div className="contact_holder">
          <div style={{ marginRight: "2rem" }}>
            <p className='spaceBottom contactTitle' >Address</p>
            <p className='spaceBottom contactText' >126 Prospect St, Suite 201</p>
            <p className='spaceBottom contactText' >Pawtucket, RI</p>
            <p className='spaceBottom contactText' >02860</p>
          </div>
          <div>
            <p className='spaceBottom contactTitle' >Contact</p>
            <p className='spaceBottom contactText' >Call: (401) 244-5900</p>
            <p className='spaceBottom contactText' >Fax: (401) 262-5501</p>
          </div>
        </div>
      </div>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        <img src={lot} alt="The outside of our location, showing the parking lot and directory." style={{ width: "35%", minWidth: "20rem", borderRadius: "1rem", marginBottom: "4rem" }} />
        <img src={door} alt="The door at our location." style={{ width: "35%", minWidth: "20rem", borderRadius: "1rem", marginBottom: "4rem" }} />
      </div>
      <iframe title='Embedded Google Maps pointing to: 126 Prospect St Suite 201, Pawtucket RI, 02860' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.2228336860817!2d-71.38095192398522!3d41.87166996581684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e45caa7609322d%3A0xbd1f669f854718b9!2s126%20Prospect%20St%20STE%20201%2C%20Pawtucket%2C%20RI%2002860!5e1!3m2!1sen!2sus!4v1688488547526!5m2!1sen!2sus" width="99%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <style>{`

        .contact_holder {
          display: flex;
        }

        .spaceBottom {
          margin-bottom: 1rem;
          font-size: 20px;
        }

        .contactTitle {
          font-weight: 600;
        }

        .contactText {
          font-weight: 300;
        }

        @media (max-width: 460px) {
          .contact_holder {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactUs;

import Helmet from "react-helmet";
import maps from "../media/Page_Banners/Contact_Us_Banner.png";
import lot from "../media/Pawtucket_Primary_Care-Sign_Outside.png";
import door from "../media/Pawtucket_Primary_Care-Door_Outside.png";

import insta from "../media/Social_Logos/instagram_logo.png";
import yelp from "../media/Social_Logos/yelp_logo.png";
import youtube from "../media/Social_Logos/youtube_logo.png";
import facebook from "../media/Social_Logos/facebook_logo.png";
import nextdoor from "../media/Social_Logos/nextdoor_logo.png";
// import linkedin from "../media/Social_Logos/linkedin_logo.png";

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
      <div style={{ margin: "4rem 0rem", display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-around", width: "90%" }}>
        <div style={{ marginBottom: "1rem", width: "30%", minWidth: "20rem" }} >
          <div >
            <h2 className='spaceBottom contactTitle' >Address</h2>
            <p className='spaceBottom contactText' >126 Prospect St, Suite 201, Pawtucket, RI 02860</p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h2 className='spaceBottom contactTitle' >Contact</h2>
            <div>
              <p className='spaceBottom contactText' >Call: (401) 244-5900</p>
              <p className='spaceBottom contactText' >Fax: (401) 262-5501</p>
            </div>
          </div>
        </div>
        <div style={{ width: "30%", minWidth: "20rem" }}>
          <div>
            <h2 className='spaceBottom contactTitle' >Email</h2>
            <p className='spaceBottom contactText' >pawtucket.primary.care@gmail.com</p>
          </div>
          <div style={{ marginTop: "2rem" }} >
            <h2 className='spaceBottom contactTitle'>Find Us On Social Media</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }} >
              <div style={{ marginRight: "2rem" }}>
                <div className="social_div">
                  <img src={insta} alt="instagram logo" className="social_logo" />
                  <a href="https://www.instagram.com/pawtucketprimarycare/" >Instagram</a>
                </div>
                <div className="social_div">
                  <img src={youtube} alt="youtube logo" className="social_logo" />
                  <a href="https://www.youtube.com/channel/UCmMo867hBSXRYEZt7ziyPzg" >Youtube</a>
                </div>
                <div className="social_div">
                  <img src={facebook} alt="facebook logo" className="social_logo" />
                  <a href="https://www.facebook.com/people/Pawtucket-Primary-Care/100094598419167/" >Facebook</a>
                </div>
              </div>
              <div style={{ marginRight: "2rem" }}>
                <div className="social_div">
                  <img src={nextdoor} alt="nextdoor logo" className="social_logo" />
                  <a href="https://nextdoor.com/pages/pawtucket-primary-care-pawtucket-ri/?init_source=org_pages" >Nextdoor</a>
                </div>
                <div className="social_div">
                  <img src={yelp} alt="yelp logo" className="social_logo" />
                  <a href="https://www.yelp.com/biz/pawtucket-primary-care-pawtucket" >Yelp</a>
                </div>
                {/* <div className="social_div">
                  <img src={linkedin} className="social_logo" />
                  <a href="https://www.instagram.com/pawtucketprimarycare/" >LinkedIn</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100%" }}>
        <img src={lot} alt="The outside of our location, showing the parking lot and directory." style={{ width: "35%", minWidth: "20rem", borderRadius: "1rem", marginBottom: "4rem" }} />
        <img src={door} alt="The door at our location." style={{ width: "35%", minWidth: "20rem", borderRadius: "1rem", marginBottom: "4rem" }} />
      </div>
      <iframe title='Embedded Google Maps pointing to: 126 Prospect St Suite 201, Pawtucket RI, 02860' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.2228336860817!2d-71.38095192398522!3d41.87166996581684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e45caa7609322d%3A0xbd1f669f854718b9!2s126%20Prospect%20St%20STE%20201%2C%20Pawtucket%2C%20RI%2002860!5e1!3m2!1sen!2sus!4v1688488547526!5m2!1sen!2sus" width="99%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <style>{`

        .social_div {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .social_logo {
          width: 2rem;
          height: 2rem;
          margin-right: 10px;
        }

        .contact_holder {
          display: flex;
          flex-direction:column;
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
          margin-right: 2rem;
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

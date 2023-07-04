import './ContactUs.css';
import maps from "../media/maps.png";
import maps_embed from "../media/maps_embed.png";

function ContactUs() {
  return (
    <div className="ContactUs" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <img src={maps} alt="" style={{ position: "relative", width: "100%" }} />
        <h5 style={{ color: "white", textAlign: "center", position: "absolute", top: "25%", width: "100%" }} >Contact Us</h5>
      </div>
      <div style={{ margin: "4rem" }} >
        <div style={{ marginBottom: "2rem" }}>
          <p className='spaceBottom contactTitle' >Email</p>
          <p className='spaceBottom contactText' >pawtucket.primary.care@gmail.com</p>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <p className='spaceBottom contactTitle' >Address</p>
            <p className='spaceBottom contactText' >126 Prospect St, Suite 201</p>
            <p className='spaceBottom contactText' >Pawtucket, RI</p>
            <p className='spaceBottom contactText' >02860</p>
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <p className='spaceBottom contactTitle' >Contact</p>
            <p className='spaceBottom contactText' >Call: (401) 244-5900</p>
            <p className='spaceBottom contactText' >Fax: (401) 262-5501</p>
          </div>
        </div>
      </div>
      <img src={maps_embed} alt="embedded google maps" style={{ width: "100%" }} />
    </div>
  );
}

export default ContactUs;

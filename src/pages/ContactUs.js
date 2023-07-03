import './ContactUs.css';
import maps from "../media/maps.png";
import maps_embed from "../media/maps_embed.png";

function ContactUs() {
  return (
    <div className="ContactUs" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <img src={maps} style={{ position: "relative", width: "100%" }} />
        <h5 style={{ color: "white", textAlign: "center", position: "absolute", top: "25%", width: "100%" }} >Contact Us</h5>
      </div>
      <div style={{ margin: "2rem" }} >
        <div style={{ marginBottom: "1rem" }}>
          <p className='spaceBottom contactTitle' >Email</p>
          <p className='spaceBottom' >pawtucket.primary.care@gmail.com</p>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <p className='spaceBottom contactTitle' >Address</p>
            <p className='spaceBottom' >126 Prospect St, Suite 201</p>
            <p className='spaceBottom' >Pawtucket, RI</p>
            <p className='spaceBottom' >02860</p>
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <p className='spaceBottom contactTitle' >Contact</p>
            <p className='spaceBottom' >Fax: (401) 556-3694</p>
            <p className='spaceBottom' >Call: (401) 556-3694</p>
          </div>
        </div>
      </div>
      <img src={maps_embed} alt="embedded google maps" style={{ width: "100%" }} />
    </div>
  );
}

export default ContactUs;

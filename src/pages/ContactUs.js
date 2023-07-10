import './ContactUs.css';
import maps from "../media/maps.png";

function ContactUs() {
  return (
    <div className="ContactUs" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <img src={maps} alt="" style={{ position: "relative", width: "100%", height: "20rem", objectFit: "cover"  }} />
        <h5 style={{ color: "white", textAlign: "center", position: "absolute", top: "25%", width: "100%" }} >Contact Us</h5>
      </div>
      <div style={{ margin: "2rem" }} >
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
      <iframe title='google maps embed' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.2228336860817!2d-71.38095192398522!3d41.87166996581684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e45caa7609322d%3A0xbd1f669f854718b9!2s126%20Prospect%20St%20STE%20201%2C%20Pawtucket%2C%20RI%2002860!5e1!3m2!1sen!2sus!4v1688488547526!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default ContactUs;

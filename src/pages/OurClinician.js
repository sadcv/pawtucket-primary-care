import './OurClinician.css';
import nurse_picture from "../media/anne_headshot.png"
import solid_circle_right from "../media/clinician_solid_circle_right.png";
import solid_circle_left from "../media/clinician_solid_circle_left.png";

function OurClinician() {
  return (
    <div className="OurClinician">
      <div className='layer1' style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", margin: "6rem 0rem"}}>
        <img src={nurse_picture} alt="A picture of our smiling nurse practioner, Anne Valez" style={{ width: "20rem", border: "10px solid white", borderRadius: "5px" }} />
        <div style={{ width: "30rem" , marginLeft: "4rem"}}>
          <p style={{ fontSize: "20px" }} >Meet the Clinician</p>
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <p style={{ fontSize: "48px" }} >Anne Valez</p>
            <p style={{ fontSize: "48px", color: "#2C7370", marginLeft: "10px" }} >APRN, FNP</p>
          </div>
          <div style={{marginBottom: "1rem"}} >
            <p className='clinician-mid_print'>Dedicated to providing quality care to patients.</p>
            <p className='clinician-mid_print' >Specialty in Primary care, Urgent care and opioid treatment.</p>
          </div>
          <div>
            <p className='clinician-fine_print'>Undergraduate degree from Rhode Island College.</p>
            <p className='clinician-fine_print'>Master's degree from the University of Rhode Island.</p>
            <p className='clinician-fine_print'>Department of Transportation (DOT) certified.</p>
            <p className='clinician-fine_print'>Certified as a family nurse practitioner with the American Nurses Credentialing Center
              (ANCC) and the American Association of Nurse Practitioners (AANP).</p>
          </div>
        </div>
      </div>
      <img className="layer0" src={solid_circle_right} style={{ position: "absolute", top: "7rem", right: "4rem" }} />
      <img className="layer0" src={solid_circle_left} style={{ position: "absolute", bottom: "4.5rem" }} />
    </div>
  );
}

export default OurClinician;

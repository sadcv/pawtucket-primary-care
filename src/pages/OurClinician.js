import './OurClinician.css';
import nurse_picture from "../media/anne_headshot.png"
import solid_circle_right from "../media/clinician_solid_circle_right.png";
import solid_circle_left from "../media/clinician_solid_circle_left.png";

function OurClinician() {
  return (
    <div className="OurClinician">
      <div className='layer1' style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", padding: "6rem 0rem" }}>
        <img className='portrait layer2' src={nurse_picture} alt="Our nurse practioner, Anne Valez" style={{ width: "20rem", border: "10px solid white", borderRadius: "5px" }} />
        <div className='clinician_holder layer2' style={{ width: "32rem"}}>
          <p style={{ fontSize: "24px", fontWeight: "600" }} >Meet the Clinician</p>
          <div className='clinician_title_holder layer1' style={{ display: "flex", marginBottom: "1rem", flexWrap: "wrap" }}>
            <p className='layer2' style={{ fontSize: "48px", fontWeight: "600", marginRight: "10px" }} >Anne Valez</p>
            <p className='layer2' style={{ fontSize: "48px", color: "#2C7370", fontWeight: "600" }} >APRN, FNP</p>
          </div>
          <img className='alt_portrait layer2' src={nurse_picture} alt="Our nurse practioner, Anne Valez" style={{ width: "18rem", border: "10px solid white", borderRadius: "5px" }} />
          <div className='clinician_text_holder'>
            <div style={{ marginBottom: "1rem" }} >
              <p className='clinician-mid_print layer2'>Dedicated to providing quality care to patients.</p>
              <p className='clinician-mid_print layer2' >Specialty in Primary care, Urgent care and opioid treatment.</p>
            </div>
            <div>
              <p className='clinician-fine_print layer2'>Undergraduate degree from Rhode Island College.</p>
              <p className='clinician-fine_print layer2'>Master's degree from the University of Rhode Island.</p>
              <p className='clinician-fine_print layer2'>Department of Transportation (DOT) certified.</p>
              <p className='clinician-fine_print layer2'>Certified as a family nurse practitioner with the American Nurses Credentialing Center
                (ANCC) and the American Association of Nurse Practitioners (AANP).</p>
            </div>
          </div>
        </div>
        <img className="layer0" src={solid_circle_right} alt="" style={{ position: "absolute", top: "4rem", right: "4rem" }} />
      <img className="layer0" src={solid_circle_left} alt="" style={{ position: "absolute", bottom: 0, left: 0 }} />
      </div>
      

      <style jsx>{`

        .alt_portrait {
          display: none;
        }

        .clinician_holder {
          margin-left: 4rem;
        }

        .clinician_text_holder {
          padding: 0rem 4rem 0rem 0rem;
        }

        @media (max-width: 820px) {

          .portrait {
            display: none;
          }

          .alt_portrait {
            display: inline;
          }

          .clinician_holder {
            display: flex;
            flex-direction: column;
            align-items:center;
            text-align: center;
            margin-left: 0; 0;
          }

          .clinician_title_holder {
            justify-content: center;
          }

          .clinician_text_holder {
            padding: 1rem 2rem;
          }

        }
      
      `}</style>
    </div>
  );
}

export default OurClinician;

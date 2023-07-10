import './Services.css';
import tablet from "../media/tablet.png";
import pulse from "../media/hands_and_pulse.jpg";
import greeting from "../media/doctor_greeting.jpg";
import pain from "../media/stomach_pain.jpg";

function Services() {
  return (
    <div className="Services">
      <div>
        <img src={tablet} alt="" style={{ position: "relative", width: "100%", height: "20rem", objectFit: "cover" }} />
        <div style={{textAlign: "center", position: "absolute", top: "25%", width: "100%"}} >
          <h5 style={{color: "white"}} >Our Services</h5>
          <h6 style={{color: "#2C7370", padding: "0rem 1rem 0rem 1rem"}} >At Pawtucket Primary Care our patients are provided with high quality care.</h6>
        </div>
      </div>
      <div className='service_holder' style={{display: "flex", flexWrap: "wrap", padding: "4rem 6rem"}} >
        <div className='service_block'>
          <img src={pulse} alt="" className='service_picture' />
          <h7 style={{paddingBottom: "1rem", width: "6rem"}} >PRIMARY CARE</h7>
          <div className='service_line' />
          <div style={{display: "flex"}} >
          <ul style={{width: "8rem"}} >
            <li>Annuals</li>
            <li>Vaccinations</li>
            <li>Mental Health</li>
            <li>Weight Management</li>
          </ul>
          <ul style={{width: "8rem"}}>
            <li>Opioid Addiction Treatment</li>
            <li>Specialist Referrals</li>
            <li>Medication Management</li>
          </ul>
          </div>
        </div>
        <div className='service_block'>
          <img src={greeting} alt="" className='service_picture' />
          <h7 style={{paddingBottom: "1rem", width: "12rem"}} >CHRONIC CARE MANAGEMENT</h7>
          <div className='service_line' />
          <ul style={{width: "12rem"}}>
            <li>Diabetes</li>
            <li>Hypertension</li>
            <li>COPD (chronic obstructive pulmonary disease)</li>
            <li>Heart Failure</li>
            <li>Endocrine Disorders</li>
          </ul>
        </div>
        <div className='service_block'>
          <img src={pain} alt="" className='service_picture' />
          <h7 style={{paddingBottom: "1rem", width: "12rem"}} >SAME DAY APPOINTMENTS</h7>
          <div className='service_line' />
          <ul style={{width: "12rem"}}>
            <li>Common cold</li>
            <li>Viral upper respiratory infection</li>
            <li>Bladder infection</li>
            <li>Stomach flu</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .service_holder {
          justify-content: space-between;  
        }
        

        @media (max-width: 1180px) {
          .service_holder {
            justify-content: space-around;
          }
        }

      `}</style>

    </div>
  );
}

export default Services;

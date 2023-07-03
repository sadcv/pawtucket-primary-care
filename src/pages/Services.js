import './Services.css';
import tablet from "../media/tablet.png";
import pulse from "../media/hands_and_pulse.jpg";
import greeting from "../media/doctor_greeting.jpg";
import pain from "../media/stomach_pain.jpg";

function Services() {
  return (
    <div className="Services">
      <div>
        <img src={tablet} style={{ position: "relative", width: "100%" }} />
        <div style={{textAlign: "center", position: "absolute", top: "25%", width: "100%"}} >
          <h5 style={{color: "white"}} >Our Services</h5>
          <h6 style={{color: "#2C7370"}} >At Pawtucket Primary Care our patients are provided with high quality care.</h6>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", padding: "4rem 6rem"}} >
        <div className='service_block'>
          <img src={pulse} className='service_picture' />
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
          <img src={greeting} className='service_picture' />
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
          <img src={pain} className='service_picture' />
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
    </div>
  );
}

export default Services;

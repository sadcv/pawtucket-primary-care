import './Insurance.css';
import insurance from "../media/insurance.png";

function Insurance() {
  return (
    <div className="Insurance" style={{ display: "flex", flexDirection: "column"}}>
      <div>
        <img src={insurance} alt="" style={{ position: "relative", width: "100%", height: "21rem", objectFit: "cover"  }} />
        <h5 style={{ color: "white", textAlign: "center", position: "absolute", top: "30%", width: "100%" }} >Insurance</h5>
      </div>
      <p className='insurance_text' style={{width: "50%", marginTop: "4rem", marginLeft: "32%"}}>We take most forms of insurance.</p>
      <div style={{ display: "flex", width: "30%", justifyContent: "space-between", marginBottom: "4rem", marginLeft: "34%" }} >
        <ul>
          <li className='insurance_text' >Medicare</li>
          <li className='insurance_text' >Blue Cross / Blue Shield</li>
          <li className='insurance_text' >United HealthCare</li>
          <li className='insurance_text' >Aetna</li>
        </ul>
        <ul style={{marginLeft: "2rem"}}>
          <li className='insurance_text' >Cigna</li>
          <li className='insurance_text' >Tufts</li>
          <li className='insurance_text' >TriCare</li>
          <li className='insurance_text' >Multiplan</li>
        </ul>
      </div>
    </div>
  );
}

export default Insurance;

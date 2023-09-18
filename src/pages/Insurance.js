import Helmet from "react-helmet";
import insurance from "../media/Page_Banners/Insurance_Banner.png";

function Insurance() {
  return (
    <div className="Insurance" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Supported Insurance - Pawtucket Primary Care</title>
        <meta name="description" content="We take most forms of insurance at Pawtucket Primary Care. Check for yours on our website." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/insurance" />
      </Helmet>
      <div style={{ position: "relative" }}>
        <img src={insurance} alt="" className='page_header_img' style={{height: "21rem"}} />
        <h1 className='page_header'>Insurance</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", padding: "4rem 4rem" }} >
        {/* <p className='insurance_text'>We take most forms of insurance.</p> */}
        {/* <p style={{width: "30rem", marginBottom: "1rem"}}>Don't see your insurance provider? We are likely to add them soon! Please bear with us as we seek to accept everyone we can.</p> */}
        <p className='insurance_text' style={{width: "30rem"}}>Don't see your insurance provider? We are likely to add them soon! Please bear with us as we seek to accept everyone we can.</p>
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <ul>
            {/* <li className='insurance_text' >Medicare</li> */}
            <li className='insurance_text' >Blue Cross Blue Shield</li>
            <li className='insurance_text' >United HealthCare</li>
            <li className='insurance_text' >Aetna</li>
          </ul>
          <ul style={{ marginLeft: "4rem" }}>
            <li className='insurance_text' >Cigna</li>
            {/* <li className='insurance_text' >Tufts</li> */}
            <li className='insurance_text' >TriCare</li>
            <li className='insurance_text' >Neighborhood</li>
            {/* <li className='insurance_text' >Multiplan</li> */}
          </ul>
        </div>
      </div>

      <style>{`
        .insurance_text {
          font-size: 20px;
          margin-bottom: 1rem;
        }`}
      </style>
    </div>
  );
}

export default Insurance;

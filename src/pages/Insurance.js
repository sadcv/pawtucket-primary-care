import Helmet from "react-helmet";
import insurance from "../media/Page_Banners/Insurance_Banner.png";

function Insurance() {
  return (
    <div className="Insurance" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Helmet>
        {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11255017833"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11255017833');

        (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-33DBH7XQ');
        `}
      </script>
      {/* <!-- End Google Tag Manager --> */}
        <meta charSet="utf-8" />
        <title>Supported Insurance - Pawtucket Primary Care</title>
        <meta name="description" content="We take most forms of insurance at Pawtucket Primary Care. Check for yours on our website." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/insurance" />
      </Helmet>

            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-33DBH7XQ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
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

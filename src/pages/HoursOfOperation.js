import Helmet from "react-helmet";
import hours from "../media/Page_Banners/Hours_Banner.png";

function HoursOfOperation() {
  return (
    <div className="HoursOfOperation" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
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
        <title>Hours of Operation - Pawtucket Primary Care</title>
        <meta name="description" content="Consult our hours of operation at Pawtucket Primary Care. We are open from 8 AM to 4:30 PM every weekday providing great healthcare for our visiting patients." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/hours" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "MedicalClinic",
            "openingHours": [
              "Mo-Fr 8:00-16:30",
            ],
            "name": "Pawtucket Primary Care"
          })}
        </script>
      </Helmet>

            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-33DBH7XQ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <div style={{ position: "relative" }}>
        <img src={hours} alt="" className='page_header_img' />
        <h1 className='page_header'>Hours Of Operation</h1>
      </div>
      <div style={{ display: "flex", margin: "4rem" }} >
        <div>
          <p className='bottomPadHours'>Monday:</p>
          <p className='bottomPadHours'>Tuesday:</p>
          <p className='bottomPadHours'>Wednesday:</p>
          <p className='bottomPadHours'>Thursday:</p>
          <p className='bottomPadHours'>Friday:</p>
        </div>
        <div style={{ marginLeft: "1rem" }} >
          <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
          <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
          <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
          <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
          <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
        </div>
      </div>
      <style>{`
        .bottomPadHours {
          margin-bottom: 2rem;
          font-size: 20px;
        }
        
        @media (max-width: 420px) {
          .bottomPadHours {
            width: 8rem;
            height: 4rem;
          }
        }
        `}</style>
    </div>
  );
}

export default HoursOfOperation;

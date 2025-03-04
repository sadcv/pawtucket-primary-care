import Helmet from "react-helmet";
import nurse_picture from "../media/Anne_Valez_Picture.png";
import solid_circle_right from "../media/Decorative/clinician_solid_circle_right.png";
import solid_circle_left from "../media/Decorative/clinician_solid_circle_left.png";

function OurClinician() {
  return (
    <div className="OurClinician">
      <div className='layer1' style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", padding: "6rem 0rem" }}>
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
          <title>Anne Valez - Our Clinician - Pawtucket Primary Care</title>
          <meta name="description" content="Our primary care clinician, Anne Valez NP, is a local, experienced provider well-known for her empathetic, individualized approach to healthcare. Visit this page to find out more about her specialties and certifications." />
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/clinician" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "givenName": "Anne",
              "familyName": "Valez",
              "gender": "Female",
              "jobTitle": "Nurse Practitioner",
              "memberOf": {
                "@type": "Organization",
                "name": "Pawtucket Primary Care",
                "url": "pawtucketprimarycare.com"
              },
              "keywords": "Anne Valez, pawtucket primary care, anne valez pawtucket primary care, anne valez 2023, where does anne valez work, primary care pawtucket ri, primary care doctors pawtucket ri, pawtucket medical center",
              "description": "A provider page where Anne Valez, NP, displays her current information and skills"
            })}
          </script>
        </Helmet>

            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-33DBH7XQ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* <img className='portrait layer2' src={nurse_picture} title="Anne Valez NP" alt="Our nurse practioner, Anne Valez" style={{ width: "20rem", border: "10px solid white", borderRadius: "5px" }} /> */}
        <div className='clinician_holder layer2' style={{ width: "32rem" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600" }} >Meet the Clinician</h2>
          <div className='clinician_title_holder layer1' style={{ display: "flex", marginBottom: "1rem", flexWrap: "wrap" }}>
            <h1 className='layer2' style={{ fontSize: "48px", fontWeight: "600", marginRight: "10px" }} >Anne Valez</h1>
            <h1 className='layer2' style={{ fontSize: "48px", color: "#2C7370", fontWeight: "600" }} >APRN, FNP</h1>
          </div>
          {/* <img className='alt_portrait layer2' src={nurse_picture} title="Anne Valez NP" alt="Our nurse practioner, Anne Valez" style={{ width: "18rem", border: "10px solid white", borderRadius: "5px" }} /> */}
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


      <style >{`

        .clinician-mid_print {
          font-size: 16px;
          margin-bottom: .2rem;
        }
        .clinician-fine_print {
          font-size: 14px;
          margin-bottom: .1rem;
        }

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

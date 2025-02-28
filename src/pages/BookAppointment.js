import Helmet from "react-helmet";
import logo from "../media/logo_with_circle.png"

function BookAppointment() {

  return (
    <div className="BookAppointment" style={{ height: "40rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
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
        <title>Book Appointment - Pawtucket Primary Care</title>
        <link rel="canonical" href="http://pawtucketprimarycare.com/#/appointment" />
        <meta name="description" content="Visit our website to book an appointment online quickly and easily with Pawtucket Primary Care or call (401) 244-5900." />
      </Helmet>

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-33DBH7XQ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <p style={{ fontSize: "24px", marginBottom: "1rem", width: "80%", textAlign: "center" }}>Thank you for your interest in booking an appointment with</p>
      <img style={{ width: "4rem", height: "4rem", border: "5px solid #2C7370", borderRadius: "8rem" }} src={logo} alt="Pawtucket Primary Care logo" />
      <p style={{ fontSize: "24px", fontWeight: "600", color: "#2C7370", marginBottom: "2rem" }}>Pawtucket Primary Care</p>
      <p style={{ fontSize: "18px", marginBottom: "1rem", width: "80%", textAlign: "center" }}>This page is currently under construction.</p>
      <p style={{ fontSize: "18px", marginBottom: "1rem", width: "80%", textAlign: "center" }}>Please call <b>(401) 244-5900</b> or email <b>pawtucket.primary.care@gmail.com</b> to schedule an appointment.</p>
      <p style={{ fontSize: "18px", marginBottom: "1rem", width: "80%", textAlign: "center" }}>Thank you for your cooperation and continued support.</p>
    </div>
  );
}

export default BookAppointment;

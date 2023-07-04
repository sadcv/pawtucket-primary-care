import './BookAppointment.css';
import logo from "../media/logo_with_circle.png"

function BookAppointment() {
  return (
    <div className="BookAppointment"style={{height: "40rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <p style={{fontSize: "24px", marginBottom: "1rem"}}>Thank you for your interest in booking an appointment with</p>
      <img style={{ width: "4rem", height: "4rem", border: "5px solid #2C7370", borderRadius: "8rem" }} src={logo} alt="Pawtucket Primary Care logo" />
      <p style={{fontSize: "24px", fontWeight: "600", color: "#2C7370", marginBottom: "2rem"}}>Pawtucket Primary Care</p>
      <p style={{fontSize: "18px", marginBottom: "1rem", width: "40rem", textAlign: "center"}}>This page is currently under construction.</p>
      <p style={{fontSize: "18px", marginBottom: "1rem", width: "40rem", textAlign: "center"}}>Please call <b>(401) 556-3694</b> or email <b>pawtucket.primary.care@gmail.com</b> to schedule an appointment.</p>
      <p style={{fontSize: "18px", marginBottom: "1rem"}}>Thank you for your cooperation and continued support.</p>
    </div>
  );
}

export default BookAppointment;

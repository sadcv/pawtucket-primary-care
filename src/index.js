import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurClinician from "./pages/OurClinician";
import ContactUs from "./pages/ContactUs";
import HoursOfOperation from "./pages/HoursOfOperation";
import Insurance from "./pages/Insurance";
import BookAppointment from "./pages/BookAppointment";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="clinician" element={<OurClinician />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="hours" element={<HoursOfOperation />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="appointment" element={<BookAppointment />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
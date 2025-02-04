import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
const Services = lazy(() => import("./pages/Services"))
const OurClinician = lazy(() => import("./pages/OurClinician"))
const ContactUs = lazy(() => import("./pages/ContactUs"))
const HoursOfOperation = lazy(() => import("./pages/HoursOfOperation"))
const Insurance = lazy(() => import("./pages/Insurance"))
// const BookAppointment = lazy(() => import("./pages/BookAppointment"))
const Esthetics = lazy(() => import("./pages/Esthetics"))
const NoPage = lazy(() => import("./pages/NoPage"))


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
          {/* <Route path="appointment" element={<BookAppointment />} /> */}
          <Route path="esthetics" element={<Esthetics />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
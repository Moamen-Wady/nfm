import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import "./all.css";
import "animate.css/animate.min.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import Loading from "./Loading";
import RouteChangeHandler from "./RouteChangeHandler";
import Errorp from "./Errorp";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const Home = lazy(() => import("./Home"));
const History = lazy(() => import("./History"));
const Mission = lazy(() => import("./Mission"));
const Clients = lazy(() => import("./Clients"));
const Thordon = lazy(() => import("./Thordon"));
const TDO = lazy(() => import("./TDO"));
const SY = lazy(() => import("./SY"));
const QS = lazy(() => import("./QS"));
const Careers = lazy(() => import("./Careers"));
const Contact = lazy(() => import("./Contact"));

export default function App() {
  const [loading, setLoading] = useState(false);
  const menuh = useCallback(() => {
    const hb = document.getElementById("hide");
    const vb = document.getElementById("view");
    if (hb && vb) {
      hb.style.display = "none";
      vb.style.display = "block";
    }
    ["i1", "i2", "i3", "i4", "i5", "i6"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
  }, []);

  const menuv = useCallback(() => {
    const hb = document.getElementById("hide");
    const vb = document.getElementById("view");
    if (hb && vb) {
      hb.style.display = "block";
      vb.style.display = "none";
    }
    ["i1", "i2", "i3", "i4", "i5", "i6"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.display = "block";
    });
  }, []);

  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(
        "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode with setting: 'use dark mode: always/when phone dark mode is on' or when option: 'dark theme sites' is checked. Please choose 'light theme websites' or consider using a standards-compliant browser instead. \n\n" +
          "We recommend Firefox, Microsoft Edge, or Google Chrome."
      );
    }
  }, []);
  const notify = useCallback((e, msg) => {
    toast[e](msg, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }, []);
  return (
    <Router>
      <ToastContainer />
      <RouteChangeHandler setLoading={setLoading} menuh={menuh} />
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Header menuh={menuh} menuv={menuv} />
          <Routes>
            <Route path="*" element={<Errorp />} />
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/history" element={<History />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/distributors" element={<Thordon />} />
            <Route path="/technicalDesignOffice" element={<TDO />} />
            <Route path="/shipYard" element={<SY />} />
            <Route path="/qualityStatement" element={<QS />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contactUS" element={<Contact notify={notify} />} />
          </Routes>
          <Footer />
        </Suspense>
      )}
    </Router>
  );
}

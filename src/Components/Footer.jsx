import { Link } from "react-router-dom";
import "./Footer.css";
import { memo } from "react";
let d = new Date();
let dd = d.getFullYear();
export default memo(function Footer() {
  return (
    <footer className="site-footer">
      <div className="fcontainer">
        <div className="foot-com-1">
          <img loading="lazy" alt="" src="/footer/logo.webp" className="logo-footer" />
          <p className="foot-slo">Commitment to Quality</p>
        </div>
        <div className="qd">
          <div className="foot-com">
            <ul className="footer-links">
              <li>
                <Link to="/index">&#8226; Home</Link>
              </li>
              <li>
                <Link to="/careers">&#8226; Careers</Link>
              </li>
              <li>
                <Link to="/contactUS">&#8226; Contact Us</Link>
              </li>
              <li>
                <Link to="/qualityStatement">&#8226; Quality Statement</Link>
              </li>
            </ul>
          </div>
          <div className="foot-com">
            <h6>About Us</h6>
            <ul className="footer-links">
              <li>
                <Link to="/index#overviewer">&#8226; Overview</Link>
              </li>
              <li>
                <Link to="/history">&#8226; History</Link>
              </li>
              <li>
                <Link to="/mission">&#8226; Mission</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="qd">
          <div className="foot-com">
            <h6>Our Services</h6>
            <ul className="footer-links">
              <li>
                <Link to="/distributors">&#8226; Thordon Bearings</Link>
              </li>
              <li>
                <Link to="/technicalDesignOffice">
                  &#8226; Technical Design Office
                </Link>
              </li>
              <li>
                <Link to="/shipYard">&#8226; Ship Yard</Link>
              </li>
            </ul>
          </div>
          <div className="foot-com2">
            <h6>NEFERTITI MARINE</h6>
            <p>
              &#8226; Address: 1, El-Fardous St. Smouha, Alexandria, Egypt
              <br />
              &#8226; Tel./Fax: +2 03 4203873
              <br />
              &#8226; YARD K: Rosetta Coast, EGYPT
              <br />
              &#8226; Tel./Fax: +2 045 2928698
              <br />
              &#8226; E-mail : info@nefertitimarine.com
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="lgs">
          <a
            href="https://www.facebook.com/nefertitimarine?_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src="/footer/fb.webp" alt="" />
          </a>
          <a
            href="https://instagram.com/nefertitimarine?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src="/footer/ig.webp" alt="" />
          </a>
          <a
            href="https://eg.linkedin.com/company/nefertitimarine?original_referer=https%3A%2F%2Fwww.google.com"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src="/footer/li.webp" alt="" />
          </a>
        </div>
        <p>Copyright &copy; {dd} NEFERTITI MARINE</p>
      </div>
    </footer>
  );
});

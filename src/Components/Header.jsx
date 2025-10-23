import "./Header.css";
import { Link } from "react-router-dom";
import { useLayoutEffect, memo } from "react";
export default memo(function Header({ menuh, menuv }) {
  useLayoutEffect(() => {
    const d = () => {
      let s = window.scrollY;
      let n = document.getElementById("ulcont");
      let haha = document.getElementById("haha");
      n.style.height = haha.clientHeight + "px";
      if (s > 0) {
        n.style.background = "rgb(48, 71, 87)";
      } else {
        n.style.background = "unset";
      }
    };
    menuh()
    window.onscroll = d;
    return window.removeEventListener("scroll", d);
  }, []);

  return (
    <>
      <div className="ulcont" id="ulcont">
        <ul className="main">
          <li className="n" id="haha">
            <button id="hide" onClick={menuh}>
              <img loading="lazy" src="/home/mbar.webp" alt="" />
            </button>
            <button id="view" onClick={menuv}>
              <img loading="eager" src="/home/mbar.webp" alt="" />
            </button>
          </li>
          <li className="n home" id="i1">
            <Link to="/index">Home</Link>
          </li>
          <li className="n about" id="i2">
            <Link href="#"> About Us &#10095; </Link>
            <ul className="aboutUs">
              <li>
                <Link to="/index#overviewer">Overview</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/mission">Mission</Link>
              </li>
            </ul>
          </li>
          <li className="n our" id="i3">
            <Link to="#"> Our Services &#10095; </Link>
            <ul className="ourServices">
              <li>
                <Link to="/distributors">Thordon Bearings</Link>
              </li>
              <li>
                <Link to="/technicalDesignOffice">Technical Design Office</Link>
              </li>
              <li>
                <Link to="/shipYard">Ship Yard</Link>
              </li>
            </ul>
          </li>
          <li className="n" id="i4">
            <Link to="/qualityStatement">Quality Statement</Link>
          </li>
          <li className="n" id="i5">
            <Link to="/careers"> Careers </Link>
          </li>
          <li className="n" id="i6">
            <Link to="/contactUS"> Contact Us </Link>
          </li>
        </ul>
      </div>
      <header className="an" id="nvbr">
        <div
          style={{
            backgroundImage: "url( 'bg/bg.webp' )",
            position: "absolute",
          }}
          className="xxx"
        ></div>
        <div
          style={{
            backgroundImage: "url( 'bg/bg1.webp' )",
            position: "absolute",
            opacity: 0,
          }}
          className="xxx"
        ></div>
        <div
          style={{
            backgroundImage: "url( 'bg/bg2.webp' )",
            position: "absolute",
            opacity: 0,
          }}
          className="xxx"
        ></div>
        <div
          style={{
            backgroundImage: "url( 'bg/bg3.webp' )",
            position: "absolute",
            opacity: 0,
          }}
          className="xxx"
        ></div>
        <div
          style={{
            backgroundImage: "url( 'bg/bg4.webp' )",
            position: "absolute",
            opacity: 0,
          }}
          className="xxx"
        ></div>
        <div className="hcont">
          <div className="logo-container">
            <img loading="eager" src="/footer/logo.webp" alt="" />
            <p>Commitment to Quality</p>
          </div>
        </div>
      </header>
    </>
  );
});

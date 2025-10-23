import { useEffect, memo } from "react";
import "./Home.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
export default memo(function Home() {
  useEffect(() => {
    let proj = document.getElementById(window.location.hash.slice(1));
    if (proj) {
      setTimeout(() => {
        proj.scrollIntoView();
      }, 10);
    } else {
      window.scrollTo(0, 0);
    }
    let biggest = document.getElementById("pthBiggest");
    let t2 = document.getElementById("ptri2");
    let t3 = document.getElementById("ptri3");
    t2.style.height = biggest.clientHeight + "px";
    t3.style.height = biggest.clientHeight + "px";
  }, []);
  // useLayoutEffect(() => {}, []);

  return (
    <div id="content">
      <div className="intro">
        <p className="intro-head">WELCOME TO NEFERTITI MARINE</p>
        <p className="intro-info">
          NEFERTITI MARINE was established in 1975 at Alexandria, Egypt; We
          started & evolved as various marine service & support provider all
          over the Egyptian coasts; Towing, Offshore Support, Fleet Management,
          Maintenance & Dry Docking.
        </p>
        <p className="intro-info">
          Over the years, we have gathered valuable experiences & knowledge that
          evolved & developed our activities to: - Ship building - Marine
          Technical office - Marine distributors OUR TEAM is highly qualified &
          capable of providing adequate resources to complete tasks and manage
          these resources in an effective efficient manner.
        </p>
        <hr />
      </div>
      <div id="overviewer">
        <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
          <div>
            <img loading="lazy" alt="" src="/home/logo.webp" className="ov-logo" />
            <p className="intro-info">
              We are an Egypt-based Integrated Service Provider. Nefertiti
              Marine is an Integrated Service Provider which builds, Repairs and
              Converts a diverse fleet of small & medium sized marine vessels.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
        <div className="shb">
          <p className="shb-hdr">Ship Building</p>
          <div className="shb-g">
            <img loading="lazy" src="/ov/b1.webp" alt="" />
            <img loading="lazy" src="/ov/b2.webp" alt="" />
            <img loading="lazy" src="/ov/b3.webp" alt="" />
            <img loading="lazy" src="/ov/b4.webp" alt="" />
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
        <div className="shb">
          <p className="shb-hdr">Ship Conversion</p>
          <div className="shb-g">
            <img loading="lazy" src="/ov/c1.webp" alt="" />
            <img loading="lazy" src="/ov/c2.webp" alt="" />
            <img loading="lazy" src="/ov/c3.webp" alt="" />
            <img loading="lazy" src="/ov/c4.webp" alt="" />
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
        <div className="shb">
          <p className="shb-hdr">Ship Repair</p>
          <div className="shb-g">
            <img loading="lazy" src="/ov/r1.webp" alt="" />
            <img loading="lazy" src="/ov/r2.webp" alt="" />
            <img loading="lazy" src="/ov/r3.webp" alt="" />
            <img loading="lazy" src="/ov/r4.webp" alt="" />
          </div>
        </div>
      </AnimationOnScroll>
      <div className="triconz">
        <div>
          <p id="pthBiggest" className="intro-text">
            <b>Authorized Distributor of Thordon Bearings Inc.</b>
          </p>
          <div className="tcimg">
            <img loading="lazy" alt="" src="/home/thordon.webp" />
          </div>
          <a
            href="https://thordonbearings.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>
        </div>

        <div>
          <p id="ptri2" className="intro-text">
            <b>Download Our Profile</b>
          </p>
          <div className="tcimg">
            <img loading="lazy" src="/home/logo.webp" alt="" />
          </div>
          <a
            href="https://drive.google.com/file/d/1gto2W-1TmMvvh5mhHzGTtlYoFPTqXhlz/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Download Here
          </a>
        </div>

        <div>
          <p id="ptri3" className="intro-text">
            <b>Our Clients</b>
          </p>
          <div className="tcimg">
            <img loading="lazy" src="/home/clientz.webp" alt="" />
          </div>
          <Link to="/clients">MORE...</Link>
        </div>
      </div>
    </div>
  );
});

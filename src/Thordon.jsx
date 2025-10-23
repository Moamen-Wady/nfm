import { useEffect, memo } from "react";
import ProjectSection from "./Components/Project";

const projects = [
  { title: "MAHMOUD YOUNESS", folder: "distributors/mdyns", size: "covered" },
  { title: "MASHHOUR DREDGER", folder: "distributors/sd", size: "covered" },
  { title: "AL HAMRA DREDGER", folder: "distributors/gh", size: "covered" },
  { title: "DALEELA", folder: "distributors/dll", size: "covered" },
  { title: "LILY OF SEA", folder: "distributors/ny", size: "covered" },
  { title: "MV AMMAN", folder: "distributors/ry", size: "covered" },
  { title: "MV ARDHIANTO", folder: "distributors/ard", size: "covered" },
  { title: "SUMED 6", folder: "distributors/smd", size: "covered" },
  { title: "GHRABLY 5", folder: "distributors/grb", size: "covered" },
];

export default memo(function Thordon() {
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);

  return (
    <div id="content">
      <div className="proj-head">
        <div>
          <p className="intro-head">
            <b>Authorized Distributor of Thordon Bearings Inc</b>
          </p>
          <br />
          <p
            className="intro-info"
            style={{ textAlign: "center", display: "block", margin: "auto" }}
          >
            <b>Zero Pollution | High Performance | Bearing Systems</b>
          </p>
          <br />
        </div>
        <p className="intro-info">
          Thordon Bearings designs and manufactures a complete range of high
          performance, non-metallic journal bearing solutions for marine, pump,
          hydro-turbine, offshore oil and other industrial markets. From water
          lubricated stern tube and rudder bearings for ships to grease-free
          wicket-gate bearings for clean power generation, we provide innovative
          non-polluting bearing solutions that meet or exceed the technical
          requirements of your application. Since the first Thordon bearing was
          developed in 1966, Thordon has continuously improved its
          high-performance polymer technologies and bearing designs to become
          the world leader in elastomeric bearing technology. Our applications
          engineering and global technical support teams can support your most
          unique bearing technical challenges.
          <br />
          <br />
          <b className="intro-info" style={{ margin: 0 }}>
            Thordon engineered polymer bearing solutions can:
          </b>
        </p>
        <ul className="ry-list" style={{ margin: 0 }}>
          <li>Provide long bearing wear life</li>
          <li>Eliminate oil or grease</li>
          <li> Operate in dirty, abrasive environments</li>
          <li>Withstand high shock loads and edge loading</li>
        </ul>
        <span className="link-span">
          <p>
            <b> Nefertiti Marine are an authorized Distributor of: </b>
            <a
              href="https://thordonbearings.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://thordonbearings.com
            </a>
          </p>
        </span>
      </div>

      <div className="sli-cont">
        {projects.map((proj) => (
          <ProjectSection key={proj.title} {...proj} />
        ))}
      </div>
    </div>
  );
});

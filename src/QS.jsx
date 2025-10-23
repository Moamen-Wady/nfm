import { useEffect, memo } from "react";
import "./QS.css";
export default memo(function QS() {
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);
  return (
    <div id="content">
      <div className="carr">
        <p className="intro-head">Quality Policy Statement</p>
        <p className="intro-info  qs-1">
          NEFERTITI MARINE has the ambition to be a remarkable national leader
          of the marine industry all over the Middle East. So this quality
          policy of our company reflects our commitment to achieve that goal. We
          shall constantly treat our customers, employees, suppliers and the
          community with respect, honesty, dignity and fairness. We are here to
          help, satisfy and impress people with our services. We will conduct
          our business with the highest ethical standards.
          <br />
        </p>
      </div>
      <div className="qsx">
        <div>
          <img loading="lazy" alt="" src="/x.webp" />
          <div className="dc">
            <p className="underimg">
              <b>“</b> We hope that our dedication and commitment enable the
              YARD-K to keep exceptional cooperation with its regular customers
              and attract new both local and foreign clients.
              <b style={{ float: "right" }}>”</b>
              <br />
              <br />
            </p>
            <strong>
              Managing Director
              <p className="intro-info">Eng. Karim Abd El-Karim</p>
            </strong>
          </div>
        </div>
        <ul className="intro-info  qs">
          <li>
            By keeping up with the global developments in the marine industry,
            understanding our client’s requirement and developing it to get his
            satisfaction with best of our abilities by introducing a wide range
            of various choices which meet his requirements, even may surpass its
            expectations; because understanding our customers’ needs is
            essential to the way we do best.
          </li>
          <li>
            Continue the quality process through our establishment at every
            stages and achieving our commitments on delivery and service before
            and after sales. Our organization provides a connecting network
            between its members to control and monitor the production processes
            carefully, evaluate the projects and ensure that all requirements,
            rules and regulations are complied.
          </li>
          <li>
            Our aim is to be a respected partner for its suppliers and
            customers. Being in tightly relationships with stakeholders based on
            respect, honesty cooperation, and mutual benefits.
          </li>
          <li>
            Our management must be just and ethical allowing equal opportunity
            for all.
            <ul className="ry-list">
              <li>
                We will treat every employee as a unique individual, with unique
                merits and abilities.
              </li>
              <li>
                We must strive to treat them with dignity and respect, and
                compensate them fairly while providing a neat, clean and safe
                place to work.
              </li>
              <li>
                We shall effectively select our employees and provide them with
                all the devices and technologies in the production which are
                latest and bringing optimal costs.
              </li>
            </ul>
          </li>
          <li>
            Our planet is important to us. We will carry out our operations with
            every effort to protect the health and safety of our shore based
            staff, crew, clients, contractors, and the community. Safety is the
            responsibility of every individual. We are committed to continuous
            improvement of its procedures that address safety and health of
            personnel and prevention of pollution to the environment.
          </li>
        </ul>
      </div>
    </div>
  );
});

import { useCallback, useEffect, useState, memo } from "react";
import "./Mission.css";
export default memo(function Mission() {
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);
  let [valueContent, setValueContent] = useState(
    "Hover Or Click Over A Circle To Display It!"
  );
  const br = useCallback(() => {
    setValueContent(
      "We care about our customers. We shall provide special treatment and consideration for each and every customer, because understanding our customers’ needs is essential to the way we do best."
    );
  }, [valueContent]);
  const tr = useCallback(() => {
    setValueContent(
      "The environment is important to us and we will support actions that can improve our environment’s future. We will carry out our operations with every effort to protect the health and safety of our shore based staff, crew, clients, contractors, and the community. Safety is the responsibility of every individual. We are committed to continuous improvement of its procedures that address safety and health of personnel and prevention of pollution to the environment."
    );
  }, [valueContent]);
  const mr = useCallback(() => {
    setValueContent(
      "Our management must be just and ethical allowing equal opportunity for all. We will treat every employee as a unique individual, with unique merits and abilities. We must strive to treat them with dignity and respect, and compensate them fairly while providing a neat, clean and safe place to work. We shall effectively select our employees and provide them with all the tools, training and support to achieve excellence in customer satisfaction. We will treat our employees with respect, honesty and fairness."
    );
  }, [valueContent]);
  const bl = useCallback(() => {
    setValueContent(
      "We will continually satisfy our customers with development and improvement of product quality, service, productivity and time compression."
    );
  }, [valueContent]);
  const tl = useCallback(() => {
    setValueContent(
      "Our aim is to be a respected partner for its customers. Our goals include striving for quality, safety, health and environmental control, encourage creative solutions, innovation and committed to customer satisfaction."
    );
  }, [valueContent]);
  const ml = useCallback(() => {
    setValueContent(
      "We will improve and innovate in every element of our business. We will expand our business and market."
    );
  }, []);
  return (
    <div id="content">
      <div className="global-inline">
        <div className="mis-head">
          <p className="intro-head">
            <b>Our Mission</b>
          </p>
          <p className="intro-info">
            We shall constantly treat our customers, employees, suppliers and
            the community with respect, honesty, dignity and fairness. We are
            here to help, satisfy and impress people with our services. We will
            conduct our business with the highest ethical standards.
          </p>
        </div>
      </div>
      <div className="misvalues">
        <div>
          <h1 className="intro-head">We Are Proud With Our Clear Mission </h1>
          <p className="intro-info">{valueContent}</p>
        </div>
        <div>
          <svg
            id="eBfdVKxHtUN1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1315 1169"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
          >
            <image
              width="380"
              height="337.81"
              xlinkHref="slogo.webp"
              preserveAspectRatio="xMidYMid meet"
              transform="translate(467.5 415.025)"
            />
            <g id="tr" onMouseOver={tr} fill="white">
              <ellipse
                rx="155"
                ry="155"
                transform="translate(860 195)"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
            <text
              onMouseOver={tr}
              dx="0"
              dy="0"
              fontFamily='"eBfdVKxHtUN1:::Roboto"'
              fontSize="52"
              fontWeight="400"
              transform="translate(714.887238 214.338295)"
              strokeWidth="0"
            >
              <tspan x="10" y="0" fontWeight="400" strokeWidth="0">
                Environment
              </tspan>
            </text>
            <g id="ml" onMouseOver={ml}>
              <ellipse
                rx="155"
                ry="155"
                transform="translate(233 583.93)"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
            <text
              onMouseOver={ml}
              dx="0"
              dy="0"
              fontFamily='"eBfdVKxHtUN1:::Roboto"'
              fontSize="44"
              fontWeight="400"
              transform="translate(87.98439 577.045246)"
              strokeWidth="0"
            >
              <tspan x="20" y="0" fontWeight="400" strokeWidth="0">
                Improvement
              </tspan>
              <tspan x="10" y="44" fontWeight="400" strokeWidth="0">
                and Innovation
              </tspan>
            </text>
            <g id="br" onMouseOver={br}>
              <ellipse
                rx="155"
                ry="155"
                transform="translate(860 974)"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
            <text
              onMouseOver={br}
              dx="0"
              dy="0"
              fontFamily='"eBfdVKxHtUN1:::Roboto"'
              fontSize="55"
              fontWeight="400"
              transform="translate(758.924164 938.338299)"
              strokeWidth="0"
            >
              <tspan x="10" y="0" fontWeight="400" strokeWidth="0">
                Value
              </tspan>
              <tspan x="0" y="55" fontWeight="400" strokeWidth="0">
                Premise
              </tspan>
              <tspan x="0" y="110" fontWeight="400" strokeWidth="0">
                Integrity
              </tspan>
              <tspan x="0" y="165" fontWeight="400" strokeWidth="0"></tspan>
            </text>
            <g id="bl" onMouseOver={bl}>
              <ellipse
                rx="155"
                ry="155"
                transform="translate(455 974)"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
            <text
              onMouseOver={bl}
              dx="0"
              dy="0"
              fontFamily='"eBfdVKxHtUN1:::Roboto"'
              fontSize="53"
              fontWeight="400"
              transform="translate(313.815323 966.838291)"
              strokeWidth="0"
            >
              <tspan x="30" y="0" fontWeight="400" strokeWidth="0">
                Customer
              </tspan>
              <tspan x="15" y="53" fontWeight="400" strokeWidth="0">
                Satisfaction
              </tspan>
              <tspan x="0" y="106" fontWeight="400" strokeWidth="0"></tspan>
            </text>
            <g id="mr" onMouseOver={mr}>
              <ellipse
                rx="155"
                ry="155"
                transform="translate(1112 583.93)"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
            <text
              onMouseOver={mr}
              dx="0"
              dy="0"
              fontFamily='"eBfdVKxHtUN1:::Roboto"'
              fontSize="50"
              fontWeight="400"
              transform="translate(990.682404 577.226772)"
              strokeWidth="0"
            >
              <tspan x="70" y="0" fontWeight="400" strokeWidth="0">
                Our
              </tspan>
              <tspan x="10" y="50" fontWeight="400" strokeWidth="0">
                Employees
              </tspan>
              <tspan x="0" y="100" fontWeight="400" strokeWidth="0"></tspan>
            </text>
            <g id="tl" onMouseOver={tl}>
              <ellipse
                rx="155"
                ry="155"
                transform="translate(455 195)"
                fill="white"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
            <text
              onMouseOver={tl}
              dx="0"
              dy="0"
              fontFamily='"eBfdVKxHtUN1:::Roboto"'
              fontSize="62.1"
              fontWeight="400"
              transform="translate(317.541977 215.949822)"
              strokeWidth="0"
            >
              <tspan y="0" fontWeight="400" strokeWidth="0">
                Our Creed
              </tspan>
              <tspan x="0" y="124.2" fontWeight="400" strokeWidth="0"></tspan>
            </text>
            <style>
              {`
                            @font-face { font - family: 'eBfdVKxHtUN1:::Roboto';font-style: normal;font-weight: 400;src:
                            url(data:font/ttf;charset=utf-8;base64,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)
        format('truetype');}`}
            </style>
          </svg>
        </div>
      </div>
    </div>
  );
});

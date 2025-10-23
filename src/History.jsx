import { useEffect, memo } from "react";
import "./History.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default memo(function History() {
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);
  return (
    <div id="content">
      <div className="history">
        <div className="ntbk">
          <p className="p2">HISTORY</p>
          <p className="p1">
            <b>NEFERTITI MARINE</b> has been established since 1975 in the field
            of marine services all over the Egyptian coasts. Since then, the
            company scope of activities have grown-up & developed to cover
            varied fields as marine service & support, Surface preparation,
            painting, lining and thermal insulation works. Since 2000, the
            company started operating its own boat building & repair yard (YARD
            K), to maintain the company’s fleet & build new purpose built boats
            with added value to the company’s fleet.
          </p>
          <img loading="lazy" src="/hst/nfrt.webp" alt="" />
        </div>
        <AnimationOnScroll
          animateOnce={false}
          animateIn="animate__fadeInDown"
          className="his-imgs"
        >
          <img loading="lazy" src="/hst/h1.webp" alt="" />
          <img loading="lazy" src="/hst/h2.webp" alt="" />
          <img loading="lazy" src="/hst/h3.webp" alt="" />
          <img loading="lazy" src="/hst/h4.webp" alt="" />
        </AnimationOnScroll>
      </div>
    </div>
  );
});

import { useEffect, memo } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ProjectSection from "./Components/Project";

const projects = {
  completedProjects: [
    {
      title: "WIND K",
      subtitle: "Yacht",
      folder: "proj/wk",
      size: "contained",
    },
    {
      title: "MONSOON",
      subtitle: "Yacht",
      folder: "proj/mns",
      size: "contained",
    },
    {
      title: "SKY K",
      subtitle: "Yacht",
      folder: "proj/skk",
      size: "contained",
    },
    {
      title: "TYPHOON",
      subtitle: "Yacht",
      folder: "proj/typ",
      size: "contained",
    },
    {
      title: "RED SEA DIAMOND",
      subtitle: "Multicat",
      folder: "proj/rsd",
      size: "contained",
    },
    {
      title: "EGYCO21",
      subtitle: "Cargo Barge",
      folder: "proj/egy",
      size: "contained",
    },
    {
      title: "NSSC I",
      subtitle: "Interior",
      folder: "proj/nssc",
      size: "contained",
    },
    {
      title: "TAHIA MISR DREDGER",
      subtitle: "Dredger",
      folder: "proj/thm",
      size: "contained",
    },
    {
      title: "PIPE FLOATING",
      subtitle: "Pontoon",
      folder: "proj/pon",
      size: "contained",
    },
  ],
  modelingProjects: [
    {
      title: "MEGALODON",
      subtitle: "Yacht",
      folder: "3d/mgld",
      size: "contained",
    },
    {
      title: "MEGATRON",
      subtitle: "Yacht",
      folder: "3d/mgtrn",
      size: "contained",
    },
    {
      title: "TYPHOON",
      subtitle: "Yacht",
      folder: "3d/tph",
      size: "contained",
    },
    {
      title: "SPLIT HOPPER",
      subtitle: "Barge",
      folder: "3d/shb",
      size: "contained",
    },
    {
      title: "SEASCAPE",
      subtitle: "Submarine",
      folder: "3d/ssc",
      size: "contained",
    },
    {
      title: "SEA K",
      subtitle: "Supply Boat",
      folder: "3d/sk",
      size: "contained",
    },
    {
      title: "MCAT15500",
      subtitle: "Multicat",
      folder: "3d/mcat",
      size: "contained",
    },
    {
      title: "CREW BOAT",
      folder: "3d/crew",
      size: "contained",
    },
    {
      title: "HOUSE BOAT",
      folder: "3d/hbt",
      size: "contained",
    },
    {
      title: "CATAMARAN",
      folder: "3d/ctm",
      size: "contained",
    },
  ],
};
export default memo(function TDO() {
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);

  return (
    <div id="content">
      <p className="intro-head">
        <b>Technical Design Office</b>
      </p>
      <div className="proj-head">
        <p className="intro-info">
          Our Small but experienced team of Naval Architects & Marine Engineers
          utilizing our network of Expertise & Specialists provide a full range
          of Ship Design and Construction Service. We are capable of providing
          tailor made solutions & design packages as well as modifications &
          conversions.
        </p>
      </div>

      <div className="title-cont">
        <p className="intro-head">
          <b>Completed Projects</b>
        </p>
      </div>
      <div className="sli-cont">
        {projects.completedProjects.map((proj) => (
          <ProjectSection key={proj.title} {...proj} />
        ))}
      </div>

      <div className="title-cont">
        <p className="intro-head">
          <b>3D Modeling</b>
        </p>
      </div>
      <div className="sli-cont">
        {projects.modelingProjects.map((proj) => (
          <ProjectSection key={proj.title} {...proj} />
        ))}
      </div>

      <div className="title-cont">
        <p className="intro-head">
          <b>Ongoing Projects</b>
        </p>
      </div>
      <div className="sli-cont">
        <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
          <div>
            <h1 className="projH1">
              MEGALODON | <p className="greyTitle">Yacht</p>
            </h1>
            <div className="slidexz">
              <div style={{ backgroundImage: "url( ong/mgd/1.webp )" }}></div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
          <div>
            <h1 className="projH1">
              MEGATRON | <p className="greyTitle">Yacht</p>
            </h1>
            <div className="slidexz">
              <div style={{ backgroundImage: "url( ong/mgt/1.webp )" }}></div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
          <div>
            <h1 className="projH1">
              K-MSA I | <p className="greyTitle">Multicat</p>
            </h1>
            <div className="slidexz">
              <div style={{ backgroundImage: "url( ong/msa/1.webp )" }}></div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
});

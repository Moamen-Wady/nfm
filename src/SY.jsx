import { useEffect, memo } from "react";
import ProjectSection from "./Components/Project";

const projects = {
  newBuilding: [
    { title: "NSSC I", folder: "shipYard/NSSC", size: "covered" },
    { title: "Monsoon", folder: "shipYard/mns", size: "covered" },
    { title: "Sea Scape", folder: "shipYard/sec", size: "covered" },
    { title: "SEA K", folder: "shipYard/sek", size: "covered" },
    { title: "Sky K", folder: "shipYard/skk", size: "covered" },
    { title: "Wind K", folder: "shipYard/wind", size: "covered" },
  ],
  repairConversion: [
    { title: "Split Hogger Barge", folder: "shipYard/spp", size: "covered" },
    { title: "Dredger Mostafa Monir", folder: "shipYard/mn", size: "covered" },
    { title: "Jhonny-floating crane", folder: "shipYard/j", size: "covered" },
    { title: "Nile Cargo", folder: "shipYard/nc", size: "covered" },
    { title: "Repair-Zakher Rio", folder: "shipYard/z", size: "covered" },
  ],
};

export default memo(function SY() {
  useEffect(() => {
    const proj = document.getElementById("nvbr");
    if (proj) {
      proj.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id="content">
      <div className="proj-head">
        <p className="intro-head">
          <b>Ship Yard</b>
        </p>
        <p className="intro-info">
          YARD K was established in 2004 at Rosetta Nile coast, where the river
          Nile meets the Mediterranean Sea. YARD K has already delivered a wide
          range of small & medium sized vessels for various marine applications;
          Offshore Supply Vessels, Offshore Utility Vessels, Diving Boats,
          Yachts, Live boards & Barges. We have also served our clients with
          conversions, repairs & maintenance work. We are a young, experienced,
          and energetic team capable of providing efficient quality service.
        </p>
      </div>

      <div className="title-cont">
        <p className="intro-head">
          <b>New Building</b>
        </p>
      </div>
      <div className="sli-cont">
        {projects.newBuilding.map((proj) => (
          <ProjectSection key={proj.title} {...proj} />
        ))}
      </div>

      <div className="title-cont">
        <p className="intro-head">
          <b>Repair & Conversion</b>
        </p>
      </div>
      <div className="sli-cont">
        {projects.repairConversion.map((proj) => (
          <ProjectSection key={proj.title} {...proj} />
        ))}
      </div>
    </div>
  );
});

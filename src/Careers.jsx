import { useEffect, memo } from "react";
export default memo(function Careers() {
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);
  return (
    <div id="content">
      <div className="carr">
        <p className="intro-info">
          NEFERTITI involves in maritime industry diversifying in marine
          support, ship building, and ship fabrication. Due to our rapid growth
          and business expansions, we are in search of dynamic and goal-oriented
          candidates to join us in developing the company as well as the
          industry together. Below is the list of current openings, click on
          each job position for specific requirements.
        </p>
        <div className="intro-head">
          <b> Current Vacancies </b>
        </div>
        <p className="intro-info">
          Interested applicants may forward their resumes together with a cover
          letter only in .doc, .docx or .pdf format to
          <span className="link-span intro-info">
            <a href="mailto:info@nefertitimarine.com">
              <b> info@nefertitimarine.com </b>
            </a>
          </span>
          Only shortlisted candidates will be notified for interview.
        </p>
      </div>
    </div>
  );
});

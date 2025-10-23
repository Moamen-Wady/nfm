import { useEffect, useState, useCallback, memo } from "react";
import "./Contact.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import api from "./api";
export default memo(function Contact({ notify }) {
  let [dissub, setDissub] = useState([false, "all", "white", "black"]);

  const sForm = useCallback(async (e) => {
    e.preventDefault();
    setDissub([true, "none", "grey", "black"]);
    notify("info", "Please Wait...");
    const formData = new FormData(document.getElementById("formContact"));
    await api
      .post("/submit.php", formData)
      .then((data) => {
        if (data.data === "Message sent successfully!") {
          notify("success", "Message Sent Successfully!");
          document.getElementById("form").reset();
          setDissub([false, "all", "white", "black"]);
        } else {
          notify("error", "Failed to Send Message, Please Try Again");
          setDissub([false, "all", "white", "black"]);
        }
      })
      .catch(() => {
        notify("error", "Server Error, Please Try Again");
        setDissub([false, "all", "white", "black"]);
      });
  }, []);
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);
  return (
    <div id="content">
      <div className="contactmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2407.287259666271!2d30.423415269368366!3d31.430149480713368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f68f87d46f071f%3A0xd6f468d2cb84a0ad!2sNefertiti%20Marine%20-%20Yard%20K!5e0!3m2!1sen!2seg!4v1672338267765!5m2!1sen!2seg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>

      <div className="contactinfocont">
        <AnimationOnScroll
          animateOnce={false}
          animateIn="animate__fadeInDown"
          className="contactinfo"
        >
          <h1>Contact Info</h1>
          <div>
            <h2>Addresses</h2>
            <Link className="aleft">
              Head Office: 1, El-Fardous St. Smouha, Alexandria, Egypt
            </Link>
            <Link className="aleft">YardK: Rosetta Coast, Egypt</Link>
          </div>
          <div>
            <h2>Tel:</h2>
            <a className="acent" href="tel:+20 3 425 1845">
              +20 3 425 1845
            </a>
          </div>
          <div>
            <h2>Fax</h2>
            <a className="acent" href="tel:+20 3 420 3873">
              +20 3 420 3873
            </a>
          </div>
          <div>
            <h2>Tel/Fax</h2>
            <a className="acent" href="tel:+20 45 292 8698">
              +20 45 292 8698
            </a>
          </div>
          <div>
            <h2>E-mail</h2>
            <a className="acent" href="mailto:info@nefertitimarine.com">
              info@nefertitimarine.com
            </a>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateOnce={false}
          animateIn="animate__fadeInDown"
          className="contactcform"
        >
          <form
            onSubmit={sForm}
            method="post"
            id="formContact"
            className="contactform"
          >
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="E-mail" />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
            />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              disabled={dissub[0]}
              style={{
                backgroundColor: dissub[2],
                pointerEvents: dissub[1],
                color: dissub[3],
              }}
            />
          </form>
        </AnimationOnScroll>
      </div>
    </div>
  );
});

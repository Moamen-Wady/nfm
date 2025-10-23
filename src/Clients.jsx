import { useEffect, memo } from "react";
import "./Clients.css";
export default memo(function Clients() {
  useEffect(() => {
    let proj = document.getElementById("nvbr");
    setTimeout(() => {
      proj.scrollIntoView();
    }, 10);
  }, []);
  return (
    <div id="content">
      <h1 className="intro-head">Our Clients</h1>
      <div className="cl-page">
        <img loading="lazy" alt="" src="/home/clients/1.webp" />
        <img loading="lazy" alt="" src="/home/clients/2.webp" />
        <img loading="lazy" alt="" src="/home/clients/3.webp" />
        <img loading="lazy" alt="" src="/home/clients/4.webp" />
        <img loading="lazy" alt="" src="/home/clients/5.webp" />
        <img loading="lazy" alt="" src="/home/clients/6.webp" />
        <img loading="lazy" alt="" src="/home/clients/7.webp" />
        <img loading="lazy" alt="" src="/home/clients/8.webp" />
        <img loading="lazy" alt="" src="/home/clients/9.webp" />
        <img loading="lazy" alt="" src="/home/clients/10.webp" />
        <img loading="lazy" alt="" src="/home/clients/11.webp" />
        <img loading="lazy" alt="" src="/home/clients/12.webp" />
        <img loading="lazy" alt="" src="/home/clients/13.webp" />
        <img loading="lazy" alt="" src="/home/clients/14.webp" />
        <img loading="lazy" alt="" src="/home/clients/15.webp" />
        <img loading="lazy" alt="" src="/home/clients/16.webp" />
      </div>
    </div>
  );
});

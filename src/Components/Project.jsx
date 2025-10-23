import { AnimationOnScroll } from "react-animation-on-scroll";

export default function ProjectSection({ title, subtitle, folder, size }) {
  const images = Array.from({ length: 6 }, (_, i) => `${folder}/${i + 1}.webp`);

  return (
    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
      <div>
        <h1 className="projH1">
          {title+ " "}
          {subtitle ? (
            <>
              | <p className="greyTitle">{subtitle}</p>
            </>
          ) : null}
        </h1>
        <div className={`slidez ${size}`}>
          <span style={{ backgroundImage: `url(${images[0]})` }}>
            <span style={{ backgroundColor: "white" }}>
              {images.slice(1).map((src, idx) => (
                <div key={idx} style={{ backgroundImage: `url(${src})` }} />
              ))}
            </span>
          </span>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default function Loading() {
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 255, 255, 0.25)",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <img loading="lazy"
        src="/loading.gif"
        alt="loading"
        style={{ width: "12vw", height: "12vw" }}
      />
    </div>
  );
}

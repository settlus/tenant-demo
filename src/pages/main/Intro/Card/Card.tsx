import introMain from "../../../../public/png/intro_main.png";
import introRight from "../../../../public/png/intro_right.png";
import introLeft from "../../../../public/png/intro_left.png";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();

  return (
<div style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
<div style={{ width: 730, height: 566, position: "relative" }}>
<button
      style={{
        position: "absolute",
        top: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#00D966",
        color: "white",
        borderRadius: "8px",
        padding: "0.2rem 6rem",
        fontSize: "1.7rem",
        boxShadow: "0px 3px 2px rgba(0,0,0,0.5)",
        fontFamily: "Pacifico",
        zIndex: 10
      }}
      onClick={() => navigate("/intro/mission")}
    >
      Start !!
    </button>
    <img
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      src={introMain}
      alt="intro_main"
    />
    <img
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      src={introRight}
      alt="intro_right"
    />
    <img
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      src={introLeft}
      alt="intro_left"
    />
  </div>
    </div>
    // <div className={styles.card}>
    //   <img src={introSvg} alt="intro" />
    //   <button onClick={() => navigate("/intro/mission")}>Start !!</button>
    // </div>
  );
}

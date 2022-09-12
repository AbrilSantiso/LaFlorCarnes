import { useState } from "react";
import styles from "./headerStyles.module.css";
import ReactPlayer from "react-player";
import { useEffect } from "react";

export const Header = (props) => {
  const [screenWidth,setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  })

  return (
    <header id="header">      
      <div className={styles.header_video_box}>
        <ReactPlayer
          url={screenWidth > 780 ? "img/CarnesLaFlor.mp4" : "img/CarnesLaFlor-mobile.mp4" }
          className="react-player"
          playing={true}
          loop={true}
          muted
          controls={false}
          width="100%"
          height="auto"
        />
        <a target="_blank" href="https://api.whatsapp.com/send?phone=+5491124161932&text=Hola, me gustaría hacer un pedido"        
          className={`btn btn-lg page-scroll ${styles.btn_header}`}>        
          Hacé tu pedido
        </a>
      </div>
    </header>
  );
};

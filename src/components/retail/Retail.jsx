import styles from "./retail.module.css";

export const Retail = () => {
  return (
    <div id="minorista">
      <div className={styles.container}>
        <h2 className={`title ${styles.tituloSocios}`}>Hogares y familia</h2>
          <hr className={styles.lineaContainer}/>
        <div className={styles.contenido}>
          <div className={styles.itemContenido}>
            <img
              src="https://i.imgur.com/kyAGYyt.png"
              alt="carniceria"
              className={styles.imagenResto}
            />
          </div>
          <div className={styles.itemContenido}>
            <h4 className={styles.textoIntro}>
              <span className={styles.nombre}>Carnes La Flor</span> cuenta también con su propio local abierto al público en el barrio de Parque Patricios y realiza entregas en toda la Capital Federal.
            </h4>        
            <a
              href="https://api.whatsapp.com/send?phone=+5491122711058&text=Hola,%20quiero%20realizar%20un%20pedido"
              className={styles.mensajeConsulta}
              target="_blank"
            >
              Hacé tu pedido aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import styles from "./WholesalersSection.module.css";

export const WholesalersSection = () => {
  return (
    <div id="socios-gastronomicos">
      <div className={styles.container}>
        <h2 className={`title ${styles.tituloSocios}`}>Socios gastronómicos</h2>
          <hr className={styles.lineaContainer}/>
        <div className={styles.contenido}>
          <div className={styles.itemContenido}>
            <img
              src="https://resizer.glanacion.com/resizer/9HMPAvgHsowZUOJLayX8Sq7SzqU=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/M566UUC43BFHXK5GC3RRM2MU7I.JPG"
              alt="restaurant"
              className={styles.imagenResto}
            />
          </div>
          <div className={styles.itemContenido}>
            <h4 className={styles.textoIntro}>
              <span className={styles.nombre}>Carnes La Flor</span> cuenta con
              un circuito de locales gastronómicos, restaurants y hoteles a los
              que provee a diario.
            </h4>
            <h4 className={styles.pregunta}>¿Te gustaría formar parte?</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+5491122711058&text=Hola,%20quiero%20información%20sobre%20pedidos%20mayoristas"
              className={styles.mensajeConsulta}
              target="_blank"
            >
              Hacé click aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

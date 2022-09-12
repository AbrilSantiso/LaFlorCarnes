import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <div id="contact" className="text-center brown-container">
        <h1 className={`${styles.contact_title} title`}>Contacto</h1>
        <hr className={styles.lineaContainer} />
        <div className="container">
          <div className="col-md-6">
            <h2 className={`${styles.subtitleContact}`}>
              Gastronomía y Afines
            </h2>
            <div className={styles.contact_box_container}>
              <div className={styles.contact_box}>
                <div className="contact-container">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=+5491122711058&text=Hola, me gustaría hacer un pedido"
                  >
                    <img
                      src="img/iconosSeccionContacto/whatsapp.png"
                      alt="whatsapp"
                      width="40px"
                      height="40px"
                    />
                  </a>
                  <p>
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=+5491122711058&text=Hola, me gustaría hacer un pedido"
                    >
                      1122711058
                    </a>
                  </p>
                </div>
                <div className="contact-container">
                  <a target="_blank" href="tel:011-4941-6017">
                    <img
                      src="img/iconosSeccionContacto/llamada-telefonica.png"
                      alt="telefono"
                      width="40px"
                      height="40px"
                    />
                  </a>
                  <div className="contact-container-tel">
                    <p>
                      <a target="_blank" href="tel:011-4941-6017">
                        4941-6017
                      </a>
                    </p>
                    <p>
                      <a target="_blank" href="tel:011-4943-6937">
                        4943-6937
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-container">
                  <a
                    target="_blank"
                    href="mailto:frigorifico@laflordelparque.com"
                  >
                    <img
                      src="img/iconosSeccionContacto/gmail.png"
                      alt="gmail"
                      width="40px"
                      height="40px"
                    />
                  </a>
                  <p>
                    <a
                      target="_blank"
                      href="mailto:frigorifico@laflordelparque.com"
                    >
                      frigorifico@laflordelparque.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/*<div className="contact-container">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/laflorcarnes/?hl=en"
                            >
                                <img
                                    src="img/iconosSeccionContacto/instagram.png"
                                    alt="instagram"
                                    width="50px"
                                    height="50px"
                                />
                            </a>
                            <p>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/laflorcarnes/?hl=en"
                                >
                                    @laflorcarnes
                                </a>
                            </p>
                        </div>*/}
          </div>
          <div className="col-md-6">
            <h2 className={`${styles.subtitleContact}`}>
              Clientes Particulares
            </h2>
            <div className={styles.contact_box_container}>
              <div className={styles.contact_box}>
                <div className="contact-container">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=+5491124161932&text=Hola, me gustaría hacer un pedido"
                  >
                    <img
                      src="img/iconosSeccionContacto/whatsapp.png"
                      alt="whatsapp"
                      width="40px"
                      height="40px"
                    />
                  </a>
                  <p>
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=+5491124161932&text=Hola, me gustaría hacer un pedido"
                    >
                      1124161932
                    </a>
                  </p>
                </div>
                <div className="contact-container">
                  <a target="_blank" href="tel:011-4308-5124">
                    <img
                      src="img/iconosSeccionContacto/llamada-telefonica.png"
                      alt="telefono"
                      width="40px"
                      height="40px"
                    />
                  </a>
                  <p>
                    <a target="_blank" href="tel:011-4308-5124">
                      4308-5124
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.infoItem} ${styles.horariosContainer}`}>
              <h2 className={styles.subtitleContact}>Horario de Atención</h2>
              <div className={styles.horarios}>
                <p className={styles.textoBloque}>Lunes a Viernes:</p>
                <div className="contact-container-horarios">
                  <p className={styles.textoBloque}>9:00 a 13:30hs</p>
                  <p className={styles.textoBloque}>17:00 a 20:30hs</p>
                </div>
              </div>
              <div className={styles.horarios}>
                <p className={styles.textoBloque}>Sábados:</p>
                <p className={styles.textoBloqueSab}>9:00 a 13:30hs</p>
              </div>
              <div className={styles.horarios}>
                <p className={styles.textoBloqueDom}>PROXIMAMENTE DOMINGOS</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.infoItem} ${styles.locationContainer}`}>
          <h2 className={styles.subtitleContact}>¿Dónde estamos?</h2>
          <p className={styles.textoBloque}>
            Nos encontramos en Salcedo 2906 (Esquina Dean Funes)
          </p>
          <p className={styles.textoBloque}>
            en el barrio de Parque de los Patricios,
          </p>
          <p className={styles.textoBloque}>C1259ABM, CABA</p>
        </div>
        <div className={styles.mapaContainer}>
          <iframe
            className={styles.mapa}
            allowFullScreen={""}
            loading={"lazy"}
            src={
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyCW2rD1iN9Jt7LP0N5R4t2NE5L9QME1bFg&q=+Salcedo+2906,+C1259ABH+CABA&zoom=16"
            }
          ></iframe>
        </div>
      </div>
    </>
  );
};

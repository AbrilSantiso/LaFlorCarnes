import styles from "./navigationStyles.module.css";

export const Navigation = (props) => {
  return (
    <>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <a
          className={`navbar-brand page-scroll ${styles.navigationLogo}`}
          href="#page-top"
        >
          <img
            src="https://i.imgur.com/4cakAmz.png"
            alt="logo"
            className={styles.logo}
          />
          Carnes La Flor
        </a>
        <div className={styles.nav_container}>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#socios-gastronomicos" className={`page-scroll ${styles.nav_item}`}>
                  Mayoristas
                </a>
              </li>
              <li>
                <a href="#minorista" className="page-scroll">
                  Minoristas
                </a>
              </li>
              <li>
                <a href="#catalogo" className="page-scroll">
                  Productos
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contacto
                </a>
              </li>
              <li>
              <a href="#curriculum" className="page-scroll">
                Trabajá con nosotros
              </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

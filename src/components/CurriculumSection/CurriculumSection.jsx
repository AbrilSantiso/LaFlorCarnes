import styles from "./Curriculum.module.css";

export const CurriculumSection = () => {
  return (
    <div className={styles.container} id="curriculum">
      <h4 className={styles.title}>Trabajá con nosotros</h4>
      <hr className={styles.lineaContainer}/>
      <p className={styles.subtitle}>Si querés formar parte de nuestra empresa como: </p>
      <ul>
      <li className={styles.item}>Carnicero en mostrador</li>
      <li className={styles.item}>Personal de Desposte</li>
      <li className={styles.item}>Repartidor </li>
      <li className={styles.item}>Comercial de nuestros productos</li>
      </ul>
      <a target="_blank" href="mailto:frigorifico@laflordelparque.com" className={styles.curriculum} rel="noreferrer">Envianos tu Curriculum Vitae</a>
      <p className={styles.subtitle}>Excluyente: residir a una distancia razonable del establecimiento.</p>
    </div>
  );
};

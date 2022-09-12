import styles from "./Producto.module.css"

export const Producto = ({producto}) => {

  return (
          <div className={styles.productoContainer}>
         <img src={producto.foto} alt={producto.nombre} className={styles.imagenProducto} />
         <h5 className={styles.nombreProducto}>{producto.nombre}</h5>
         </div>
         )
}

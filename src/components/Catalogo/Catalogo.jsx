import { useState, useEffect } from "react";
import { Producto } from "./Producto/Producto";
import styles from "./Catalogo.module.css";
import catalogo from "./Catalogo.json";

export const Catalogo = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("");
  const [productos, setProductos] = useState([]);
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    setCategoriaActiva(catalogo[0]);
    setProductos(catalogo[0].productos);
  }, []);

  const setActive = (categoria) => {
    setCategoriaActiva(categoria);
    setProductos(categoria.productos);
  };

  return (
    <div id="catalogo">
      <div className={styles.catalogoContainer}>
        <h2 className={`title ${styles.tituloProducto}`}>Productos</h2>
          <hr className={styles.lineaContainer}/>
        <div className={styles.categoriasContainer}>
          {catalogo.map((categoria) => (
            <h4
              className={`${styles.categoria} ${
                categoriaActiva.nombreCategoria === categoria.nombreCategoria
                  ? `${styles.active}`
                  : ` ${styles.disabled}`
              }`}
              key={categoria.nombreCategoria}
              onClick={() => {
                setActive(categoria);
              }}
            >
              {categoria.nombreCategoria}
            </h4>
          ))}
        </div>
        <div className={styles.productosContainer}>
          {productos
            ? verMas
              ? productos.map((producto) => (
                  <Producto producto={producto} key={producto.id} />
                ))
              : productos
                  .slice(0, 8)
                  .map((producto) => (
                    <Producto producto={producto} key={producto.id} />
                  ))
            : "Cargando productos..."}
        </div>
        {productos.length > 8 ? (
          <button
            className={styles.verMasBtn}
            onClick={() => {
              setVerMas(!verMas);
            }}
          >
            {!verMas ? "Ver más productos" : "Ver menos productos"}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

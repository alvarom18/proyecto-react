import { Button } from "@mui/material";
import styles from "./Item.module.css";
import ItemCount from "../Counter/Counter";
import ItemDetail from "../ItemDetail/ItemDetail";
const Item = ({ id, name, img, price, stock }) => {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={styles.imagenes} />
      </picture>
      <section>
        <p>Precio: ${price}</p>
        <p>Stock disponible: {stock}</p>
      </section>
      <footer>
        <Button variant="text">ver detalles</Button>
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(cantidad) => console.log("Cantidad agregada", cantidad)}
        />
        <ItemDetail />
      </footer>
    </article>
  );
};
export default Item;

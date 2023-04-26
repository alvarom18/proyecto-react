import { Button } from "@mui/material";
import CartWidget from "../CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.contenedorNavbar}>
      <h3>SmartTech</h3>
      <ul className={styles.contenedorMenu}>
        <li>
          <Button variant="text">Inicio</Button>
        </li>
        <li>
          <Button variant="text">Samsung</Button>
        </li>
        <li>
          <Button variant="text">Apple</Button>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.contenedorNavbar}>
        <Link to="/">
          <h3>SmartTech</h3>
        </Link>
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
      <Outlet />
    </div>
  );
};

export default Navbar;

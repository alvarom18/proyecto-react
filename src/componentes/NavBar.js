import { Button } from "@mui/material";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h3>SmartTech</h3>
      <div>
        <Button variant="text">Inicio</Button>
        <Button variant="text">Samsung</Button>
        <Button variant="text">Apple</Button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

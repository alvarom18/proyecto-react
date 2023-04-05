import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <nav>
      <h3>SmartTech</h3>
      <div>
        <Button variant="text">Inicio</Button>
        <Button variant="text">Samsung</Button>
        <Button variant="text">Apple</Button>
      </div>
    </nav>
  );
};

export default NavBar;

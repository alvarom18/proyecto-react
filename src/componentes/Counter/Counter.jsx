import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const suma = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div>
        <Button variant="text" onClick={resta}>
          -
        </Button>
        <h4>{cantidad}</h4>
        <Button variant="text" onClick={suma}>
          +
        </Button>
      </div>
      <div>
        <Button
          variant="text"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
export default ItemCount;

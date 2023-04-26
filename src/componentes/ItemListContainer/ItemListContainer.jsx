import { useState, useEffect } from "react";
import { getProducts } from "../Products";
import ItemList from "../ItemList";

// const ItemListContainer = ({ saludo }) => {
//   return (
//     <div>
//       <h1>{saludo}</h1>
//     </div>
//   );
// };
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((Response) => {
        setProducts(Response);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export default ItemListContainer;

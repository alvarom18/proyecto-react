const products = [
  {
    id: "1",
    name: "Iphone 14 Pro",
    price: "1100",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660753617560",
    stock: 25,
    description: "Descripcion Iphone 14 Pro",
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    price: "1000",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/2302/gallery/latin-galaxy-s23-s911-sm-s911bzekgto-thumb-534843655?$264_264_PNG$",
    stock: 25,
    description: "Descripcion Samsung Galaxy S23",
  },
  {
    id: "3",
    name: "Samsung Galaxy S23 Ultra",
    price: "1100",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/2302/gallery/latin-galaxy-s23-s918-sm-s918bzgugto-thumb-534860533?$LazyLoad_Home_PNG$",
    stock: 25,
    description: "Samsung Galaxy S23 Ultra",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

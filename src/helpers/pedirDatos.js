import MOCK_PRODUCTS from "../data/MOCK_DATA.json";

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 1000);
  });
};

export const pedirProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS.find((prod) => prod.id === id));
    }, 1500);
  });
};

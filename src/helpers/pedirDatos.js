import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.jsx";

{
  /* Se exporta la funcion pedirProductos que se encarga de obtener los productos de la base de datos y se exporta la funcion pedirProductoPorId que se encarga de obtener un producto por su id */
}

export const pedirProductos = () => {
  {
    /* Se crea una constante productosRef que hace referencia a la coleccion productos de la base de datos */
  }
  const productosRef = collection(db, "productos");

  {
    /* Se retorna la funcion getDocs que se encarga de obtener los documentos de la coleccion productosRef y se mapea el resultado para obtener un array de productos */
  }
  return getDocs(productosRef).then((res) => {
    const productos = res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return productos;
  });
};

{
  /* Se exporta la funcion pedirProductoPorId que se encarga de obtener un producto por su id */
}
const pedirProductoPorId = async (id) => {
  try {
    const productoDoc = doc(db, "productos", id);
    const productoSnap = await getDoc(productoDoc);

    {
      /* Se verifica si el producto existe, si existe se retorna el producto, si no existe se lanza un error */
    }
    if (productoSnap.exists()) {
      return { id: productoSnap.id, ...productoSnap.data() };
    }

    throw new Error("El producto no existe");
  } catch (error) {
    throw new Error("Error al obtener el producto");
  }
};

export { pedirProductoPorId };

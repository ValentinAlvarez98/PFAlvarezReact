import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.jsx";

export const pedirProductos = () => {
  const productosRef = collection(db, "productos");

  return getDocs(productosRef).then((res) => {
    const productos = res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return productos;
  });
};

const pedirProductoPorId = async (id) => {
  try {
    const productoDoc = doc(db, "productos", id);
    const productoSnap = await getDoc(productoDoc);
    if (productoSnap.exists()) {
      return { id: productoSnap.id, ...productoSnap.data() };
    }
    throw new Error("El producto no existe");
  } catch (error) {
    throw new Error("Error al obtener el producto");
  }
};

export { pedirProductoPorId };

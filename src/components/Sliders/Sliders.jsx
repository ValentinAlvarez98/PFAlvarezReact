import AdSlider from "./AdSlider/AdSlider.jsx";
import { imagesAdSlider } from "../../img/Img.jsx";

{ /* Se crea el objeto containerStyles, el cual se encarga de darle estilos al contenedor de los sliders. */ }
const containerStyles = {
    width: "auto",
    height: "70vh",
    margin: "0 auto",
};

{ /* Se crea el componente Sliders, el cual se encarga de mostrar los sliders de la página. */ }
const Sliders = () => {
    return (
        <div>
            <div style={containerStyles}>
                <AdSlider slides={imagesAdSlider} />
            </div>
        </div>
    );
};

export default Sliders;

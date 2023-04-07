import AdSlider from "./AdSlider/AdSlider.jsx";
import { imagesAdSlider } from "../../img/Img.jsx";

const containerStyles = {
    width: "auto",
    height: "70vh",
    margin: "0 auto",
};

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

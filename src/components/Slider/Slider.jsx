import { imagesCarousel } from "../../img/Img.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel
      dynamicHeight={true}
      autoPlay
      animation="slide"
      indicators={false}
      timeout={500}
      interval={3000}
      infiniteLoop
      centerMode={true}
      centerSlidePercentage={70}
      showThumbs={false}
      showStatus={false}
    >
      {imagesCarousel.map((item) => (
        <div key={item.label}>
          <img src={item.imgPath} alt={item.label} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;

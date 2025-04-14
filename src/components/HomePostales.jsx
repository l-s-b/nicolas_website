import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/home/HomePostales.css";
import Separator from "./Separator";
import useTheme from "../hooks/useTheme";

function HomePostales() {
  const theme = useTheme().theme;
  var settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const images = import.meta.glob(
    "../../public/img/postalesTour_cuadradas/*.webp",
    { eager: true }
  );

  const imagePaths = Object.entries(images).map(([path, module]) => ({
    name: path.split("/").pop(),
    src: module.default,
  }));

  return (
    <section id="postalesSlideshow">
        <Separator title="Postales Tour" themeClasses={theme} />
        <div className="slider-container">
        <Slider {...settings}>
            {imagePaths.map((image, index) => (
            <div key={index}>
                <img src={image.src} alt={image.name} />
            </div>
            ))}
        </Slider>
        </div>
    </section>
  );
}

export default HomePostales;

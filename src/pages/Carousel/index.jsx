// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const services = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi qui voluptatibus sunt delectus! Qui delectus laborum labore, tempora velit voluptas aperiam a illum corporis, modi est consectetur veritatis.`,
    title: "Innovative Solutions",
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi qui voluptatibus sunt delectus! Qui delectus laborum labore, tempora velit voluptas aperiam a illum corporis, modi est consectetur veritatis.`,
    title: "Digital Transformation",
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi qui voluptatibus sunt delectus! Qui delectus laborum labore, tempora velit voluptas aperiam a illum corporis, modi est consectetur veritatis.`,
    title: "Consultancy & Staff Augmentation",
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi qui voluptatibus sunt delectus! Qui delectus laborum labore, tempora velit voluptas aperiam a illum corporis, modi est consectetur veritatis.`,
    title: "Enterprise Development",
  },
];

const Carousel = () => {
  const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
    <span {...props}>{children}</span>
  );

  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: false,
    adaptiveHeight: true,
    width: "100%",
    margin: 10,
    autoplay: true,
    prevArrow: (
      <SlickButtonFix>
        <button className="slick-arrow slick-prev clr-primary">
          <span className="material-icons">
            <ArrowBackIosNewOutlinedIcon color="primary" />
          </span>
        </button>
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <button className="slick-arrow slick-next clr-primary">
          <span className="material-icons">
            <ArrowForwardIosOutlinedIcon color="primary" />
          </span>
        </button>
      </SlickButtonFix>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-pg">
      <div className="inner">
        <h1 className="clr-primary title">Our Services</h1>
        <Slider {...sliderSettings}>
          {services.map(service => (
            <div key={service.title} className="services__card dbl-border-box">
              <div className="inner">
                <header>
                  <MiscellaneousServicesOutlinedIcon />
                  <h4>{service.title}</h4>
                </header>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

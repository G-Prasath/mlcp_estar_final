import React from "react";
import "./Home_banner.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Home_banner = () => {
  const slideOptions = {
    type: "loop",
    autoplay: true, // Set autoplay to true
    interval: 2000, // Set autoplay interval in milliseconds
    arrows: false,
  };

  return (
    <div className="main">
      <Splide options={slideOptions}>
        <SplideSlide className="item1">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h1>Effortless Shuttle Parking with Streamlined Convenience</h1>
            <p>
              Experience hassle-free parking with our shuttle service, offering
              streamlined convenience for seamless travel to and from your
              destination.
            </p>
          </div>
        </SplideSlide>

        <SplideSlide className="item2">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h1>Innovative Puzzle Parking Smart Space Solutions</h1>
            <p>
              Revolutionize your parking experience with our puzzle parking
              system, offering ingenious solutions for maximizing space and
              convenience.
            </p>
          </div>
        </SplideSlide>

        <SplideSlide className="item3">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h1>ASRS : Effortless Material Handling</h1>
            <p>
              Experience the future of storage with our ASRS solutions, ensuring
              seamless retrieval and optimal space utilization for unparalleled
              efficiency.
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Home_banner;

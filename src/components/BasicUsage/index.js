import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BasicUsage = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },

    LargeDesktop: {
      breakpoint: { max: 2999, min: 1801 },
      items: 5,
    },

    desktop: {
      breakpoint: { max: 1800, min: 1101 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={() => onClick()}
      >
        <i class="arrow-right-heavy-orange"></i>
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={() => onClick()}
      >
        <i class="arrow-left-heavy-orange"></i>
      </button>
    );
  };

  return (
    <div className="basic-carousel">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={true}
        showDots={true}
        renderDotsOutside
        infinite={true}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        // autoPlay
        // autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 2s"
        // transitionDuration={5000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item padding-40-px"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}

        // want to know still about following props
        // deviceType={props.deviceType}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}

        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />1
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />2
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />3
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />4
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />5
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />6
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />7
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />8
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />9
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300" />
          10
        </div>
      </Carousel>
    </div>
  );
};

export default BasicUsage;

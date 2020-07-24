import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BasicUsage = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
        // autoPlaySpeed={100}
        keyBoardControl={true}
        customTransition="all 2s"
        // transitionDuration={5000}

        // want to know still about following props
        // deviceType={props.deviceType}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}

        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src="https://via.placeholder.com/300" />1
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />2
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />3
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />4
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />5
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />6
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />7
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />8
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />9
        </div>
        <div>
          <img src="https://via.placeholder.com/300" />
          10
        </div>
      </Carousel>
    </div>
  );
};

export default BasicUsage;

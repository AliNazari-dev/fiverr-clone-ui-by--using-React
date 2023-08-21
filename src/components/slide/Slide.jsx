import React, { Children } from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";
import CatCard from "../catCard/CatCard";


const Slide = ({ slidesToShow, arrowScroll, children }) => {
  return (
    <div className='slide'>
      <div className='container'>
        <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

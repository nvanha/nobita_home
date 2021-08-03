import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Slider = (props) => {
  const { data } = props;
  const dataSlider = data.concat(data);

  const [widthDevice, setWidthDevice] = useState(window.innerWidth);
  const paddingSliderWrap = () => {
    if (widthDevice <= 479) return 30;
    else if (widthDevice <= 767) return 50;
    else if (widthDevice <= 991) return 60;
    else if (widthDevice <= 1199) return 90;
    else return 60;
  };
  const quantitySlider = widthDevice <= 767 ? 1 : widthDevice <= 991 ? 2 : 3;
  const widthSlider = (widthDevice - paddingSliderWrap() * 2) / quantitySlider;
  const widthSliderList =
    widthSlider * dataSlider.length + paddingSliderWrap() * 2;
  const [activeSlider, setActiveSlider] = useState(
    widthDevice <= 767 ? [1] : widthDevice <= 991 ? [1, 2] : [1, 2, 3]
  );
  const [tmp, setTmp] = useState(-1);

  const sliderWrap = useRef(null);

  const prevSlider = () => {
    if (activeSlider[0] !== 1) {
      setTmp(tmp + 1);
      let demo = activeSlider;
      demo.unshift(demo[0] - 1);
      demo.pop();
      setActiveSlider(demo);
    } else {
      setTmp(widthDevice <= 767 ? -5 : widthDevice <= 991 ? -4 : -3);
      setActiveSlider(
        widthDevice <= 767 ? [5] : widthDevice <= 991 ? [4, 5] : [3, 4, 5]
      );
    }
    sliderWrap.current.style.transform = `translate3d(${
      widthSlider * tmp
    }px, 0px, 0px)`;
  };

  const nextSlider = () => {
    if (activeSlider[activeSlider.length - 1] !== 5) {
      setTmp(tmp - 1);
      let demo = activeSlider;
      demo.push(demo[demo.length - 1] + 1);
      demo.shift();
      setActiveSlider(demo);
    } else {
      setTmp(-1);
      setActiveSlider(
        widthDevice <= 767 ? [1] : widthDevice <= 991 ? [1, 2] : [1, 2, 3]
      );
    }
    sliderWrap.current.style.transform = `translate3d(${
      widthSlider * tmp
    }px, 0px, 0px)`;
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidthDevice(window.innerWidth);
      setActiveSlider(
        window.innerWidth <= 767
          ? [1]
          : window.innerWidth <= 991
          ? [1, 2]
          : [1, 2, 3]
      );
      setTmp(-1);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div className="wrapper-home-banner">
      <div className="list-slider-banner">
        <div
          className="slider-wrap"
          ref={sliderWrap}
          style={{
            width: widthSliderList,
            paddingLeft: paddingSliderWrap(),
            paddingRight: paddingSliderWrap(),
            transform: `translate3d(${widthSlider * tmp}px, 0px, 0px)`,
          }}
        >
          {dataSlider.map((item, index) => (
            <SliderItem
              key={index}
              item={item}
              width={widthSlider}
              active={activeSlider.includes(index)}
            />
          ))}
        </div>

        <div className="slider-control">
          <button
            type="button"
            className="slider-control--prev"
            onClick={prevSlider}
            style={{ left: `${paddingSliderWrap() - 25}px` }}
          ></button>
          <button
            type="button"
            className="slider-control--next"
            onClick={nextSlider}
            style={{ right: `${paddingSliderWrap() - 25}px` }}
          ></button>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
};

const SliderItem = (props) => (
  <div
    className={`slider-item ${props.active ? "active" : ""}`}
    style={{ width: props.width }}
  >
    <div className="slider-item-inner">
      <Link to={props.item.path}>
        <img src={props.item.image} alt={props.item.title} />
      </Link>
    </div>
  </div>
);

export default Slider;

import React from "react";

import Helmet from "./../components/Helmet/Helmet";
import Slider from "./../components/Slider/Slider";

import sliderData from "./../assets/fake-data/slider";

const HomePage = () => {
  return (
    <Helmet title="Home">
      {/* Slider */}
      <Slider data={sliderData} />
      {/* End Slider */}

      <div style={{ padding: "50px 0 50px 20px" }}>HomePage</div>
    </Helmet>
  );
};

export default HomePage;

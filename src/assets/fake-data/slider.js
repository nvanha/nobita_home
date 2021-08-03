import * as Config from "./../../constants/Config";

const slider1 =
  require("./../images/banner/home_category_1_banner.jpg").default;
const slider2 =
  require("./../images/banner/home_category_2_banner.jpg").default;
const slider3 =
  require("./../images/banner/home_category_3_banner.jpg").default;
const slider4 =
  require("./../images/banner/home_category_4_banner.jpg").default;
const slider5 =
  require("./../images/banner/home_category_5_banner.jpg").default;

const sliderData = [
  {
    title: "quan-dai",
    image: slider1,
    path: `/${Config.HOME_PAGE}`,
  },
  {
    title: "ao-thun",
    image: slider2,
    path: `/${Config.HOME_PAGE}`,
  },
  {
    title: "so-mi",
    image: slider3,
    path: `/${Config.HOME_PAGE}`,
  },
  {
    title: "ao-khoac",
    image: slider4,
    path: `/${Config.HOME_PAGE}`,
  },
  {
    title: "shorts",
    image: slider5,
    path: `/${Config.HOME_PAGE}`,
  },
];

export default sliderData;

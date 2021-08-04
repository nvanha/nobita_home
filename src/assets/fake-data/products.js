const product_01_image_01 = require("./../images/products/p1-1.jpeg").default;
const product_01_image_02 = require("./../images/products/p1-2.jpeg").default;

const product_02_image_01 = require("./../images/products/p2-1.jpeg").default;
const product_02_image_02 = require("./../images/products/p2-2.jpeg").default;

const product_03_image_01 = require("./../images/products/p3-1.jpeg").default;
const product_03_image_02 = require("./../images/products/p3-2.jpeg").default;

const product_04_image_01 = require("./../images/products/p4-1.jpeg").default;
const product_04_image_02 = require("./../images/products/p4-2.jpeg").default;

const product_05_image_01 = require("./../images/products/p5-1.jpeg").default;
const product_05_image_02 = require("./../images/products/p5-2.jpeg").default;

const product_06_image_01 = require("./../images/products/p6-1.jpeg").default;
const product_06_image_02 = require("./../images/products/p6-2.jpeg").default;

const product_07_image_01 = require("./../images/products/p7-1.jpg").default;
const product_07_image_02 = require("./../images/products/p7-2.jpg").default;

const product_08_image_01 = require("./../images/products/p8-1.jpeg").default;
const product_08_image_02 = require("./../images/products/p8-2.jpeg").default;

const product_09_image_01 = require("./../images/products/p9-1.jpeg").default;
const product_09_image_02 = require("./../images/products/p9-2.jpeg").default;

const product_010_image_01 = require("./../images/products/p10-1.jpeg").default;
const product_010_image_02 = require("./../images/products/p10-2.jpeg").default;

const products = [
  {
    name: "Nón Baseball Cap 1988 Kaki",
    price: 95000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "phu-kien",
    slug: "non-baseball-cap-1988-kaki",
  },
  {
    name: "Nón Baseball Cap Dunk",
    price: 95000,
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "phu-kien",
    slug: "non-baseball-cap-dunk",
  },
  {
    name: "SMTN Extreme 21050 Kaki",
    price: 230000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "ao",
    slug: "smtn-extreme-21050-kaki",
  },
  {
    name: "ATTN Extreme Trơn 21036",
    price: 195000,
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "ao",
    slug: "sttn-extreme-tron-21036",
  },
  {
    name: "ATTN In Extreme 21056 Kaki",
    price: 195000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "ao",
    slug: "attn-in-extreme-21056-kaki",
  },
  {
    name: "SMTD Seirtand 21015 Vải Mềm Rũ",
    price: 245000,
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "ao",
    slug: "smtd-seirtand-21015-vai-mem-ru",
  },
  {
    name: "Dép Slippers Quai Trong",
    price: 110000,
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "phu-kien",
    slug: "dep-slippers-quai-trong",
  },
  {
    name: "QD Lưng Thun Bo Rút",
    price: 185000,
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "quan",
    slug: "qd-lung-thun-bo-rut",
  },
  {
    name: "Shorts Kaki 1/2 Lưng Thun Túi Nắp",
    price: 170000,
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "quan",
    slug: "shorts-kaki-1/2-lung-thun-tui-nap",
  },
  {
    name: "ATTN Thêu Gấu",
    price: 185000,
    image01: product_010_image_01,
    image02: product_010_image_02,
    categorySlug: "ao",
    slug: "attn-theu-gau",
  },
];

const getAllProducts = () => products;

const getProducts = (quantity) => {
  const max = products.length - quantity;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + quantity);
};

const productData = {
  getAllProducts,
  getProducts,
};

export default productData;

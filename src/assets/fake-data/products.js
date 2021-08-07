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

// size: s, m, l, xl, f
// colors: kaki, nâu, đen, trắng, xanh rêu, xanh đậm, xám

const products = [
  {
    sku: "7270-2",
    name: "Nón Baseball Cap 1988 Kaki",
    price: 95000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    slug: "non-baseball-cap-1988-kaki",
    categorySlug: "phu-kien",
    description: "Chu vi nón 55 - 60 cm.",
    colors: ["kaki", "nâu", "đen", "trắng", "xanh rêu", "xanh đậm"],
    size: ["f"],
  },
  {
    sku: "7269-2",
    name: "Nón Baseball Cap Dunk",
    price: 95000,
    image01: product_02_image_01,
    image02: product_02_image_02,
    slug: "non-baseball-cap-dunk",
    categorySlug: "phu-kien",
    description: "Chu vi nón 55 - 60 cm",
    colors: ["kaki", "nâu", "đen", "xanh rêu", "xanh đậm"],
    size: ["f"],
  },
  {
    sku: "7268-S",
    name: "SMTN Extreme 21050 Kaki",
    price: 230000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    slug: "smtn-extreme-21050-kaki",
    categorySlug: "ao",
    description:
      "Mẫu cao 1m70 nặng 55kg mặc size S<br />Số đo sản phẩm (cm):<br />- S: ngực 110, dài áo vạt trước 66, vạt sau 70<br />- M: ngực 118, dài áo vạt trước 70, vạt sau 73<br />- L: ngực 124, dài áo vạt trước 73, vạt sau 76<br />(Sai số cho phép 1-3cm).<br />Vui lòng tham khảo và so sánh với kích thước áo hoặc quần của bạn để chọn được size phù hợp nhất.",
    colors: ["kaki"],
    size: ["s", "m", "l"],
  },
  {
    sku: "7267-1S",
    name: "ATTN Extreme Trơn 21036",
    price: 195000,
    image01: product_04_image_01,
    image02: product_04_image_02,
    slug: "sttn-extreme-tron-21036",
    categorySlug: "ao",
    description:
      "Chất liệu: 100% cotton<br />Độ dày: vừa phải<br />Mùa: hè<br />Form áo: thông thường<br />Mẫu cao 1m70 nặng 55kg mặc size S<br />Số đo sản phẩm (cm):<br />- S: ngực 104, dài áo 72<br />- M: ngực 108, dài áo 73<br />- L: ngực 112 dài áo 75<br />(Sai số cho phép 1-3cm).<br />Vui lòng tham khảo và so sánh với kích thước áo hoặc quần của bạn để chọn được size phù hợp nhất.",
    colors: ["nâu", "kaki", "đen"],
    size: ["s", "m", "l"],
  },
  {
    sku: "7266-1S",
    name: "ATTN In Extreme 21056 Kaki",
    price: 195000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    slug: "attn-in-extreme-21056-kaki",
    categorySlug: "ao",
    description:
      "Mẫu cao 1m70 nặng 55kg mặc size S<br />Số đo sản phẩm (cm):<br /- S: ngực 106, dài áo 68<br /- M: ngực 110, dài áo 70<br /- L: ngực 114 dài áo 72<br /(Sai số cho phép 1-3cm).<br /Vui lòng tham khảo và so sánh với kích thước áo hoặc quần của bạn để chọn được size phù hợp nhất.",
    colors: ["kaki", "đen"],
    size: ["s", "m", "l"],
  },
  {
    sku: "7264-1S",
    name: "SMTD Seirtand 21015 Vải Mềm Rũ",
    price: 245000,
    image01: product_06_image_01,
    image02: product_06_image_02,
    slug: "smtd-seirtand-21015-vai-mem-ru",
    categorySlug: "ao",
    description:
      "Mẫu cao 1m70 nặng 55kg mặc size S<br />Số đo sản phẩm (cm):<br /- S: ngực 110, dài áo 70<br /- M: ngực 113, dài áo 72<br /- L: ngực 116 dài áo 75<br /(Sai số cho phép 1-3cm).<br /Vui lòng tham khảo và so sánh với kích thước áo hoặc quần của bạn để chọn được size phù hợp nhất.",
    colors: ["kaki", "trắng", "xám"],
    size: ["s", "m", "l"],
  },
  {
    sku: "7262-S41",
    name: "Dép Slippers Quai Trong",
    price: 110000,
    image01: product_07_image_01,
    image02: product_07_image_02,
    slug: "dep-slippers-quai-trong",
    categorySlug: "phu-kien",
    description: "",
    colors: [],
    size: [],
  },
  {
    sku: "7260-1S",
    name: "QD Lưng Thun Bo Rút",
    price: 185000,
    image01: product_08_image_01,
    image02: product_08_image_02,
    slug: "qd-lung-thun-bo-rut",
    categorySlug: "quan",
    description:
      "Mẫu cao 1m70 nặng 55kg mặc size S.<br />Số đo sản phẩm (cm):<br /-  S: eo 64-80, mông 112, dài 93.<br /-  M: eo 66-82, mông 118, dài 96.<br /-  L: eo 70-86, mông 120, dài 98.<br /(Sai số cho phép 1-3cm).<br /Vui lòng tham khảo và so sánh với kích thước áo hoặc quần của bạn để chọn được size phù hợp nhất",
    colors: ["xám", "đen"],
    size: ["s", "m", "l"],
  },
  {
    sku: "7259-1S",
    name: "Shorts Kaki 1/2 Lưng Thun Túi Nắp",
    price: 170000,
    image01: product_09_image_01,
    image02: product_09_image_02,
    slug: "shorts-kaki-1/2-lung-thun-tui-nap",
    categorySlug: "quan",
    description:
      "Mẫu cao 1m70 nặng 55kg mặc size S<br />Số đo sản phẩm (cm):<br /-  S: eo 72-76, mông 104, dài 46, ống quần 50<br /-  M: eo 76-80, mông 108, dài 48, ống quần 52<br /-  L: eo 80-84, mông 110, dài 100, ống quần 54<br />-  XL: eo 82-86, mông 112, dài 102, ống quần 56<br /(Sai số cho phép 1-3cm).<br /Vui lòng tham khảo và so sánh với kích thước áo hoặc quần của bạn để chọn được size phù hợp nhất.",
    colors: ["trắng", "kaki", "đen"],
    size: ["s", "m", "l", "xl"],
  },
  {
    sku: "7258-1S",
    name: "ATTN Thêu Gấu",
    price: 185000,
    image01: product_010_image_01,
    image02: product_010_image_02,
    slug: "attn-theu-gau",
    categorySlug: "ao",
    description:
      "Chất liệu: 100% cotton<br />Độ dày: vừa phải<br /Mùa: hè<br /Form áo: thông thường<br /Mẫu cao 1m70 nặng 55kg mặc size M<br /Số đo sản phẩm (cm):<br /- S: ngực 96, dài áo 68<br /- M: ngực 98, dài áo 70<br /- L: ngực 102 dài áo 72<br /- XL: ngực 106, dài áo 74<br /(Sai số cho phép 1-3cm).<br /Vui lòng tham khảo và so sánh với kích thước áo hoặc quần của bạn để chọn được size phù hợp nhất.",
    colors: ["kaki", "trắng"],
    size: ["s", "m", "l", "xl"],
  },
];

export default products;

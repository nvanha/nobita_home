import React from "react";

import Helmet from "./../components/Helmet/Helmet";
import Slider from "./../components/Slider/Slider";
import Section, {
  SectionTitle,
  SectionBody,
} from "./../components/Section/Section";
import Grid from "./../components/Grid/Grid";
import ProductCard from "./../components/ProductCard/ProductCard";

import sliderData from "./../assets/fake-data/slider";
import productData from "../assets/fake-data/products";

const HomePage = () => {
  return (
    <Helmet title="Home">
      {/* Slider */}
      <Slider data={sliderData} />
      {/* End Slider */}

      {/* New Product */}
      <Section>
        <SectionTitle>
          <h2>Sản phẩm mới</h2>
        </SectionTitle>
        <SectionBody>
          <div className="container">
            <Grid col={5} mdCol={3} smCol={2} gap={20}>
              {productData.getProducts(10).map((product, index) => (
                <ProductCard
                  key={index}
                  image01={product.image01}
                  image02={product.image02}
                  name={product.name}
                  price={product.price}
                  slug={product.slug}
                />
              ))}
            </Grid>
          </div>
        </SectionBody>
      </Section>
      {/* End New Product */}
    </Helmet>
  );
};

export default HomePage;

import React, { useEffect } from "react";

import Helmet from "./../components/Helmet/Helmet";
import Breadcrumb from "./../components/Breadcrumb/Breadcrumb";
import ProductView from "./../components/ProductView/ProductView";
import Section, {
  SectionTitle,
  SectionBody,
} from "./../components/Section/Section";
import Grid from "./../components/Grid/Grid";
import ProductCart from "./../components/ProductCard/ProductCard";
import PageNot from "./../components/PageNot/PageNot";

import { useDispatch, useSelector } from "react-redux";

import * as Actions from "./../actions/index";

const ProductPage = (props) => {
  const product = useSelector((state) => state.productDetails);
  const relateProducts = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const { slug } = props.match.params;
    dispatch(Actions.actGetProductBySlug(slug));
    dispatch(Actions.actGetProductsByQuantity(5));
  }, [dispatch, props]);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return product !== null ? (
    <Helmet title={product.name}>
      {/* Breadcrumb-shop */}
      <Breadcrumb
        breadcrumbRoot={"Sản phẩm mới"}
        breadcrumbChild={product.name}
      />
      {/* End Breadcrumb-shop */}

      <div className="product-details-wrapper">
        <div className="container">
          <div className="product-details-inner">
            <div className="product-details-inner-wrap">
              <ProductView product={product} />

              <Section>
                <SectionTitle>
                  <h2>Sản phẩm liên quan</h2>
                </SectionTitle>
                <SectionBody>
                  <Grid col={5} mdCol={3} smCol={2} gap={20}>
                    {relateProducts.map((item, index) => (
                      <ProductCart
                        key={index}
                        images={item.images}
                        name={item.name}
                        price={item.price}
                        slug={item.slug}
                        onClick={() => scrollTop()}
                      />
                    ))}
                  </Grid>
                </SectionBody>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  ) : (
    <Helmet title="Không tìm thấy sản phẩm">
      <PageNot title="Không tìm thấy sản phẩm" />
    </Helmet>
  );
};

export default ProductPage;

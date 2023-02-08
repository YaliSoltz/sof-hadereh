import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Reading = () => {
  const booksArr = [
    <div
      className="book"
      style={{
        backgroundImage: `url(https://cdn.shopify.com/s/files/1/0245/9572/6432/products/4_1_aa978c1c-8baf-4493-8ef7-cbe97a74b632_1024x1024.jpg?v=1673362876)`,
      }}
    ></div>,
    <div
      className="book"
      style={{
        backgroundImage: `url(https://newmedia.calcalist.co.il/magazine-22-09-22/images/6-maavak.jpg)`,
      }}
    ></div>,
    <div className="book"></div>,
    <div className="book"></div>,
    <div
      className="book"
      style={{
        backgroundImage: `url(https://newmedia.calcalist.co.il/magazine-22-09-22/images/6-maavak.jpg)`,
      }}
    ></div>,
  ];

  return (
    <div className="closet-container">
      <div className="shelf-container">
        <div className="cuboid">
          <div className="cuboid__face cuboid__face--bottom"></div>
          <div className="cuboid__face cuboid__face--back"></div>
        </div>
      </div>
      <div className="books-container">
        <h2 className="books-category">קטגוריה: </h2>
        <div className="carousel-container">
          <AliceCarousel
            responsive={{
              0: { items: 1 },
              700: { items: 4 },
            }}
            disableDotsControls="true"
            disableButtonsControls="true"
            items={booksArr}
            autoPlay={true}
            autoPlayInterval={5000}
            infinite={true}
          />
        </div>
      </div>
      <div className="floor-thickness"></div>
      <div className="shelf-container">
        <div className="cuboid">
          <div className="cuboid__face cuboid__face--bottom"></div>
          <div className="cuboid__face cuboid__face--back"></div>
        </div>
      </div>
      <div className="books-container">
        <h2 className="books-category">קטגוריה: </h2>
        <div className="carousel-container">
          <AliceCarousel
            responsive={{
              0: { items: 1 },
              700: { items: 4 },
            }}
            disableDotsControls="true"
            disableButtonsControls="true"
            mouseTracking
            items={booksArr}
            controlsStrategy="responsive"
            autoPlay={true}
            autoPlayInterval={5000}
            infinite={true}
          />
        </div>
      </div>
      <div className="floor-thickness"></div>
      <div className="shelf-container">
        <div className="cuboid">
          <div className="cuboid__face cuboid__face--bottom"></div>
          <div className="cuboid__face cuboid__face--back"></div>
        </div>
      </div>
      <div className="books-container">
        <h2 className="books-category">קטגוריה: </h2>
        <div className="carousel-container">
          <AliceCarousel
           responsive={{
            0: { items: 1 },
            700: { items: 4 },
          }}
          disableDotsControls="true"
          disableButtonsControls="true"
          mouseTracking
          items={booksArr}
          controlsStrategy="responsive"
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          />
        </div>
      </div>
      <div className="floor-thickness"></div>
      <div className="shelf-container">
        <div className="cuboid">
          <div className="cuboid__face cuboid__face--bottom"></div>
          <div className="cuboid__face cuboid__face--back"></div>
        </div>
      </div>
      <div className="books-container">
        <h2 className="books-category">קטגוריה: </h2>
        <div className="carousel-container">
          <AliceCarousel
            responsive={{
              0: { items: 1 },
              700: { items: 4 },
            }}
            disableDotsControls="true"
            disableButtonsControls="true"
            mouseTracking
            items={booksArr}
            controlsStrategy="responsive"
            autoPlay={true}
            autoPlayInterval={5000}
            infinite={true}
          />
        </div>
      </div>
      <div className="floor-thickness"></div>
    </div>
  );
};

export default Reading;

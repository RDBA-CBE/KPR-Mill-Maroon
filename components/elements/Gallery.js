import React, { useEffect, useState } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const GalleryComponent = ({ data }) => {
  console.log("✌️data --->", data);

  const firstData = data?.slice(0, 1);
  console.log("✌️firstData --->", firstData);

  const lastData = data?.slice(-1);
  console.log("✌️lastDataa --->", lastData);

  return (
    <>
      {/* <SlideshowLightbox className="row gallery-row row-cols-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 mx-auto image-box">
        {data?.map((url, index) => (
          <img
            src={url.src}
            className={` ${
              data?.length >= 3
                ? "deskdop-gallery-images"
                : "mobile-gallery-images"
            }`}
            style={{
              cursor: "pointer",
            }}
          />
        ))}
      </SlideshowLightbox> */}

      <SlideshowLightbox>
        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-1.jpg"
          className="Gallery-image-1"
        />

        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-2.jpg"
          className="Gallery-image-2"
        />

        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-3.jpg"
          className="Gallery-image-3"
        />

        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-4.jpg"
          className="Gallery-image-4"
        />

        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-8.jpg"
          className="Gallery-image-5"
        />

        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-6.jpg"
          className="Gallery-image-6"
        />

        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-7.jpg"
          className="Gallery-image-7"
        />

        <img
          src="/assets/images/kprmill-images/Products/Garment/gallery-5.jpg"
          className="Gallery-image-8"
        />
      </SlideshowLightbox>
    </>
  );
};

export default GalleryComponent;

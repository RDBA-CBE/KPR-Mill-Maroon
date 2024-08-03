import React, { useEffect, useState } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const BrandGallery = ({ data }) => {
 

  return (
    <>
      <SlideshowLightbox className="row  row-cols-lg-2 row-cols-md-2 row-cols-sm-1 brandGallery  mx-auto image-box">
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
      </SlideshowLightbox>

    
    </>
  );
};

export default BrandGallery;

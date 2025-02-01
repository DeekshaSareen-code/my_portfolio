import React from "react";
import PropTypes from "prop-types";
const GalleryCard = ({ imgSrc }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[220px] flex flex-col lg:min-w-[320px]">
      <div className="flex items-center gap-1 mb-3">
        <div className="flex items-center gap-2 mt-auto">
          <figure className="img-box rounded-lg aspect-square">
            <img
              src={imgSrc}
              alt="gallery item"
              loading="lazy"
              className="img-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
export default GalleryCard;

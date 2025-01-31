import React from "react";
import PropTypes from "prop-types";
const GalleryCard = ({ content, imgSrc, name }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        <div className="flex items-center gap-2 mt-auto">
          <figure className="img-box rounded-lg">
            <img
              src={imgSrc}
              alt={name}
              width={44}
              height={44}
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
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default GalleryCard;

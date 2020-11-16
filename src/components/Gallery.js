import React from "react";
import EnterView from "../components/EnterView";
import "../Sass/components/gallery.scss";

const Gallery = ({ photos, toggleMainView, handleToggleMainView }) => {
  return (
    <div className="Gallery">
      {toggleMainView ? (
        <EnterView handleToggleMainView={handleToggleMainView} />
      ) : (
        photos.map((photo) => {
          return (
            <img key={photo.id} className="Gallery__img" src={photo.img_src} />
          );
        })
      )}
    </div>
  );
};

export default Gallery;

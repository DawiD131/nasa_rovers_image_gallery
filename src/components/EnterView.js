import React from "react";
import "../Sass/components/enter-view.scss";

const EnterView = ({ handleToggleMainView }) => (
  <div className="Enter-view">
    <div className="Enter-view__top-h"></div>
    <div className="Enter-view__top-v"></div>
    <h1 className="Enter-view__header">NASA Mars rover photos</h1>
    <button className="Enter-view__btn" onClick={handleToggleMainView}>
      Get started!
    </button>
    <div className="Enter-view__bottom-h"></div>
    <div className="Enter-view__bottom-v"></div>
  </div>
);

export default EnterView;

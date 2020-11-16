import React from "react";
import "../Sass/components/filter-panel.scss";

const FilterPanel = ({ handleRoverChange, roverValue, handleRoverSubmit }) => {
  return (
    <section className="filter-panel">
      <form className="filter-panel__form" onSubmit={handleRoverSubmit}>
        <label>
          Select rover:
          <select value={roverValue} onChange={handleRoverChange}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
        </label>
        <input type="submit" value="Filter" />
      </form>
    </section>
  );
};

export default FilterPanel;

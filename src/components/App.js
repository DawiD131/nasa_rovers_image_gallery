import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FilterPanel from "../components/FilterPanel";
import Gallery from "../components/Gallery";
import "../Sass/components/app.scss";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectRoverValue, setSelectRoverValue] = useState("Curiosity");
  const [toogleMainView, setToggleMainView] = useState(true);

  const handleRoverChange = (e) => setSelectRoverValue(e.target.value);
  const handleToggleMainView = () => setToggleMainView((prev) => !prev);

  const handleRoverSubmit = (event) => {
    event.preventDefault();
    async function getContent(url) {
      try {
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectRoverValue}/photos?sol=1000&api_key=KEGoqVPVOf3jAX747V7zqf5GrtbG7S2SO97mO2O9`
        );
        const data = await response.json();
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(data.hits));
        setPhotos(data.photos.slice(0, 150));
        console.log(data);
      } catch (error) {
        console.log("Request failed", error);
      }
    }

    getContent();
  };

  useEffect(() => {
    async function getContent(url) {
      try {
        const response = await fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KEGoqVPVOf3jAX747V7zqf5GrtbG7S2SO97mO2O9"
        );
        const data = await response.json();
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(data.hits));
        setPhotos(data.photos.slice(0, 150));
        console.log(data);
      } catch (error) {
        console.log("Request failed", error);
      }
    }

    getContent();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {toogleMainView ? null : (
        <FilterPanel
          handleRoverChange={handleRoverChange}
          handleRoverSubmit={handleRoverSubmit}
        />
      )}

      <Gallery
        photos={photos}
        toggleMainView={toogleMainView}
        handleToggleMainView={handleToggleMainView}
      />
    </div>
  );
};

export default App;

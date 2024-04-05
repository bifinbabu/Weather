import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import { useDispatch, useSelector } from "react-redux";
import { get5DaysForecast, getCityData } from "../Store/Slices/WeatherSlice";
import Navbar from "../Components/Navbar/Navbar";
import { pages } from "./config";

function Home() {
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState(true);
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [showError, setShowError] = useState("");

  const handleCitySearch = (e) => {
    e.preventDefault();
    setLoadings(true);
    fetchData();
  };

  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(
      getCityData({
        city,
        unit,
      })
    ).then((res) => {
      if (!res.payload.error) {
        dispatch(
          get5DaysForecast({
            lat: res.payload.data.coord.lat,
            lon: res.payload.data.coord.lon,
            unit,
          })
        );
        navigate(pages.forecast);
      } else {
        console.log("error", res.payload.error);
        setShowError(res.payload.error);
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="background">
        <div className="box">
          <div
            className="home-content"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1 style={{ textAlign: "center" }}>
              Welcome to SkyView Weather - your window to the skies. Explore
              weather forecasts with precision and ease.
            </h1>
            <form onSubmit={handleCitySearch}>
              <label>
                <Icon icon={search} size={20} />
              </label>
              <input
                type="text"
                className="city-input"
                placeholder="Enter City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <div>
                <button type="submit">SEARCH</button>
              </div>
            </form>
            {showError && <div className="error-msg">{showError}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

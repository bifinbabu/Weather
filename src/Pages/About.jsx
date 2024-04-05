import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { pages } from "./config";

function About() {
  const navigate = useNavigate();

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
            <p>
              SkyView Weather isn't just an application; it's your personal
              gateway to the skies. Born from a passion for technology and
              meteorology, SkyView Weather aims to deliver accurate, accessible,
              and aesthetically pleasing weather forecasts to users worldwide.
              Our Mission is simple: to demystify the weather, making forecast
              data easy to understand and accessible for everyone. Whether
              you're planning your week, deciding on the best day for an outdoor
              event, or just curious about the weather patterns, SkyView Weather
              is here to serve. Features at a Glance: Precise Forecasts:
              Leveraging cutting-edge weather APIs, SkyView delivers accurate
              current conditions and forecasts. User-Friendly Design: Our
              application is designed with you in mind - intuitive, simple, and
              effective. Interactive Elements: Toggle between Celsius and
              Fahrenheit, view hourly details, and more - all at your
              fingertips. Globally Local: From the largest metropolises to the
              smallest towns, get the forecast for your location.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
